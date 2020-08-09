import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Note } from '../models/note.model';
import { AppState } from '../models/app-state.model';
import { LoadItemsSuccessAction, LoadItemsAction, AddItemAction, DeleteItemAction } from '../actions/note.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notes: Observable<Array<Note>>;
  loading: Observable<Boolean>;
  error: Observable<Error>;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new LoadItemsAction());
    this.notes = this.store.select(store=> store.notes.list);
    this.loading = this.store.select(store => store.notes.loading);
    this.error = this.store.select(store => store.notes.error);
  }

  editNote(id: string){
    this.router.navigate(['edit',id]);
  }

  deleteNote(id: string, event) {
    event.stopPropagation();
    this.store.dispatch(new DeleteItemAction(id));
  }
}