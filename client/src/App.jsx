import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Create from './pages/Create';
import Result from './pages/Result';
import NavBar from './components/NavBar';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/health`).then(res => {
            if (res.ok) {
                console.log('Server is healthy');
            } else {
                console.error('Server health check failed');
            }
        })
    }, [])

    return (
        <BrowserRouter>
            <div className='flex flex-col justify-between min-h-screen'>
                <Toaster position='top-center' />
                <NavBar />
                <div className='flex-grow'>
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route path='/create'
                        element={<Create />}
                    />
                    <Route
                        path='/quiz/:quizId'
                        element={<Quiz />}
                    />
                    <Route
                        path='/result'
                        element={<Result />}
                    />
                </Routes>
                </div>
                <div className='text-center my-4'>Copyright © 2025 IDK-Man. All rights reserved.</div>
            </div>
        </BrowserRouter>
    );
}

export default App;
