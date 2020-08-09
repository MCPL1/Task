import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {  AddItemAction, AddItemSuccessAction, AddItemFailureAction, DeleteItemAction, DeleteItemSuccessAction, LoadItemsAction, NotesActionTypes, LoadItemsSuccessAction, LoadItemsFailureAction, UpdateItemAction, UpdateItemSuccessAction, UpdateItemFailureAction } from '../actions/note.actions'
import { of } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Injectable()
export class NotesEffects {

  @Effect() loadItems = this.actions
    .pipe(
      ofType<LoadItemsAction>(NotesActionTypes.LOAD_ITEMS),
      mergeMap(
        () => this.dataService.getNotes()
          .pipe(
            map(data => {
              return new LoadItemsSuccessAction(data)
            }),
            catchError(error => of(new LoadItemsFailureAction(error)))
          )
      ),
  )

  @Effect() addItem = this.actions
    .pipe(
      ofType<AddItemAction>(NotesActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.dataService.createNote(data.payload)
          .pipe(
            map(() => new AddItemSuccessAction(data.payload)),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
  )
  
  @Effect() deleteItem = this.actions
    .pipe(
      ofType<DeleteItemAction>(NotesActionTypes.DELETE_ITEM),
      mergeMap(
        (data) => this.dataService.deleteNote(data.payload)
          .pipe(
            map(() => new DeleteItemSuccessAction(data.payload)),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
    )

    @Effect() updateItem = this.actions
    .pipe(
      ofType<UpdateItemAction>(NotesActionTypes.UPDATE_ITEM),
      mergeMap(
        (data) => this.dataService.updateNote(data.payload)
          .pipe(
            map(() => new UpdateItemSuccessAction(data.payload)),
            catchError(error => of(new UpdateItemFailureAction(error)))
          )
      )
    )
  constructor(
    private actions: Actions,
    private dataService: DataService
  ) { }
}