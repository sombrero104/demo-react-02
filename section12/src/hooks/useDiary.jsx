import { useContext, useState, useEffect } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

// 'use' prefix가 붙은 커스텀 훅.
const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(id));

        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true }); // "/" 페이지로 이동하고, 'replace: true' 옵션으로 뒤로가기 방지.
            // useEffect()를 사용했기 때문에 nav가 렌더링된 후 실행되어 뒤로가기가 정상적으로 실행됨.
        }

        setCurDiaryItem(currentDiaryItem);
    }, [id]); // params.id가 변경될 때에만 콜백 함수를 실행.

    return curDiaryItem;
};

export default useDiary;
