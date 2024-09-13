import React from "react";
import {RatingValueType} from "./Rating";

type RatingWithCallbackValueType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}
type StarWithCallbackValuePropsType = {
    selected: boolean
    ratingValueHandler: () => void
}

function StarWithCallbackValue(props: StarWithCallbackValuePropsType) {

    console.log('Star rendered')

    return (
        <span onClick={props.ratingValueHandler}>
            {
                props.selected
                    ? <b>star </b>
                    : 'start '}
        </span>
    )
}

export function RatingWithCallbackValue(props: RatingWithCallbackValueType) {

    console.log('Rating rendered')

    return (
        <div>
            <StarWithCallbackValue selected={props.value > 0} ratingValueHandler={() => props.setRatingValue(1)}/>
            <StarWithCallbackValue selected={props.value > 1} ratingValueHandler={() => props.setRatingValue(2)}/>
            <StarWithCallbackValue selected={props.value > 2} ratingValueHandler={() => props.setRatingValue(3)}/>
            <StarWithCallbackValue selected={props.value > 3} ratingValueHandler={() => props.setRatingValue(4)}/>
            <StarWithCallbackValue selected={props.value > 4} ratingValueHandler={() => props.setRatingValue(5)}/>
        </div>
    )
}