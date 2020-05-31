import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {get} from 'axios';

const counterReducer = function(state={count:1},action){
  console.log(action)
  switch (action.type) {
    case 'add':
      return {
        count:state.count+1
      }
    case 'reduce':
      return {
        count:state.count-1
      }
    default:
      return state;
  }
}
const postReducer = function(state={list:[{title:'你好'}]},action){
  console.log(action)
  switch (action.type) {
    case 'loadpost':
      return {
        list:action.payload
      }
    default:
      return state;
  }
}
//合并多个reducer
const rootReducer = combineReducers({
  counter:counterReducer,
  post:postReducer
})
//把合并的reducer放入存储中
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...[thunk])
  )
);

console.log(store.getState())

//type和payload是自定义属性，用来控制流程和要设置的数据
store.dispatch({
  type:'add',
  payload:{}
})
store.dispatch(async function(dispatch){
  const res = await get('http://jsonplaceholder.typicode.com/posts');
  dispatch({
    type:'loadpost',
    payload:res.data
  })
})
console.log(store.getState())
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
