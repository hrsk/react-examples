import React from "react";

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

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    console.log('Star rendered')

    return (
        <span>
            {
                props.selected
                    ? <b>star </b>
                    : 'start '}
        </span>
    )
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
}

export function Rating(props: RatingPropsType) {

    console.log('Rating rendered')

    // if (props.value === 1) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 2) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 3) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 4) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 5) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //         </div>
    //     )
    // }

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
        // <div>
        //     <Star selected={false}/>
        //     <Star selected={false}/>
        //     <Star selected={false}/>
        //     <Star selected={false}/>
        //     <Star selected={false}/>
        // </div>
    )
}
