import { Note } from '../models/note.model';
import { NoteAction, NotesActionTypes } from '../actions/note.actions';


export interface NotesState {
  list: Note[],
  loading: boolean,
  error: Error;
}


const initialState: NotesState = {
  list: [],
  loading: false,
  error: undefined
};

export function NotesReducer(state: NotesState = initialState, action: NoteAction) {
  switch (action.type) {
    case NotesActionTypes.LOAD_ITEMS:
      return {
        ...state,
        loading: true
      }
    case NotesActionTypes.LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }
    case NotesActionTypes.LOAD_ITEMS_FAILURE: 
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    
    case NotesActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      }
    case NotesActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case NotesActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case NotesActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case NotesActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      }
    case NotesActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case NotesActionTypes.UPDATE_ITEM:
      return {
        ...state,
        loading: true
      };
    case NotesActionTypes.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.map(item => {
           var temp = Object.assign({}, item);
            if(item.id == action.payload.id)
             temp = action.payload;
            return temp;
        })
      }
    case NotesActionTypes.UPDATE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}