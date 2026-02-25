import './App.css';
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import { getEmotionImage } from './util/get-emotion-image';
import Button from './components/Button';
import Header from './components/Header';

const mockData = [
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
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
        case "DELETE":
            return state.filter((item) => String(item.id) !== String(action.id));
        default:
            return state;
    }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    /* const nav = useNavigate();

    const onClickButton = () => {
        nav("/new");
    }; */

    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3); // 초기값 아이디 = 3부터 (mockData에 아이디 2까지 있으므로)

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
                <DiaryDispatchContext.Provider value={ onCreate, onUpdate, onDelete }>
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
