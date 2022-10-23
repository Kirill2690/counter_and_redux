
import React from 'react';
import {Pages} from "./components/pages/Pages";
import {Header} from "./components/header/Header";
import s from './Main.module.css'


export const Main = () => {
    return (
        <div className={s.main_container}>
            <Header/>
            <Pages/>
        </div>
    );
};
