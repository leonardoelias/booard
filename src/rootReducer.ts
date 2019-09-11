import { combineReducers } from "redux-starter-kit";

import gistsListReducer from 'features/gistsList/gistListSlice'
import setGistSelected from 'features/gistsDisplay/gistsDisplaySlice'
import gistDetailsSlice from 'features/gistDetails/gistDetailsSlice'

const rootReducer = combineReducers({
  gistsListReducer,
  setGistSelected,
  gistDetailsSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
