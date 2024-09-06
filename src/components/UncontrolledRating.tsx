import React, {useState} from "react";

type UncontrolledStarPropsType = {
    selected: boolean
    ratingValue: RatingValueType
    ratingValueHandler: (ratingValue: RatingValueType) => void
}

function UncontrolledStar(props: UncontrolledStarPropsType) {

    console.log('Star rendered')

    return props.selected
        ? <span onClick={() => props.ratingValueHandler(props.ratingValue)}><b>star </b></span>
        : <span onClick={() => props.ratingValueHandler(props.ratingValue)}>star </span>
}

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    // value: RatingValueType
}

export function UncontrolledRating(props: RatingPropsType) {

    console.log('Rating rendered')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div>
            <UncontrolledStar selected={ratingValue > 0} ratingValue={1} ratingValueHandler={setRatingValue}/>
            <UncontrolledStar selected={ratingValue > 1} ratingValue={2} ratingValueHandler={setRatingValue}/>
            <UncontrolledStar selected={ratingValue > 2} ratingValue={3} ratingValueHandler={setRatingValue}/>
            <UncontrolledStar selected={ratingValue > 3} ratingValue={4} ratingValueHandler={setRatingValue}/>
            <UncontrolledStar selected={ratingValue > 4} ratingValue={5} ratingValueHandler={setRatingValue}/>
        </div>

    )
}
