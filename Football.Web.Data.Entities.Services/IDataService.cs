using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Services
{
    public interface IDataService<TEntity> where TEntity:class
    {
        void Delete(TEntity entity);
        TEntity Create(TEntity entity);
        void Update(TEntity entity);
        IQueryable<TEntity> Query(params Expression<Func<TEntity, object>>[] includes);
    }

    public interface IDataServiceExtended<TEntity, in TKey> : IDataService<TEntity> where TEntity:Entity<TKey>
    {
        TEntity Get(TKey key, params Expression<Func<TEntity, object>>[] includes);
    }

}
