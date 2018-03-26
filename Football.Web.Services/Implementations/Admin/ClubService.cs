using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Football.Web.Services.Models.Admin.Clubs;
using Football.Web.Data.Entities.Services;
using AutoMapper.QueryableExtensions;

namespace Football.Web.Services.Implementations.Admin
{
    internal class ClubService : IClubService
    {
        private readonly Lazy<IClubDataService> _clubDataService;
        public ClubService(Lazy<IClubDataService> clubDataService)
        {
            _clubDataService = clubDataService;
        }

        public List<ClubPlain> GetClubs(int? countryId)
        {
            var q = _clubDataService.Value.Query();
            if (countryId.HasValue)
                q = q.Where(x => x.CountryId == countryId.Value);
            return q.ProjectTo<ClubPlain>().ToList();
        }

        public ClubPlain GetClub(int clubId)
        {
            var club = _clubDataService.Value.Query().Where(x => x.Id == clubId).ProjectTo<ClubPlain>().FirstOrDefault();
            return club;
        }
    }
}
