import {ChangeEvent} from "react";
import s from './Settings.module.css'
import {Button} from "../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {CounterStateType, isSettingAC, setCountValueAC, setMaxValueAC, setStartValueAC} from "../../bll/counter-reducer";

export const Settings = () => {
    const {startValue, maxValue} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(isSettingAC(true))
        dispatch(setMaxValueAC(+e.currentTarget.value))
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(isSettingAC(true))
        dispatch(setStartValueAC(+e.currentTarget.value))
    }


    const onclickSetHandler = () => {
        dispatch(setCountValueAC(startValue))
        dispatch(isSettingAC(false))
    };


    return (
        <div>
            <div className={s.settings}>
                <div className={s.inputBlock}>
                    <span>maxValue: </span>
                    <input
                        className={
                            startValue >= maxValue ||
                            maxValue < 0
                                ? s.errorInput
                                : s.default
                        }
                        type="number"
                        onChange={onChangeMaxHandler}
                        value={maxValue}
                    />
                </div>
                <div className={s.inputBlock}>
                    <span>startValue: </span>
                    <input
                        value={startValue}
                        type="number"
                        onChange={onChangeMinHandler}
                        className={
                            startValue >= maxValue ||
                            startValue < 0 || maxValue < 0
                                ? s.errorInput
                                : s.default
                        }
                    />
                </div>
            </div>
            <div className={s.buttonContainer}>
                <div>
                    <Button
                        title={"SET ✅"}
                        callback={onclickSetHandler}
                        disabled={
                            startValue === maxValue ||
                            maxValue < 0 ||
                            startValue < 0 ||
                            startValue > maxValue
                        }
                    />
                </div>
            </div>
        </div>
    );
};

