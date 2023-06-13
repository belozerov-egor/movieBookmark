import './App.css'
import {FilmsBlock} from "./component/FlimsBlock/FilmsBlock.tsx";
import {SideBar} from "./component/SideBar/SideBar.tsx";
import {SearchBlock} from "./component/SearchBlock/SearchBlock.tsx";
import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import {apiAuth} from "./api/apiSelectedFilms.ts";



function App() {
    useEffect(()=> {
        apiAuth.auth()
    },[])



    return (
        <div className="mainBlock">
            <SideBar/>
            <Routes>
                <Route path={"/filmsBlock"} element={<FilmsBlock/>}/>
                <Route path={"/searchBlock"} element={<SearchBlock/>}/>
            </Routes>
        </div>
    )
}

export default App
