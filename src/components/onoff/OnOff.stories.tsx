import type {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from '@storybook/addon-actions';

const meta: Meta<typeof OnOff> = {
    component: OnOff,
};
export default meta;

type Story = StoryObj<typeof OnOff>;


export const ExampleStories: Story = {
    args: {
        on: false,
        setSwitch: () => {
        },
    },
}

export const OnStories = () => {

    const onClickHandler = action(`on or off has been clicked`)

    return (
        <OnOff on={true} setSwitch={onClickHandler}/>
    )
}
export const OffStories = () => {

    const onClickHandler = action(`on or off has been clicked`)

    return (
        <OnOff on={false} setSwitch={onClickHandler}/>
    )
}


export const OnOffChangedStories = () => {

    const [on, setOn] = useState(true);

    return (
        <OnOff on={on} setSwitch={setOn}/>
    )
}
