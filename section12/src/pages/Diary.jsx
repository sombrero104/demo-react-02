import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import { getStringedDate } from '../util/get-stringed-date';

const Diary = () => {
    const params = useParams();
    // console.log("# params: ", params);

    const nav = useNavigate();

    const curDiaryItem = useDiary(params.id);
    console.log("# curDiaryItem: ", curDiaryItem);
    // 렌더링이 완료되기 전에는 undefined로 출력됨.
    // 때문에 그 전에는 아래와 같이 표시.
    if (!curDiaryItem) {
        return <div>데이터 로딩 중..</div>;
    }

    const { createdDate, emotionId, content } = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));

    return (
        <div>
            <Header
                title={`${title} 기록`}
                leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
                rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />}
            />
            <Viewer emotionId={emotionId} content={content} />
        </div>
    );
};

export default Diary;
