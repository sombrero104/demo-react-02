import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>{/* App 컴포넌트의 모든 자손 컴포넌트들에게 페이지 라우팅과 관련된 데이터들을 컨텍스트를 통해서 공급. */}
        <App />
    </BrowserRouter>
);
