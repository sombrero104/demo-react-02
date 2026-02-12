import { useState } from "react";

// Hook
// 1. Hook은 반드시 함수 컴포넌트 내부 혹은 커스텀 훅 내부에서만 호출 가능하다.
// 2. Hook을 조건문 혹은 반복문 내부에서 호출할 수 없다.
// 3. 커스텀 훅을 만들어서 사용할 수 있다.

/*
    아래와 같이 'use' 접두사를 함수명에 붙이면 React 내부적으로 커스텀 훅으로 판단하여,
    useState 같은 클래스 클래스 컴포넌트의 기능(훅)들을 사용할 수 있게 된다.
*/
function useInput() { // 접두사 use를 붙인 커스텀 훅.
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

const HookExam = () => {
    // const state = useState();

    // 상단의 useInput() 함수(커스텀 훅)로 옮김.
    /*const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };*/
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <div>
            <h3>Hook Exam</h3>
            <p><input value={input} onChange={onChange} /> {input} </p>
            <p><input value={input2} onChange={onChange2} /> {input2} </p>
        </div>
    );
};

export default HookExam;
