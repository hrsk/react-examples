import React, {useState} from "react";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

type UncontrolledAccordionWithCallbackValuePropsType = {
    title: string
}
type UncontrolledAccordionTitleWithCallbackValuePropsType = {
    title: string
    collapsedHandler: () => void
}
const UncontrolledAccordionTitleWithCallbackValue = (props: UncontrolledAccordionTitleWithCallbackValuePropsType) => {
    console.log('UncontrolledAccordionTitleWithCallbackValue rendered')
    return <h1 onClick={props.collapsedHandler}>{props.title}</h1>
}

export function UncontrolledAccordionWithCallbackValue(props: UncontrolledAccordionWithCallbackValuePropsType) {

    console.log('UncontrolledAccordionWithCallbackValue rendered')

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <UncontrolledAccordionTitleWithCallbackValue title={props.title}
                                                         collapsedHandler={() => setCollapsed(!collapsed)}/>
            {
                collapsed && <UncontrolledAccordionBody/>
            }
        </div>
    )
}