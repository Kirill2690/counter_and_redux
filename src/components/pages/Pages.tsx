import {Navigate, Route, Routes} from "react-router-dom";
import {Counter} from "../counter/Counter";
import {SuperCounter} from "../superCounter/SuperCounter";

export enum Path {
    Counter = '/counter',
    SuperCounter = '/super-counter',
}

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={Path.SuperCounter}/>}/>
                <Route path={Path.Counter} element={<Counter/>}/>
                <Route path={'/*'} element={<SuperCounter/>}/>
            </Routes>
        </div>
    );
};