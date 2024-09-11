import React from "react";

const AccordionBody = () => {

    console.log('AccordionBody rendered')
    
    return (
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
        </ul>
    )
}

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
