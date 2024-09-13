import React from "react";
import {AccordionBody} from "./AccordionBody";

type AccordionWithPropsValuePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export function AccordionWithPropsValue(props: AccordionWithPropsValuePropsType) {

    console.log('AccordionWithPropsValue rendered')

    return (
        <div>
            <AccordionTitleWithPropsValue title={props.title} collapsed={props.collapsed}
                                          setCollapsed={props.setCollapsed}/>
            {
                !props.collapsed && <AccordionBody/>
            }
        </div>
    )
}

type AccordionTitleWithPropsValuePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
const AccordionTitleWithPropsValue = (props: AccordionTitleWithPropsValuePropsType) => {

    console.log('AccordionTitleWithPropsValue rendered')

    return <h1 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h1>
}