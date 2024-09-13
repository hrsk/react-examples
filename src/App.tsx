import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {OnOff} from "./components/onoff/OnOff";
import {UncontrolledOnOff} from "./components/onoff/uncotrolled-onoff/UncontrolledOnOff";
import {AccordionWithPropsValue} from "./components/accordion/AccordionWithPropsValue";
import {AccordionWithCallbackValue} from "./components/accordion/AccordionWithCallbackValue";
import {
    UncontrolledAccordionWithButton
} from "./components/accordion/uncotrolled-accordion/UncontrolledAccordionWithButton";
import {
    UncontrolledAccordionWithCallbackValue
} from "./components/accordion/uncotrolled-accordion/UncontrolledAccordionWithCallbackValue";
import {
    UncontrolledAccordionWithPropsValue
} from "./components/accordion/uncotrolled-accordion/UncontrolledAccordionWithPropsValue";
import {UncontrolledAccordion} from "./components/accordion/uncotrolled-accordion/UncontrolledAccordion";
import {PageTitle} from "./components/page-title/PageTitle";
import {
    UncontrolledRatingWithCallbackValue
} from "./components/rating/uncontrolled-rating/UncontrolledRatingWithCallbackValue";
import {
    UncontrolledRatingWithPropsValue
} from "./components/rating/uncontrolled-rating/UncontrolledRatingWithPropsValue";
import {RatingWithCallbackValue} from "./components/rating/RatingWithCallbackValue";
import {RatingWithPropsValue} from "./components/rating/RatingWithPropsValue";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [collapsedWithPropsValue, setCollapsedWithPropsValue] = useState<boolean>(false);
    const [collapsedWithCallbackValue, setCollapsed] = useState<boolean>(false);
    // const [on, setSwitchOn] = useState<boolean>(false);


    return (
        <div className="App">
            <PageTitle title={'THIS IS APP COMPONENT!'}/>
            <PageTitle title={'HELLO WORLD!'}/>

            <Accordion title={'Accordion'} collapsed={false}/>
            <AccordionWithPropsValue title={'AccordionWithPropsValue'} collapsed={collapsedWithPropsValue}
                                     setCollapsed={setCollapsedWithPropsValue}/>
            <AccordionWithCallbackValue title={'AccordionWithCallbackValue'} collapsed={collapsedWithCallbackValue}
                                        setCollapsed={() => setCollapsed(!collapsedWithCallbackValue)}/>

            <Rating value={3}/>
            <RatingWithCallbackValue value={ratingValue} setRatingValue={setRatingValue}/>
            <RatingWithPropsValue value={ratingValue} setRatingValue={setRatingValue}/>

            {/*<OnOff on={on} setSwitch={setSwitchOn}/>*/}
            <UncontrolledOnOff/>

            {/*<UncontrolledRatingWithPropsValue/>*/}
            {/*<UncontrolledRatingWithCallbackValue/>*/}

            <UncontrolledAccordion title={'UncontrolledAccordion'} collapsed={true}/>
            <UncontrolledAccordionWithButton title={'UncontrolledAccordionWithButton'}/>
            <UncontrolledAccordionWithCallbackValue title={'UncontrolledAccordionWithCallbackValue'}/>
            <UncontrolledAccordionWithPropsValue title={'UncontrolledAccordionWithPropsValue'}/>
        </div>
    );
}

export default App;
