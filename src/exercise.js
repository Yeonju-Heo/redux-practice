import { bindActionCreators, createStore } from 'redux';

/** 리덕스에서 관리할 상태 정의 */
const initialState = {
    counter: 0,
    text: '',
    list: []
};


/** 액션타입 정의 - 대문자 */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';


/** 액션 생성함수 정의 - 카멜케이스 */
const increase = () => {
    return {
        type: INCREASE  //type 값 필수! 
    }
}

const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text //추가 필드는 마음대로 넣을 수 있음
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

/** 리듀서 만들기 */
// 액션 생성함수를 통해 만들어진 객체들을 참조하여 새로운 상태를 만드는 함수
// 불변성의 원칙을 지킬 것!

const reducer = (state = initialState, action) => {  //state의 초깃값 = initialState
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}


/** 스토어 만들기 */
const store = createStore(reducer);

console.log(store.getState());  // 현재 store 안에 들어있는 상태를 조회


// store 안에 들어있는 상태가 바귈 때마다 listener 함수가 호출 됨
const listener = () => {  
    const state = store.getState();
    console.log(state);
};


const unsubscribe = store.subscribe(listener);  //구독 해제를 원할 경우 호출


/** 액션 디스패치 */
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText());
store.dispatch(addToList({id: 1, text: '어렵다ㅠㅠ'}));



/**
 * 리덕스 스토어 안의 상태는 액션이 디스패치 됨에 따라 업데이트 됨
 * 리스너는 리덕스 상태에 변화가 생길 때마다 호출되는데
 * 액션이 디스패치 되어 상태가 업데이트 되면 리스너가 호출되는 식임!
 */