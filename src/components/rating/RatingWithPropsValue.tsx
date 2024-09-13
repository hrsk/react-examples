import React from "react";
import {RatingValueType} from "./Rating";

type StarWithPropsValuePropsType = {
    selected: boolean
    value: RatingValueType
    ratingValueHandler: (value: RatingValueType) => void
}

function StarWithPropsValue(props: StarWithPropsValuePropsType) {

    console.log('Star rendered')

    return (
        <span onClick={() => props.ratingValueHandler(props.value)}>
            {
                props.selected
                    ? <b>star </b>
                    : 'start '}
        </span>
    )
}

type RatingWithPropsValuePropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export function RatingWithPropsValue(props: RatingWithPropsValuePropsType) {

    console.log('Rating rendered')

    return (
        <div>
            <StarWithPropsValue selected={props.value > 0} value={1} ratingValueHandler={props.setRatingValue}/>
            <StarWithPropsValue selected={props.value > 1} value={2} ratingValueHandler={props.setRatingValue}/>
            <StarWithPropsValue selected={props.value > 2} value={3} ratingValueHandler={props.setRatingValue}/>
            <StarWithPropsValue selected={props.value > 3} value={4} ratingValueHandler={props.setRatingValue}/>
            <StarWithPropsValue selected={props.value > 4} value={5} ratingValueHandler={props.setRatingValue}/>
        </div>
    )
}