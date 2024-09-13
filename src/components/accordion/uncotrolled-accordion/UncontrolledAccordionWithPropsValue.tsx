import React, {useState} from "react";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

type UncontrolledAccordionWithPropsValuePropsType = {
    title: string
}
type  UncontrolledAccordionTitleWithPropsValuePropsType = {
    title: string
    collapsed: boolean
    collapsedHandler: (collapsed: boolean) => void
}
const UncontrolledAccordionTitleWithPropsValue = (props: UncontrolledAccordionTitleWithPropsValuePropsType) => {
    console.log('UncontrolledAccordionTitleWithPropsValue rendered')
    return <h1 onClick={() => props.collapsedHandler(!props.collapsed)}>{props.title}</h1>
}

export function UncontrolledAccordionWithPropsValue(props: UncontrolledAccordionWithPropsValuePropsType) {

    console.log('UncontrolledAccordionWithPropsValue rendered')

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <UncontrolledAccordionTitleWithPropsValue title={props.title} collapsedHandler={setCollapsed}
                                                      collapsed={collapsed}/>
            {
                collapsed && <UncontrolledAccordionBody/>
            }
        </div>
    )
}