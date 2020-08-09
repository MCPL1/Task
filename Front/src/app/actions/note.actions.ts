
import { Action } from '@ngrx/store';
import { Note } from '../models/note.model';

export enum NotesActionTypes {
  LOAD_ITEMS = '[NOTES] Load Items',
  LOAD_ITEMS_SUCCESS = '[NOTES] Load Items Success',
  LOAD_ITEMS_FAILURE = '[NOTES] Load Items Failure',
  ADD_ITEM = '[NOTES] Add Item',
  ADD_ITEM_SUCCESS = '[NOTES] Add Item Success',
  ADD_ITEM_FAILURE = '[NOTES] Add Item Failure',
  DELETE_ITEM = '[NOTES] Delete Item',
  DELETE_ITEM_SUCCESS = '[NOTES] Delete Item Success',
  DELETE_ITEM_FAILURE = '[NOTES] Delete Item Failure',
  UPDATE_ITEM = '[NOTES] Update Item',
  UPDATE_ITEM_SUCCESS = '[NOTES] Update Item Success',
  UPDATE_ITEM_FAILURE = '[NOTES] Update Item Failure',
}

export class LoadItemsAction implements Action {
  readonly type = NotesActionTypes.LOAD_ITEMS
}
export class LoadItemsSuccessAction implements Action {
  readonly type = NotesActionTypes.LOAD_ITEMS_SUCCESS

  constructor(public payload: Array<Note>) {}

}
export class LoadItemsFailureAction implements Action {
  readonly type = NotesActionTypes.LOAD_ITEMS_FAILURE
  
  constructor(public payload: string) {}
}


export class AddItemAction implements Action {
  readonly type = NotesActionTypes.ADD_ITEM

  constructor(public payload: Note) { }
}
export class AddItemSuccessAction implements Action {
  readonly type = NotesActionTypes.ADD_ITEM_SUCCESS

  constructor(public payload: Note) { }
}
export class AddItemFailureAction implements Action {
  readonly type = NotesActionTypes.ADD_ITEM_FAILURE

  constructor(public payload: Error) { }
}


export class DeleteItemAction implements Action {
  readonly type = NotesActionTypes.DELETE_ITEM

  constructor(public payload: string) { }
}
export class DeleteItemSuccessAction implements Action {
  readonly type = NotesActionTypes.DELETE_ITEM_SUCCESS

  constructor(public payload: string) { }
}
export class DeleteItemFailureAction implements Action {
  readonly type = NotesActionTypes.DELETE_ITEM_FAILURE

  constructor(public payload: string) { }
}


export class UpdateItemAction implements Action {
  readonly type = NotesActionTypes.UPDATE_ITEM

  constructor(public payload: Note) { }
}
export class UpdateItemSuccessAction implements Action {
  readonly type = NotesActionTypes.UPDATE_ITEM_SUCCESS

  constructor(public payload: Note) { }
}
export class UpdateItemFailureAction implements Action {
  readonly type = NotesActionTypes.UPDATE_ITEM_FAILURE

  constructor(public payload: string) { }
}

export type NoteAction = AddItemAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  DeleteItemAction |
  DeleteItemSuccessAction |
  DeleteItemFailureAction |
  LoadItemsAction |
  LoadItemsFailureAction |
  LoadItemsSuccessAction |
  UpdateItemAction |
  UpdateItemSuccessAction |
  UpdateItemFailureAction
