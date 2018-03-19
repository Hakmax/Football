using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Football.Web.Data.Entities.Services.Implementations
{
    internal class UnitOfWork : IUnitOfWork
    {
        private readonly FootballWebDbContext _dbContext;
        public UnitOfWork(FootballWebDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public int SaveChanges()
        {
            return _dbContext.SaveChanges();
        }

        public Task<int> SaveChangesAsync(CancellationToken cancellationToken)
        {
            return _dbContext.SaveChangesAsync(cancellationToken);
        }
    }
}
