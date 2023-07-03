import './App.css'
import {SideBar} from "./component/SideBar/SideBar.tsx";
import {SearchBlock} from "./component/SearchBlock/SearchBlock.tsx";
import {Route, Routes} from "react-router-dom";
import {SelectedBlock} from './component/SelectedBlock/SelectedBlock.tsx';
import {FilmCard} from './component/Singlefilm/SingleFilm.tsx';
import {useEffect} from "react";
import {apiAuth} from "./api/apiSelectedFilms.ts";
import {Main} from "./pages/Main/Main.tsx";


function App() {
 useEffect(()=> {
    apiAuth.auth().then((response)=> {
        const token = response.data.token;
        localStorage.setItem('token', token);
    })
 },[])


    return (
        <div className="mainBlock">
            <SideBar/>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/searchBlock"} element={<SearchBlock/>}/>
                <Route path={"/selected"} element={<SelectedBlock/>}/>
                <Route path={"/film"} element={<FilmCard/>}/>
            </Routes>
        </div>
    )
}

export default App
