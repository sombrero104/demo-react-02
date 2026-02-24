import './TodoItem.css';
import { memo } from 'react';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

    const onChageCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input onChange={onChageCheckbox} readOnly checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

// App의 함수에 useCallback이 추가되었기 때문에 아래와 같이 직접 체크하지 않아도 된다.
/* export default memo(TodoItem, (prevProps, nextProps) => {
    // 원래 이 함수는 prevProps와 nextProps를 비교해서 바뀐 경우 false를 반환하여 리렌더링되고,
    // 바뀌지 않은 경우 true를 반환해서 리렌더링 되지 않음.
    // 이 함수를 커스터마이징해서 id, isDone, content, date 값이 바뀐 경우에만 리렌더링하도록 함.
    if (prevProps.id !== nextProps.id) return false;
    if (prevProps.isDone !== nextProps.isDone) return false;
    if (prevProps.content !== nextProps.content) return false;
    if (prevProps.date !== nextProps.date) return false;

    return true;
}); */

export default memo(TodoItem);
