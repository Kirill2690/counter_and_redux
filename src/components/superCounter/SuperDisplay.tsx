import {useSelector} from "react-redux";
import s from '../display/Display.module.css'
import {AppStateType} from "../../bll/store";
import {CounterStateType} from "../../bll/counter-reducer";

export const SuperDisplay = () => {
        const {maxValue, count} = useSelector<AppStateType, CounterStateType>(state => state.counter)
        const scoreboardClassname = count === maxValue ? `${s.counterBoard} ${s.red}` : `${s.counterBoard}`

        return (
            <>
                <div className={scoreboardClassname}>
                    {count}
                </div>
            </>
        );
    };