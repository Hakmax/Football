using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Services.Implementations
{
    abstract class DataService<TEntity> : IDataService<TEntity> where TEntity : class
    {
        private readonly FootballWebDbContext _dbContext;

        private IDbSet<TEntity> Set
        {
            get
            {
                return _dbContext.Set<TEntity>();
            }
        }

        public DataService(FootballWebDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public TEntity Create(TEntity entity)
        {
            return Set.Add(entity);
        }

        public void Delete(TEntity entity)
        {
            Set.Remove(entity);
        }

        public IQueryable<TEntity> Query(params Expression<Func<TEntity, object>>[] includes)
        {
            return includes.Aggregate(Set.AsQueryable(), (query, path) => query.Include(path));
        }

        public void Update(TEntity entity)
        {
            //throw new NotImplementedException();
        }
    }

    abstract class DataServiceExtended<TEntity, TKey> : DataService<TEntity>, IDataServiceExtended<TEntity, TKey> where TEntity : Entity<TKey>
    {
        public DataServiceExtended(FootballWebDbContext dbContext) : base(dbContext)
        {
        }

        public TEntity Get(TKey key, params Expression<Func<TEntity, object>>[] includes)
        {
            return Query(includes).FirstOrDefault(x => (object) x.Id ==(object) key);
        }
    }
}
