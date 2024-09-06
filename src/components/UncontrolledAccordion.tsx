import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    console.log('Accordion rendered')

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <UncontrolledAccordionTitle title={props.title} collapsedHandler={setCollapsed} collapsed={collapsed}/>
            {
                collapsed && <UncontrolledAccordionBody/>
            }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    collapsedHandler: (collapsed: boolean) => void
}

const UncontrolledAccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendered')
    return <h1 onClick={() => props.collapsedHandler(!props.collapsed)}>{props.title}</h1>
}
const UncontrolledAccordionBody = () => {
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