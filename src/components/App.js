import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes }  from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Spinner from './spinner/Spinner';
import ErrorGif from "./errorGif/ErrorGif";

const MainPage = lazy(() => import('./pages/MainPage'));
const NewsListPage = lazy(() => import('./pages/NewsListPage'));

const App = () => {
    return (
    <Router>
        <div className="app">
            <Header/>
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route exact path="/" element={<MainPage/>}/>
                        <Route exact path="/all-news" element={<NewsListPage/>}/>
                        {/* <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
                        <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/> */}
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