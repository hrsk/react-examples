import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={'THIS IS APP COMPONENT!'}/>
            <PageTitle title={'HELLO WORLD!'}/>


            <Accordion title={'Menu'}/>
            <Accordion title={'Users'}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;

const PageTitle = (props: any) => {
    return <h1>{props.title}</h1>
}
