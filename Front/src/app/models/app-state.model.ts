import { NotesState } from '../reducers/notes.reducer';

export interface AppState {
  readonly notes: NotesState
}