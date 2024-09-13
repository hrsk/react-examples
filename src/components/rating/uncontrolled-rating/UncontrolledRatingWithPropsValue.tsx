import React, {useState} from "react";
import { RatingValueType } from "../Rating";

type UncontrolledStarWithPropsValuePropsType = {
    selected: boolean
    ratingValue: RatingValueType
    ratingValueHandler: (ratingValue: RatingValueType) => void
}

function UncontrolledStarWithPropsValue(props: UncontrolledStarWithPropsValuePropsType) {

    console.log('UncontrolledStarWithPropsValue rendered')

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