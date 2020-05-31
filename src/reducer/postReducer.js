export const postReducer = function(state={list:[{title:'你好'}]},action){
    switch (action.type) {
      case 'loadpost':
        return {
          list:action.payload
        }
      default:
        return state;
    }
  }