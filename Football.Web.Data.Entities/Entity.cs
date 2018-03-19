using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities
{
    public class Entity<T>
    {
        public T Id { get; set; }
    }

    public class EntityWithName<T>:Entity<T>
    {
        [MaxLength(256), Required]
        public string Name { get; set; }
       
    }
}
