import './App.css'
import { useState, useRef } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

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

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        };

        setTodos([newTodo, ...todos]);
    };

    const onUpdate = (targetId) => {
        setTodos(
            todos.map((todo) =>
                todo.id === targetId
                    ? { ...todo, isDone: !todo.isDone }
                    : todo
            )
        );
    };

    return (
        <div className="App">
            <Header />
            <Editor onCreate={onCreate} /> {/* Props로 onCreate를 전달한다. */}
            <List todos={todos} onUpdate={onUpdate} />
        </div>
    )
}

export default App
