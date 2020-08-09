using System.Collections.Generic;
using Aionys.Models;

namespace AionysTask.Repository
{
    public interface IRepository
    {
        IEnumerable<Note> Get();
        Note Get(string id);
        void Create(Note note);
        void Update(Note note);
        void Delete(string id);
    }
}