import React, {useState} from "react";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

type UncontrolledAccordionWithButtonPropsType = {
    title: string
}
type UncontrolledAccordionTitlePropsType = {
    title: string
}
const UncontrolledAccordionWithButtonTitle = (props: UncontrolledAccordionTitlePropsType) => {
    console.log('UncontrolledAccordionWithButtonTitle rendered')
    return <h1>{props.title}</h1>
}

export function UncontrolledAccordionWithButton(props: UncontrolledAccordionWithButtonPropsType) {

    console.log('UncontrolledAccordionWithButton rendered')

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <div style={{display: "flex"}}>
                <button onClick={() => setCollapsed(!collapsed)}>collapsed</button>
                <UncontrolledAccordionWithButtonTitle title={props.title}/>
            </div>
            {
                collapsed && <UncontrolledAccordionBody/>
            }
        </div>
    )
}