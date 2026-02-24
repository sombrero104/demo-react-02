import './List.css';
import TodoItem from './TodoItem';
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../App';

const List = () => {
    const todos = useContext(TodoStateContext);

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    // useMemo를 사용하기 이전의 getAnalyzedData() 함수(카운트값 갱신) 실행 버전.
    /* const getAnalyzedData = () => {
        const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo) => todo.isDone
        ).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }; */

    /* const { totalCount, doneCount, notDoneCount } =
            getAnalyzedData(); */
    // 이렇게 사용하면 검색을 하는 경우에도 리렌더링되어서 getAnalyzedData()가 호출됨.
    // todos 목록 데이터의 추가, 수정, 삭제 시에만 호출해야함. => useMemo 사용.

    // useMemo 사용하기.
    // const a = useMemo(() => { return 1; }, []);
    // 두번째 인수 배열 => 의존성 배열, deps
    // deps 배열 값이 변경될 경우, 첫번째 인수로 전달하는 콜백 함수가 다시 실행된다.
    // useMemo에서 return 한 값이 a에 저장된다.

    const { totalCount, doneCount, notDoneCount } =
        useMemo(() => {
            console.log("useMemo() START!");
            const totalCount = todos.length;
            const doneCount = todos.filter(
                (todo) => todo.isDone
            ).length;
            const notDoneCount = totalCount - doneCount;

            return {
                totalCount,
                doneCount,
                notDoneCount,
            };
    }, [todos]); // todos 목록 데이터가 변경될 경우에만 콜백 함수를 실행하여 카운트를 갱신한다.

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>

            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요." />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    /* return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />; */
                    return <TodoItem key={todo.id} {...todo} />;
                })}
            </div>
        </div>
    );
};

export default List;
