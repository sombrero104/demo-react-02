import { useReducer } from 'react';

// reducer: 변환기.
// -> 상태를 실제로 변화시키는 변환기 역할.
// state 값을 변경해서 새로운 state 값을 반환시켜 주기만 하면 된다.
// 그럼 reducer가 자동으로 state 값을 불러와서 실제 state 값을 변경시켜 준다.
function reducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            return state;
    }
}

const Exam = () => {
    const [state, dispatch] = useReducer(reducer, 0); // 0: state 초기 값.
    // dispatch: 발송하다, 급송하다.
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수.

    const onClickPlus = () => {
        // dispatch 함수를 호출해서 상태 변화를 요청하면 된다.
        // 인수: 상태가 어떻게 변화되길 원하는지 정보를 전달해 준다.
        // 액션 객체: 인수로 전달된 요청의 내용을 담고 있는 객체.
        dispatch({
            type: "INCREASE",   // 값을 증가시키기.
            data: 1,            // 1만큼 증가.
        });
    };

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1,
        });
    };

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
};

export default Exam;
