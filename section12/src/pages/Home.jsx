import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

const Home = () => {
    // const [params, setParams] = useSearchParams();
    // console.log("# value: ", params.get("value"));  // 쿼리스트링 파라미터. (http://localhost:5173/?value=hi)

    return (
        <div>
            <Header title={"2024년 2월"}
                leftChild={<Button text={"<"} />}
                rightChild={<Button text={">"} />}
            />
            <DiaryList />
        </div>
    );
};

export default Home;
