import {AccordionBody} from "../AccordionBody";
import React from "react";

type  UncontrolledAccordionTitlePropsType = {
    title: string
    collapsed: boolean
}
const UncontrolledAccordionTitle = (props: UncontrolledAccordionTitlePropsType) => {

    console.log('UncontrolledAccordionTitleWithPropsValue rendered')

    return <h1>{props.title}</h1>
}
type UncontrolledAccordionPropsType = {
    title: string
    collapsed: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    return (
        <div>
            <UncontrolledAccordionTitle title={props.title} collapsed={false}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}