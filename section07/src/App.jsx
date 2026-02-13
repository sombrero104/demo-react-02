import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    // useEffect(() => {}, [])
    // 2번째 인자로 전달한 배열의 값이 바뀌면, 사이드 이펙트로서 1번째 인자인 콜백 함수가 실행된다.

    /* useEffect(() => {
        console.log(`count: ${count}`);
    }, [count]); */
    // 'count' state 값이 바뀔 때마다, 첫번째 인수로 전달한 콜백 함수를 실행시키게 된다.
    // 이 배열을 '의존성 배열'(deps, dependency array)라고 부른다.

    useEffect(() => {
        console.log(`count: ${count} / input: ${input}`);
    }, [count, input]);

    // 1. 마운트
    useEffect(() => {
        console.log("mount");
    }, []);

    // 2. 업데이트
    useEffect(() => {
        if(!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("update");
    });

    const onClickButton = (value) => {
        setCount(count + value);
        // console.log(count); // 바로 위 setCount에서 더한 결과 값이 적용되지 않는다.
        // setCount는 비동기로 동작하기 때문에
        // 콘솔 로그가 출력될 때에는 'count' state 값이 아직 변경되지 않은 상태.
        // 때문에 변경된 값을 사용하려면 useEffect 이용해야 한다.
    };

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
            </section>
            <section>
                <Viewer count={count} />
                {/* 3. 언마운트 */}
                {count % 2 === 0 ? <Even /> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
