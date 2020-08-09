import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state.model';
import { AddItemAction } from '../actions/note.actions';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {

  note: Note;


  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {

    this.note ={ id: uuidv4(), title: "", text: "", date:new Date()};
  }

  onSubmit(){
    if(!this.note.title) this.note.title ="Title";
    console.log(this.note);
    this.store.dispatch(new AddItemAction(this.note));
    this.router.navigate(['']);
  }

}
