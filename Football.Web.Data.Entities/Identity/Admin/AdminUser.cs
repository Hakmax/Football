using Football.Web.Data.Entities.Football.Images;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Identity.Admin
{
    public class AdminUser:EntityWithName<int>
    {
        [Required, Index("IX_Email", IsUnique =true), MaxLength(256)]
        public string Email { get; set; }

        [Required, MaxLength(256)]
        public string PasswordHash { get; set; }

        public bool IsEnabled { get; set; }

        [MaxLength(512)]
        public string About { get; set; }

        [MaxLength(256)]
        public string FullName { get; set; }


        public DateTime? BirthDate { get; set; }

        public int? ProfileImageId { get; set; }
        public virtual ImageItem ProfileImage { get; set; }
    }
}
