import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes }  from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Spinner from './spinner/Spinner';
import ErrorGif from "./errorGif/ErrorGif";

import { useState, useEffect } from 'react';

const MainPage = lazy(() => import('./pages/MainPage'));
const NewsListPage = lazy(() => import('./pages/NewsListPage'));


const App = () => {
    const [categoryName, setCategoryName] = useState(null);

    const updateCategory = (category) => {
        setCategoryName(category);
    }

    useEffect(() => {
        setCategoryName(categoryName);
    }, [categoryName]);

    return (
    <Router>
        <div className="app">
            <Header/>
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route exact path="/" element={<MainPage updateCategory={updateCategory}/>}/>
                        <Route exact path="/all-news" element={<NewsListPage categoryName={categoryName}/>}/>
                        <Route path="*" element={<ErrorGif/>}/>
                    </Routes>
                </Suspense>
            </main>
            <Footer/>
        </div>
    </Router>
    )
}

export default App;