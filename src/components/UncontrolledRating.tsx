import React, {useState} from "react";

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type UncontrolledStarWithPropsValuePropsType = {
    selected: boolean
    ratingValue: RatingValueType
    ratingValueHandler: (ratingValue: RatingValueType) => void
}

function UncontrolledStarWithPropsValue(props: UncontrolledStarWithPropsValuePropsType) {

    console.log('UncontrolledStarWithPropsValue rendered')

    // return props.selected
    //     ? <span onClick={() => props.ratingValueHandler(props.ratingValue)}><b>star </b></span>
    //     : <span onClick={() => props.ratingValueHandler(props.ratingValue)}>star </span>
    return (
        <span onClick={() => props.ratingValueHandler(props.ratingValue)}>
        {
            props.selected ? <b>star </b> : 'star '
        }
    </span>
    )
}

export function UncontrolledRatingWithPropsValue() {

    console.log('UncontrolledRatingWithPropsValue rendered')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div style={{display: "flex", alignItems: "center", gap: '20px'}}>
            <h1>UncontrolledRatingWithPropsValue: </h1>
            <UncontrolledStarWithPropsValue selected={ratingValue > 0} ratingValue={1}
                                            ratingValueHandler={setRatingValue}/>
            <UncontrolledStarWithPropsValue selected={ratingValue > 1} ratingValue={2}
                                            ratingValueHandler={setRatingValue}/>
            <UncontrolledStarWithPropsValue selected={ratingValue > 2} ratingValue={3}
                                            ratingValueHandler={setRatingValue}/>
            <UncontrolledStarWithPropsValue selected={ratingValue > 3} ratingValue={4}
                                            ratingValueHandler={setRatingValue}/>
            <UncontrolledStarWithPropsValue selected={ratingValue > 4} ratingValue={5}
                                            ratingValueHandler={setRatingValue}/>
        </div>

    )
}

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

export function UncontrolledRatingWithCallbackValue() {

    console.log('UncontrolledRatingWithCallbackValue rendered')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div style={{display: "flex", alignItems: "center", gap: '20px'}}>
            <h1>UncontrolledRatingWithCallbackValue: </h1>
            <UncontrolledStarWithCallbackValue selected={ratingValue > 0} ratingValueHandler={() => setRatingValue(1)}/>
            <UncontrolledStarWithCallbackValue selected={ratingValue > 1} ratingValueHandler={() => setRatingValue(2)}/>
            <UncontrolledStarWithCallbackValue selected={ratingValue > 2} ratingValueHandler={() => setRatingValue(3)}/>
            <UncontrolledStarWithCallbackValue selected={ratingValue > 3} ratingValueHandler={() => setRatingValue(4)}/>
            <UncontrolledStarWithCallbackValue selected={ratingValue > 4} ratingValueHandler={() => setRatingValue(5)}/>
        </div>

    )
}
