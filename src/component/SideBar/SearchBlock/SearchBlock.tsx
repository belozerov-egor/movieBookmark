import {useAppDispatch} from "../../../hook/hooks.ts";
import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {searchThunks} from "../../../reducer/searchReducer.ts";
import style from "./SearchBlock.module.scss"

export const SearchBlock = () => {
    const dispatch = useAppDispatch();
    const [text, setText] = useState("");
    const navigate = useNavigate();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }
    const sendSearchQuery= ()=> {
        dispatch(searchThunks.searchFilms({title: text}));
        navigate('/searchBlock');
        setText("");
    }

    const disabled = text.trim().length === 0

    return (
        <div className={style.searchBlock}>
            <input placeholder={"Введите название фильма"} value={text} onChange={onChangeHandler} type="text"/>
            <button disabled={disabled} onClick={sendSearchQuery}>НАЙТИ</button>
        </div>
    );
};

