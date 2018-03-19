using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Football.Images
{
    public class ImageItem:EntityWithName<int>
    {
        [MaxLength(256)]
        public string DisplayName { get; set; }
        public int ImageFolderId { get; set; }
        public virtual ImageFolder ImageFolder { get; set; }
    }
}
