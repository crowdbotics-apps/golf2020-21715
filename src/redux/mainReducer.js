import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard22150049Reducer from '../features/Dashboard22150049/redux/reducers'
import Dashboard21150047Reducer from '../features/Dashboard21150047/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard22150049: Dashboard22150049Reducer,
Dashboard21150047: Dashboard21150047Reducer,

});