import React from "react";

type AccordionPropsType = {
    title: string
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
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