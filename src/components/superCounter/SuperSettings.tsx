import {ChangeEvent} from "react";
import s from '../settings/Settings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {CounterStateType, isSettingAC, setMaxValueAC, setStartValueAC} from "../../bll/counter-reducer";


export const SuperSettings = () => {
    const {startValue, maxValue,isSetting} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(isSettingAC(isSetting))
        dispatch(setMaxValueAC(+e.currentTarget.value))
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(isSettingAC(isSetting))
        dispatch(setStartValueAC(+e.currentTarget.value))
    }

    return (
        <div className={s.settingsBlock}>
            <div className={s.settingsBlockInput}>
                <span>max value:</span>
                <input
                    className={(startValue >= maxValue) || maxValue < 0 ? s.errorInput : s.defaultInput}
                    onChange={onChangeMaxHandler}
                    type={'number'}
                    value={maxValue}
                />
            </div>
            <div className={s.settingsBlockInput}>
                <span>start value:</span>
                <input
                    className={(startValue >= maxValue) || startValue < 0 || maxValue < 0 ? s.errorInput : s.defaultInput}
                    onChange={onChangeMinHandler}
                    type={'number'}
                    value={startValue}
                />
            </div>
        </div>
    );
};