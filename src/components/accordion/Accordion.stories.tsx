import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from "./Accordion";
import React, {useState} from "react";
import {AccordionWithCallbackValue} from "./AccordionWithCallbackValue";
import {AccordionWithPropsValue} from "./AccordionWithPropsValue";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};
export default meta;

type Story = StoryObj<typeof AccordionWithCallbackValue>;


export const ExampleStories: Story = {
    args: {
        title: 'ExampleAccordionStories',
        collapsed: false,
        setCollapsed: () => {
        },
    },
}

export const AccordionExample = () => {
    return (
        <Accordion title={'Accordion'} collapsed={false}/>
    )
}

export const AccordionExampleWithCallbackValue = () => {

    const [collapsedWithCallbackValue, setCollapsed] = useState<boolean>(false);

    return (
        <AccordionWithCallbackValue title={'AccordionWithCallbackValue'} collapsed={collapsedWithCallbackValue}
                                    setCollapsed={() => setCollapsed(!collapsedWithCallbackValue)}/>
    )
}

export const AccordionExampleWithPropsValue = () => {

    const [collapsedWithPropsValue, setCollapsedWithPropsValue] = useState<boolean>(false);

    return (
        <AccordionWithPropsValue title={'AccordionWithPropsValue'} collapsed={collapsedWithPropsValue}
                                 setCollapsed={setCollapsedWithPropsValue}/>
    )
}
