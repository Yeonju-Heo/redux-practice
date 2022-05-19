/** 액션 타입 선언 */
const 액션명대문자로 = '접두사(파일명)/액션명';


/** 액션 생성함수 선언 */
export const 함수명 = (text) => ({
    type: '액션명',
    text //여러가지 데이터 형식
})


/** 초기 상태 선언 */
const initialState = {
    //여러가지 값
}


/** 리듀서 선언 */
export default function 리듀서명(state = initialState, action) {
    switch (action.type) {
        case 타입1:
            return {
                ...state,
                text: "안녕하세요~"
            };
        case 타입2:
            return {
                ...state,
                number: state.number + 1
            };
        default:
            return state;
    }
}