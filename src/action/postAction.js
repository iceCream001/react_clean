import {post} from 'axios';

export const loadpost =  async function(dispatch){
    const res = await post('http://jsonplaceholder.typicode.com/posts');
    dispatch({
      type:'loadpost',
      payload:res.data
    })
  }