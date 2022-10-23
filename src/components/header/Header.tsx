import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {Path} from "../pages/Pages";

export const Header = () => {

    const activeClass = (props: { isActive: boolean }) => props.isActive ? s.active : s.link

    return (
        <div className={s.container}>
            <NavLink to={Path.Counter} className={activeClass}>Counter with two menu</NavLink>
            <NavLink to={Path.SuperCounter} className={activeClass}>Counter with one menu</NavLink>
        </div>
    );
};