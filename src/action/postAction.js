import {get} from 'axios';

const loadpost =  async function(dispatch){
    const res = await get('http://jsonplaceholder.typicode.com/posts');
    dispatch({
      type:'loadpost',
      payload:res.data
    })
  }

  export default loadpost;