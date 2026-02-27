import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id);

    usePageTitle(`${params.id}번 일기 수정`);

    // 아래 부분을 Diary.jsx와 공통으로 사용하기 위해 useDiary.jsx로 옮겨서 커스텀 훅을 만듬.
    /* const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));

        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true }); // "/" 페이지로 이동하고, 'replace: true' 옵션으로 뒤로가기 방지.
            // useEffect()를 사용했기 때문에 nav가 렌더링된 후 실행되어 뒤로가기가 정상적으로 실행됨.
        }

        setCurDiaryItem(currentDiaryItem);
    }, [params.id]); // params.id가 변경될 때에만 콜백 함수를 실행. */

    const onClickDelete = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            onDelete(params.id);
            nav("/", { replace: true }); // "/" 페이지로 이동하고, 'replace: true' 옵션으로 뒤로가기 방지.
        }
    };

    const onSubmit = (input) => {
        if (window.confirm("정말 수정하시겠습니까?")) {
            onUpdate(input.id, input.createdDate.getTime(), input.emotionId, input.content);
            nav("/", { replace: true }); // "/" 페이지로 이동하고, 'replace: true' 옵션으로 뒤로가기 방지.
        }
    };

    /* const getCurrentDiaryItem = () => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));

        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true }); // "/" 페이지로 이동하고, 'replace: true' 옵션으로 뒤로가기 방지.
            // main.jsx의 <BrowserRouter>가 다 렌더링 되기도 전에 실행되므로 뒤로가기가 실행이 제대로 안됨.
            //  => 때문에 useEffect()를 사용하도록 변경.
        }

        return currentDiaryItem;
    };

    const currentDiaryItem = getCurrentDiaryItem();
    console.log("# currentDiaryItem: ", currentDiaryItem); */

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
                rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    );
};

export default Edit;
