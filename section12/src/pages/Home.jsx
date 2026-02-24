import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [params, setParams] = useSearchParams();
    console.log("# value: ", params.get("value"));  // 쿼리스트링 파라미터. (http://localhost:5173/?value=hi)

    return <div>Home</div>;
};

export default Home;
