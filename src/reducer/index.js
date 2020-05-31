
import {combineReducers} from 'redux';
import {counterReducer} from './counterReducer';
import {postReducer} from './postReducer';
//合并多个reducer
const rootReducer = combineReducers({
    counter:counterReducer,
    post:postReducer
  })

  export default rootReducer;