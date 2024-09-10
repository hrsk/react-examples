import React, {useState} from "react";

type UncontrolledAccordionWithButtonPropsType = {
    title: string
}

type UncontrolledAccordionTitlePropsType = {
    title: string
}

const UncontrolledAccordionBody = () => {
    console.log('UncontrolledAccordionBody rendered')
    return (
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
        </ul>
    )
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
