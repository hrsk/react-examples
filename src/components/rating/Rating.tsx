import React from "react";


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

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>

    )
}
