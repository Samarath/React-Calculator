import React from 'react';

const Buttons = (props) => {
    // props.func(props.btn);

    return (
        <button id={props.ids} onClick={() => props.func(props.btn)}> {props.btn} </button>
    )
}

export default Buttons;