import React from 'react';

const Buttons = (props) => {

    return (
        <button id={props.ids} value={props.value} onClick={(e) => props.func(e)}> {props.btn} </button>
    )
}

export default Buttons;