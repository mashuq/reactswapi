import starshipState from './starshipState'
import { STARSHIP } from './starshipActionTypes'
import produce from "immer"
import _ from 'lodash'

const starshipReducer = (state = starshipState, action) => {
  switch (action.type) {
    case STARSHIP.LOADLIST: {      
      const nextState = produce(state, draft => {
        draft.list = action.payload;
        draft.loading = false;
        draft.loadListError = false; 
      });
      return nextState;
    }
    case STARSHIP.SAVESTARSHIP: {      
      const nextState = produce(state, draft => {
        draft.list.push(action.payload);
      });
      return nextState;
    }
    case STARSHIP.SHOWFORM: {      
      const nextState = produce(state, draft => {
        draft.showForm = !state.showForm;
      });      
      return nextState;
    } 
    case STARSHIP.LOADLISTERROR: {      
      const nextState = produce(state, draft => {
        draft.list = [];
        draft.loading = false;
        draft.loadListError = true; 
      });
      return nextState;
    }
    default:
      return state
  }
}

export default starshipReducer;