import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType, RatingWithCallbackValue, RatingWithPropsValue} from "./components/Rating";
import {OnOff} from "./components/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);


    return (
        <div className="App">
            <PageTitle title={'THIS IS APP COMPONENT!'}/>
            <PageTitle title={'HELLO WORLD!'}/>


            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Users'} collapsed={true}/>

            <Rating value={3}/>
            <RatingWithCallbackValue value={ratingValue} setRatingValue={setRatingValue}/>
            <RatingWithPropsValue value={ratingValue} setRatingValue={setRatingValue}/>

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*<OnOff on={true}/>*/}
            <OnOff/>

            <UncontrolledAccordion title={'Uncontrolled MENU'}/>

            <UncontrolledRating/>
        </div>
    );
}

export default App;


type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}
