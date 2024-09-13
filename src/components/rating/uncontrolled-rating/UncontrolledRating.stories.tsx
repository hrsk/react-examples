import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledRatingWithPropsValue} from "./UncontrolledRatingWithPropsValue";
import {UncontrolledRatingWithCallbackValue} from "./UncontrolledRatingWithCallbackValue";
import {RatingValueType} from "../Rating";

const meta: Meta<typeof UncontrolledRatingWithPropsValue> = {
    component: UncontrolledRatingWithPropsValue,
};
export default meta;

type Story = StoryObj<typeof UncontrolledRatingWithPropsValue>;


export const ExampleStoriesOfUncontrolledRating: Story = {
    args: {
        defaultValue: 0,
        onClickHandler: () => {
        }
    }
}

const onClickHandler = action('rating value has been changed')

export const RatingValueToBeOne = () => {
    return <UncontrolledRatingWithPropsValue defaultValue={1} onClickHandler={onClickHandler}/>
}

export const RatingValueToBeTwo = () => {
    return <UncontrolledRatingWithPropsValue defaultValue={2} onClickHandler={onClickHandler}/>
}

export const RatingValueToBeThree = () => {
    return <UncontrolledRatingWithPropsValue defaultValue={3} onClickHandler={onClickHandler}/>
}

export const RatingValueToBeFour = () => {
    return <UncontrolledRatingWithPropsValue defaultValue={4} onClickHandler={onClickHandler}/>
}

export const RatingValueToBeFive = () => {
    return <UncontrolledRatingWithPropsValue defaultValue={5} onClickHandler={onClickHandler}/>
}


export const UncontrolledRatingStoriesWithPropsValue = () => {

    const onClickHandler = action('value has been changed')

    return <UncontrolledRatingWithPropsValue defaultValue={0} onClickHandler={onClickHandler}/>
}

export const UncontrolledRatingStoriesCallbackValue = () => {

    const onClickHandler = action('value has been changed')

    return <UncontrolledRatingWithCallbackValue defaultValue={0} onClickHandler={onClickHandler}/>
}


