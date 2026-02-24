import './App.css'
import { useState, useRef, useReducer, useCallback } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Exam from './components/Exam';

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기 1",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "React 공부하기 2",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "React 공부하기 3",
        date: new Date().getTime(),
    }
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
            // 새로운 할 일(action.data)을 맨 앞에 추가해서 새로운 배열을 만들어서 반환. (새 배열을 만들어야 리렌더링이 일어남.)
            // React가 상태가 바뀐 것을 인식. todos => 새로 리턴된 배열로 바뀜. => 리렌더링 됨. (App 함수 다시 실행됨.)
        case "UPDATE":
            // map: 배열을 처음부터 끝까지 하나씩 검사하면서 새 배열을 만들어주는 함수.
            // { ...item, isDone: !item.isDone } 에서
            // '...item'은 스프레드 연산자. item을 복사해서(새 객체를 만들어서) 펼쳐놓고, isDone만 새 값으로 변경하라는 뜻.
            return state.map((item) =>
                item.id === action.targetId
                    ? { ...item, isDone: !item.isDone } // 기존 item을 그대로 복사하고 isDone만 반대(true/false)로 변경.
                    : item
            );
        case "DELETE":
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }
}

function App() {
    // const [todos, setTodos] = useState(mockData);
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    // useCallback 으로 최적화하기. (onCreate, onUpdate, onDelete를 최초 한번만 생성하기.)
    // const func = useCallback(() => {}, []);
    // 첫번째 인수: 불필요하게 재생성하지 않도록 최적화하고 싶은 함수, 두번째 인수: deps. deps가 변경되면 콜백 함수 실행.
    // deps가 빈 배열이기 때문에 최초에만 콜백 함수가 실행됨.

    // 최초 마운트 되었을 때에만 딱 한번 생성이 됨.
    const onCreate = useCallback((content) => {
        dispatch({      // dispatch => reducer() 에게 CREATE 작업 요청을 보냄.
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            },
        });
    }, []);

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId,
        });
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId,
        });
    }, []);

    /* const onCreate = (content) => {
         *//* const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        };

        setTodos([newTodo, ...todos]); *//*

        dispatch({      // dispatch => reducer() 에게 CREATE 작업 요청을 보냄.
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            },
        });
    }; */

    /* const onUpdate = (targetId) => {
         *//* setTodos(
            todos.map((todo) =>
                todo.id === targetId
                    ? { ...todo, isDone: !todo.isDone }
                    : todo
            )
        ); *//*

        dispatch({
            type: "UPDATE",
            targetId: targetId,
        });
    }; */

    /* const onDelete = (targetId) => {
         *//* setTodos(todos.filter((todo) => todo.id != targetId)); *//*

        dispatch({
            type: "DELETE",
            targetId: targetId,
        });
    }; */

    return (
        <div className="App">
            {/* <Exam /> */}
            <Header />
                <Editor onCreate={onCreate} />{/* Props로 onCreate를 전달한다. */}
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    )
}

export default App
