import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
    // useSelector == 리덕스 스토어의 상태를 조회하는 Hook
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과와 동일
    // const { number, diff } = useSelector(  // number, diff가 들어있는 새로운 객첼르 만드는 것이기 때문에 상태 변화를 알 수 없어 매번 재렌더링 됨 >>> 낭비
    //     state => ({
    //         number: state.counter.number,
    //         diff: state.counter.diff
    //     }),
    //     shallowEqual // 불필요한 리렌더링을 막는 방법
    // );

    // 불필요한 리렌더링을 막는 방법
    const number = useSelector(state => state.counter.number);
    const diff = useSelector(state => state.counter.diff);


    //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook'
    const dispatch = useDispatch();
    const onIncrease = () => {
        return dispatch(increase())
    };
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter 
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;