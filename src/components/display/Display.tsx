import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {CounterStateType} from "../../bll/counter-reducer";

import s from './Display.module.css'

export const Display = () => {
    const {count, startValue, maxValue, isSetting} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    return (
        <>
            {isSetting
                ?
                <div
                    className={startValue >= maxValue || maxValue <= 0 || startValue < 0 || maxValue === count
                        ? `${s.redText}`
                        : `${s.setText}`}>
                    {startValue >= maxValue || maxValue <= 0 || startValue < 0 || maxValue === count
                        ? `Incorrect!`
                        : `Enter values and press "SET✅"`}
                </div>
                : <div className={maxValue === count ? s.errorCount : s.count}>{count}</div>}

        </>
    )
}