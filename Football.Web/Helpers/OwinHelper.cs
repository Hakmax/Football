using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Web;

namespace Football.Web.Helpers
{
    internal class OwinHelper
    {
        public static IPrincipal GetOWinPrincipalUserFromCookiesValue(string cookiesValue, string authType)
        {
            IPrincipal user = null;
            cookiesValue = cookiesValue.Replace('-', '+').Replace('_', '/');

            var padding = 3 - ((cookiesValue.Length + 3) % 4);
            if (padding != 0)
                cookiesValue = cookiesValue + new string('=', padding);

            var bytes = Convert.FromBase64String(cookiesValue);

            bytes = System.Web.Security.MachineKey.Unprotect(bytes,
                "Microsoft.Owin.Security.Cookies.CookieAuthenticationMiddleware",
                    authType, "v1");

            using (var memory = new MemoryStream(bytes))
            {
                using (var compression = new GZipStream(memory,
                                                    CompressionMode.Decompress))
                {
                    using (var reader = new BinaryReader(compression))
                    {
                        reader.ReadInt32();
                        string authenticationType = reader.ReadString();
                        reader.ReadString();
                        reader.ReadString();

                        int count = reader.ReadInt32();

                        var claims = new Claim[count];
                        for (int index = 0; index != count; ++index)
                        {
                            string type = reader.ReadString();
                            type = type == "\0" ? ClaimTypes.Name : type;

                            string value = reader.ReadString();

                            string valueType = reader.ReadString();
                            valueType = valueType == "\0" ?
                                           "http://www.w3.org/2001/XMLSchema#string" :
                                             valueType;

                            string issuer = reader.ReadString();
                            issuer = issuer == "\0" ? "LOCAL AUTHORITY" : issuer;

                            string originalIssuer = reader.ReadString();
                            originalIssuer = originalIssuer == "\0" ?
                                                         issuer : originalIssuer;

                            claims[index] = new Claim(type, value,
                                                   valueType, issuer, originalIssuer);
                        }

                        var identity = new ClaimsIdentity(claims, authenticationType,
                                                      ClaimTypes.Name, ClaimTypes.Role);

                        user = new ClaimsPrincipal(identity);
                    }
                }
            }
            return user;
        }
    }
}