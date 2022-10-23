import React from "react";

type SuperButtonType = {
    title: string
    callback: () => void
    disabled?: boolean
    className:string

}


export const SuperButton = (props: SuperButtonType) => {
    return (
        <button onClick={props.callback} className={props.className} disabled={props.disabled}>{props.title}</button>
    )

}
