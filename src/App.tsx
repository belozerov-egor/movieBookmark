import './App.css'
import {FilmsBlock} from "./component/FlimsBlock/FilmsBlock.tsx";
import {SideBar} from "./component/SideBar/SideBar.tsx";
import {SearchBlock} from "./component/SearchBlock/SearchBlock.tsx";
import {Route, Routes} from "react-router-dom";
import { SelectedBlock } from './component/SelectedBlock/SelectedBlock.tsx';
import { FilmCard } from './component/Singlefilm/SingleFilm.tsx';
import {useEffect} from "react";
import {apiAuth} from "./api/apiSelectedFilms.ts";
import {CartoonBlock} from "./component/CartoonBlock/CartoonBlock.tsx";



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
                <Route path={"/"} element={<CartoonBlock/>}/>
                <Route path={"/filmsBlock"} element={<FilmsBlock/>}/>
                <Route path={"/searchBlock"} element={<SearchBlock/>}/>
                <Route path={"/selected"} element={<SelectedBlock/>}/>
                <Route path={"/film"} element={<FilmCard/>}/>
            </Routes>
        </div>
    )
}

export default App
