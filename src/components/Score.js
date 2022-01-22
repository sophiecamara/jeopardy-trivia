import React, { Component } from 'react';

function Score(props) {
const[clicks, setClicks]=useState(0)
const[display,setDisplay]=useState("true")
   
    }

    const Increase = () => {
        setClicks(clicks + 1 );
    }
    const Decrease = () => {
        setClicks(clicks - 1 );
    }
    const ClickShow = () => {
        setDisplay(display);
    }

        return (
            <div>
                <button onClick={Increase}> increment by 1</button>
                <button onClick={Decrease}>decrease by 1</button>
                <button onClick={ClickShow}> {display ? 'Hide number' : 'Show number'}
                </button>
                {display ? <h2>{clicks}</h2> : ''}
            </div>
        );
 
export default Score;

