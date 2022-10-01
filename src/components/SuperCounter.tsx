import React from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './SuperCounter.module.css'
import {AppStateType} from "../bll/store";
import {CounterStateType, isSettingAC, setCountValueAC} from "../bll/counter-reducer";
import {SuperSettings} from "./SuperSettings";
import {SuperButton} from "./SuperButton";
import {SuperDisplay} from "./SuperDisplay";


export const SuperCounter = () => {
    const {startValue, maxValue, count,isSetting} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const onClickIncludedHandler = () => {
        dispatch(setCountValueAC(count + 1))
    }
    const onClickResHandler = () => {
        dispatch(setCountValueAC(startValue))

    }
    const onclickSetHandler = () => {
        dispatch(setCountValueAC(startValue))
        dispatch(isSettingAC(!isSetting))
    };

    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                {isSetting
                    ? <SuperDisplay/>
                    : <SuperSettings/>
                }
                {isSetting
                    ? <div className={s.buttonsContainer}>
                        <div>
                            <SuperButton callback={onClickIncludedHandler}
                                    className={s.button}
                                    disabled={count === maxValue}
                                    title={'INC 🚀'}
                            />
                        </div>
                        <div>
                            <SuperButton title={'RES ❌'}
                                    disabled={count === startValue}
                                    className={s.button}
                                    callback={onClickResHandler}/>
                        </div>
                        <div>
                            <SuperButton title={"SET ✅"}
                                    callback={onclickSetHandler}
                                    className={s.button}
                                    disabled={startValue >= maxValue || startValue < 0}
                            />
                        </div>
                    </div>
                    : <div className={s.buttonsContainer}>
                        <div>
                            <SuperButton title={"SET ✅"}
                                    callback={onclickSetHandler}
                                    className={s.button}
                                    disabled={startValue >= maxValue || startValue < 0}
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

