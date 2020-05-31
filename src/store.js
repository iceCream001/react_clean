import { createStore,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/index";

//把合并的reducer放入存储中
const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...[thunk])
    )
  );

  export default store;