import {AccordionBody} from "./AccordionBody";
import React from "react";

type AccordionWithCallbackValuePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
}

export function AccordionWithCallbackValue(props: AccordionWithCallbackValuePropsType) {

    console.log('AccordionWithCallbackValue rendered')

    return (
        <div>
            <AccordionTitleWithCallbackValue title={props.title} setCollapsed={props.setCollapsed}/>
            {
                !props.collapsed && <AccordionBody/>
            }
        </div>
    )
}

type AccordionTitleWithCallbackPropsType = {
    title: string
    setCollapsed: () => void
}
const AccordionTitleWithCallbackValue = (props: AccordionTitleWithCallbackPropsType) => {
    console.log('AccordionTitle rendered')
    return <h1 onClick={props.setCollapsed}>{props.title}</h1>
}