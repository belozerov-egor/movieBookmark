import './App.css'
import {FilmsBlock} from "./component/FlimsBlock/FilmsBlock.tsx";
import {SideBar} from "./component/SideBar/SideBar.tsx";
import {SearchBlock} from "./component/SearchBlock/SearchBlock.tsx";
import {Route, Routes} from "react-router-dom";
import { SelectedBlock } from './component/SelectedBlock/SelectedBlock.tsx';
import { FilmCard } from './component/Singlefilm/SingleFilm.tsx';



function App() {
 



    return (
        <div className="mainBlock">
            <SideBar/>
            <Routes>
                <Route path={"/filmsBlock"} element={<FilmsBlock/>}/>
                <Route path={"/searchBlock"} element={<SearchBlock/>}/>
                <Route path={"/selected"} element={<SelectedBlock/>}/>
                <Route path={"/film"} element={<FilmCard/>}/>
            </Routes>
        </div>
    )
}

export default App
