import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard21150047Reducer from '../features/Dashboard21150047/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard21150047: Dashboard21150047Reducer,

});