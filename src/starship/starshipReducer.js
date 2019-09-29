import starshipState from './starshipState'
import { STARSHIP } from './starshipActionTypes'
import produce from "immer"
import _ from 'lodash'

const header = new Headers({
  'Access-Control-Allow-Origin':'*',
});

const starshipReducer = (state = starshipState, action) => {
  switch (action.type) {
    case STARSHIP.LOADLIST: {      
      const nextState = produce(state, draft => {
        draft.list = action.payload;
      });
      return nextState;
    }   
    default:
      return state
  }
}

export default starshipReducer;