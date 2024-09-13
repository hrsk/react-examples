import React, {useState} from "react";
import {RatingValueType} from "../Rating";

type UncontrolledStarWithCallbackValuePropsType = {
    selected: boolean
    ratingValueHandler: () => void
}

function UncontrolledStarWithCallbackValue(props: UncontrolledStarWithCallbackValuePropsType) {

    console.log('UncontrolledStarWithCallbackValue rendered')

    return (
        <span onClick={props.ratingValueHandler}>
        {
            props.selected ? <b>star </b> : 'star '
        }
    </span>
    )
}

type UncontrolledRatingWithCallbackValuePropsType = {
    defaultValue: RatingValueType
    onClickHandler: (value: RatingValueType) => void
}

export function UncontrolledRatingWithCallbackValue(props: UncontrolledRatingWithCallbackValuePropsType) {

    console.log('UncontrolledRatingWithCallbackValue rendered')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div style={{display: "flex", alignItems: "center", gap: '20px'}}>
            <h1>UncontrolledRatingWithCallbackValue: </h1>
            <UncontrolledStarWithCallbackValue selected={ratingValue > 0} ratingValueHandler={() => {
                setRatingValue(1);
                props.onClickHandler(1)
            }}/>
            <UncontrolledStarWithCallbackValue selected={ratingValue > 1} ratingValueHandler={() => {
                setRatingValue(2);
                props.onClickHandler(2)
            }}/>
            <UncontrolledStarWithCallbackValue selected={ratingValue > 2} ratingValueHandler={() => {
                setRatingValue(3);
                props.onClickHandler(3)
            }}/>
            <UncontrolledStarWithCallbackValue selected={ratingValue > 3} ratingValueHandler={() => {
                setRatingValue(4);
                props.onClickHandler(4)
            }}/>
            <UncontrolledStarWithCallbackValue selected={ratingValue > 4} ratingValueHandler={() => {
                setRatingValue(5);
                props.onClickHandler(5)
            }}/>
        </div>

    )
}