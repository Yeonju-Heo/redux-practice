/** 액션 타입 선언 */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';


/** 액션 생성함수 선언 */
let nextId = 1;  // todo 데이터에서 사용할 고유 id
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});


/** 초기 상태 선언 */
const initialState = [
    // {
    //     id: 1,
    //     text: '밥 먹기!!',
    //     done: false
    // }
]


/** 리듀서 선언 */
export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
                todo =>
                    todo.id === action.id  // id가 일치하면
                        ? { ...todo, done: !todo.done }  // done 값을 반전시킴
                        : todo // 아니면 그대로 유지
            )
        default:
            return state;
    }
}