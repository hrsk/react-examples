import React from "react";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendered')

    return (
        <div>
            <AccordionTitle title={props.title}/>
            {
                !props.collapsed && <AccordionBody/>
            }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendered')
    return <h1>{props.title}</h1>
}

