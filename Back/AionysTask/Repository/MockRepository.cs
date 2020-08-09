using System;
using System.Collections.Generic;
using System.Linq;
using Aionys.Models;

namespace AionysTask.Repository
{
    public class MockRepository: IRepository
    {
        public IEnumerable<Note> Get()
        {
            return _notes;
        }

        public Note Get(string id)
        {
            return _notes.SingleOrDefault(item => item.Id == id);
        }

        public void Create(Note note)
        {
            _notes.Add(note);
        }

        public void Update(Note note)
        {
            _notes[_notes.FindIndex(item => item.Id == note.Id)] = note;
        }

        public void Delete(string id)
        {
            _notes.RemoveAll(item => item.Id == id);
        }

        static List<Note> _notes = new List<Note>()
        {
            new Note() {Id = "adf", Title = "note 1", Text = "do manager stuff", Date = new DateTime(2020, 8, 5)},
            new Note() {Id = "asd", Title = "note 2", Text = "do manager2 stuff", Date = new DateTime(2020, 8, 6)},
            new Note() {Id = "asf", Title = "note 3", Text = "do manager3 stuff", Date = new DateTime(2020, 8, 6)},
            new Note() {Id = "aef", Title = "note 4", Text = "do manager4 stuff", Date = new DateTime(2020, 8, 4)},
        };
    }
}