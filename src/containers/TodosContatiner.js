import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
    // useSelector에서 꼭 객체를 반환할 필요는 없음
    // 한 종류의 값만 조회하고 싶을 경우 원하는 값만 반영해도 됨
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);  // 최적화를 위해 callback 사용

    return (
        <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
    )
}

export default TodosContainer;