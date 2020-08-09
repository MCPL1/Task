using System.Collections.Generic;
using Aionys.Models;
using AionysTask.Repository;
using Microsoft.AspNetCore.Mvc;

namespace AionysTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private IRepository _repository;

        public NoteController(IRepository repository)
        {
            this._repository = repository;
        }

        // GET: api/Notes
        [HttpGet]
        public IEnumerable<Note> Get()
        {
            return _repository.Get();
        }

        // GET api/Notes/5
        [HttpGet("{id}")]
        public Note Get(string id)
        {
            return _repository.Get(id);
        }

        // POST api/Notes
        [HttpPost]
        public IActionResult Post([FromBody] Note value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _repository.Create(value);
            return Ok();
        }

        // PUT api/Notes/5
        [HttpPut]
        public IActionResult Put(Note value)
        {
            if (!ModelState.IsValid) 
            {
                return BadRequest();
            }
            _repository.Update(value);
            return Ok();
        }

        // DELETE api/Notes/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            _repository.Delete(id);
            return Ok();
        }
    }
}
