import './App.css';
import { useReducer, useRef, createContext, useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import { getEmotionImage } from './util/get-emotion-image';
import Button from './components/Button';
import Header from './components/Header';

/* const mockData = [
    {
        id: 1,
        createdDate: new Date("2026-02-25").getTime(),
        emotionId: 1,
        content: "1번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date("2026-02-24").getTime(),
        emotionId: 2,
        content: "2번 일기 내용",
    },
    {
        id: 3,
        createdDate: new Date("2026-01-11").getTime(),
        emotionId: 3,
        content: "3번 일기 내용",
    },
]; */

function reducer(state, action) {
    let nextState;
    switch (action.type) {
        case "INIT":
            return action.data;
        case "CREATE":
            nextState = [action.data, ...state];
            break;
        case "UPDATE":
            nextState = state.map((item) =>
                String(item.id) === String(action.data.id) ? action.data : item);
            break;
        case "DELETE":
            nextState = state.filter((item) => String(item.id) !== String(action.id));
            break;
        default:
            return state;
    }

    localStorage.setItem("diary", JSON.stringify(nextState));
    return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    /* const nav = useNavigate();

    const onClickButton = () => {
        nav("/new");
    }; */

    // localStorage.setItem("test", "hello");
    // console.log("# localStorage: ", localStorage.getItem("test"));
    // localStorage.removeItem('test');

    // localStorage.setItem("person", { name: "홍길동"});
    // localStorage는 모든 값을 텍스트로 저장함. 위 처럼 객체를 그대로 저장하면 제대로 저장되지 않음.
    // 때문에 JSON.stringify()를 사용하여 문자열로 저장.
    // localStorage.setItem("person", JSON.stringify({ name: "홍길동"}));

    // 문자를 객체로 물러올 때에는 JSON.parse() 사용.
    // JSON.parse(undefined); 파라미터가 undefined이거나 null이면 오류 발생.
    // console.log("# localStorage: ", JSON.parse(localStorage.getItem("person")));
    // localStorage.removeItem('person');

    // const [data, dispatch] = useReducer(reducer, mockData);
    // const idRef = useRef(3); // 초기값 아이디 = 3부터 (mockData에 아이디 2까지 있으므로)

    const [isLoading, setIsLoading] = useState(true);
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    useEffect(() => {
        const storedData = localStorage.getItem("diary");
        if (!storedData) {
            setIsLoading(false); // '로딩 중' 표시 끝.
            return;
        }
        const parsedData = JSON.parse(storedData);
        // console.log("# parsedData: ", parsedData);
        if (!Array.isArray(parsedData)) {
            setIsLoading(false); // '로딩 중' 표시 끝.
            return;
        }

        let maxId = 0;
        parsedData.forEach((item) => {
            if (Number(item.id) > maxId) {
                maxId = Number(item.id);
            }
        });
        // console.log("# maxId: ", maxId);
        idRef.current = maxId + 1;

        dispatch({
            type: "INIT",
            data: parsedData,
        });
        // 렌더링이 되기 전에 호출되지 않으면 일기 데이터인 data 값을 불러오기 이전 상태이기 때문에 오류 발생.
        // 때문에 페이지 컴포넌트를 불러오기 전에 데이터를 불러오는 동안 로딩 중 표시 필요.
        setIsLoading(false); // '로딩 중' 표시 끝.

    }, []);

    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: { id, createdDate, emotionId, content },
        });
    };

    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id,
        });
    };

    if (isLoading) {
        return <div>데이터 로딩 중 입니다.</div>;
    }

    return (
        <>
            {/* <div>
                <img src={getEmotionImage(1)} />
                <img src={getEmotionImage(2)} />
                <img src={getEmotionImage(3)} />
                <img src={getEmotionImage(4)} />
                <img src={getEmotionImage(5)} />
            </div>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/new"}>New</Link>
                <Link to={"/diary"}>Diary</Link>
            </div>
            <button onClick={onClickButton}>New 페이지로 이동</button> */}

            {/* <Header
                title={"Header"}
                leftChild={<Button text={"Left"} />}
                rightChild={<Button text={"Right"} />}
            />
            <Button
                text={"123"}
                type={"DEFAULT"}
                onClick={() => {
                    console.log("123번 버튼 클릭.");
                }}
            />
            <Button
                text={"123"}
                type={"POSITIVE"}
                onClick={() => {
                    console.log("123번 버튼 클릭.");
                }}
            />
            <Button
                text={"123"}
                type={"NEGATIVE"}
                onClick={() => {
                    console.log("123번 버튼 클릭.");
                }}
            /> */}

            {/* <button onClick={() => {
                onCreate(new Date().getTime(), 1, "Hello");
            }}>일기 추가 테스트</button>
            <button onClick={() => {
                onUpdate(1, new Date().getTime(), 3, "수정된 일기 입니다.");
            }}>일기 수정 테스트</button>
            <button onClick={() => {
                onDelete(1);
            }}>일기 삭제 테스트</button> */}

            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/new" element={<New/>} />
                        <Route path="/diary/:id" element={<Diary/>} />
                        <Route path="/edit/:id" element={<Edit/>} />
                        <Route path="*" element={<NotFound/>} />{/* default */}
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App;
