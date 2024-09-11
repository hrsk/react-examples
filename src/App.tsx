import React, {useState} from 'react';
import './App.css';
import {Accordion, AccordionWithCallbackValue, AccordionWithPropsValue} from "./components/Accordion";
import {Rating, RatingValueType, RatingWithCallbackValue, RatingWithPropsValue} from "./components/Rating";
import {OnOff} from "./components/OnOff";
import {
    UncontrolledAccordionWithButton,
    UncontrolledAccordionWithCallbackValue,
    UncontrolledAccordionWithPropsValue
} from "./components/UncontrolledAccordion";
import {UncontrolledRatingWithCallbackValue, UncontrolledRatingWithPropsValue} from "./components/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [collapsedWithPropsValue, setCollapsedWithPropsValue] = useState<boolean>(false);
    const [collapsedWithCallbackValue, setCollapsed] = useState<boolean>(false);
    const [on, setSwitchOn] = useState<boolean>(false);


    return (
        <div className="App">
            <PageTitle title={'THIS IS APP COMPONENT!'}/>
            <PageTitle title={'HELLO WORLD!'}/>

            <Accordion title={'Accordion'} collapsed={false}/>
            <AccordionWithPropsValue title={'AccordionWithPropsValue'} collapsed={collapsedWithPropsValue} setCollapsed={setCollapsedWithPropsValue}/>
            <AccordionWithCallbackValue title={'AccordionWithCallbackValue'} collapsed={collapsedWithCallbackValue} setCollapsed={() => setCollapsed(!collapsedWithCallbackValue)}/>

            <Rating value={3}/>
            <RatingWithCallbackValue value={ratingValue} setRatingValue={setRatingValue}/>
            <RatingWithPropsValue value={ratingValue} setRatingValue={setRatingValue}/>

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <OnOff on={on} setSwitch={setSwitchOn}/>
            <UncontrolledOnOff/>

            <UncontrolledRatingWithPropsValue/>
            <UncontrolledRatingWithCallbackValue/>

            ***
            <UncontrolledAccordionWithButton title={'UncontrolledAccordionWithButton'}/>
            <UncontrolledAccordionWithCallbackValue title={'UncontrolledAccordionWithCallbackValue'}/>
            <UncontrolledAccordionWithPropsValue title={'UncontrolledAccordionWithPropsValue'}/>
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
