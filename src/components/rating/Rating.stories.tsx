import type {Meta, StoryObj} from "@storybook/react";
import {Rating, RatingValueType} from "./Rating";
import {RatingWithCallbackValue} from "./RatingWithCallbackValue";
import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {RatingWithPropsValue} from "./RatingWithPropsValue";

const meta: Meta<typeof Rating> = {
    component: Rating,
};
export default meta;

type Story = StoryObj<typeof Rating>;


export const ExampleStoriesOfRating: Story = {
    args: {
        value: 1,
    }
}

export const RatingValueToBeOne = () => {
    return <Rating value={1}/>
}
export const RatingValueToBeTwo = () => {
    return <Rating value={2}/>
}

export const RatingValueToBeThree = () => {
    return <Rating value={3}/>
}
export const RatingValueToBeFour = () => {
    return <Rating value={4}/>
}
export const RatingValueToBeFive = () => {
    return <Rating value={5}/>
}

export const RatingStoriesWithCallbackValueChanged = () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    const onClickHandler = action('value has been changed')

    return <RatingWithCallbackValue value={ratingValue} setRatingValue={onClickHandler}/>
}

export const RatingStoriesWithPropsValueChanged = () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    const onClickHandler = action('value has been changed')

    return <RatingWithPropsValue value={ratingValue} setRatingValue={onClickHandler}/>
}
