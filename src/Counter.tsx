import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Settings} from "./components/Settings";
import {Display} from "./components/Display";
import s from './Counter.module.css'
import {AppStateType} from "./bll/store";
import {CounterStateType, setCountValueAC} from "./bll/counter-reducer";
import {Button} from "./components/Button";


export const Counter = () => {
    const {startValue, maxValue, count} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const onClickIncludedHandler = () => {
        dispatch(setCountValueAC(count + 1))
    }
    const onClickResHandler = () => {
        dispatch(setCountValueAC(startValue))


    }
    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <Settings/>
            </div>
            <div className={s.counter}>
                <div className={s.display}>
                    <Display/>
                </div>
                <div className={s.buttonContainer}>
                    <Button title={'INC 🚀'} callback={onClickIncludedHandler}
                            disabled={maxValue < 0 || startValue < 0 || startValue === maxValue || startValue > maxValue || maxValue === count}/>
                    <Button title={'RES ❌'} callback={onClickResHandler} disabled={false}/>
                </div>
            </div>
        </div>
    )
}