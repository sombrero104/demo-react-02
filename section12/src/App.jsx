import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import { getEmotionImage } from './util/get-emotion-image';
import Button from './components/Button';
import Header from './components/Header';

function App() {
    const nav = useNavigate();

    const onClickButton = () => {
        nav("/new");
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

            <Header
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
            />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/new" element={<New/>} />
                <Route path="/diary/:id" element={<Diary/>} />
                <Route path="*" element={<NotFound/>} />{/* default */}
            </Routes>
        </>
    );
}

export default App;
