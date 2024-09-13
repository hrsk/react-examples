import type {Meta} from '@storybook/react';
import React from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof UncontrolledOnOff> = {
    component: UncontrolledOnOff,
};
export default meta;


export const UncontrolledOnOffStories = () => {

    const onClickHandler = action('switch has been changed')

    return (
        <UncontrolledOnOff defaultValue={true} onClickHandler={onClickHandler}/>
    )
}
