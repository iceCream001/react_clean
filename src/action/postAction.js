import {get} from 'axios';

// const loadpost =  async function(dispatch){
//     const res = await get('http://jsonplaceholder.typicode.com/posts');
//     dispatch({
//       type:'loadpost',
//       payload:res.data
//     })
//   }
  const loadpost =  function(dispatch,getState){
    console.log('前')
    console.log(getState())
     get('http://jsonplaceholder.typicode.com/posts').then((res)=>{
      dispatch({
        type:'loadpost',
        payload:res.data
      })
      //接口返回后再次派发请求
      dispatch({
        type:'add'
      })
      console.log('后')
      console.log(getState())
    });
    
  }
  export default loadpost;