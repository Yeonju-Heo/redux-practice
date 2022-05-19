import { combineReducers } from "redux";
import counter from './counter';
import todos from './todos';


/** 루트 리듀서
 * 한 프로젝트에 여러 개의 리듀서가 있을 때는 하나로 합쳐서 사용!
 */
const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;

