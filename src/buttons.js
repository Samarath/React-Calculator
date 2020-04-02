import React from 'react';

const Buttons = (props) => {
    // props.func(props.btn);

    return (
        <button id={props.ids} className={props.class} value={props.value}> {props.btn} </button>
    )
}

export default Buttons;