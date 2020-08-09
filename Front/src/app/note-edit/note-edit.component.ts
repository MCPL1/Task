import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../models/app-state.model';
import { Store } from '@ngrx/store';
import { Note } from '../models/note.model';
import { LoadItemsAction, UpdateItemSuccessAction, UpdateItemAction } from '../actions/note.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {

  updNote: Note ;

  constructor(private route: ActivatedRoute,private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
   this.store.select(store=>store.notes.list.find(item=>item.id == this.route.snapshot.params['id'])).subscribe(data=>this.updNote = data);
  }

  onSubmit(){
    this.store.dispatch(new UpdateItemAction(this.updNote));
    this.router.navigate(['']);
  }

}
