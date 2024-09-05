import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            THIS IS APP COMPONENT!

            <Accordion/>

            <Rating/>
        </div>
    );
}

export default App;

function Star() {
    return <span>star </span>
}

function Rating() {
    return (
        <div>
            <h1>Rating</h1>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <h1>
                Menu
            </h1>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
            </ul>
        </div>
    )
}