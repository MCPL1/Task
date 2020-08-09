import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './models/note.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "https://localhost:44312/api/note";

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get<Array<Note>>(this.url);
  }

  getNote(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  createNote(item: Note) {
    return this.http.post(this.url, item);
  }
  updateNote(item: Note) {

    return this.http.put(this.url, item);
  }
  deleteNote(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
}
