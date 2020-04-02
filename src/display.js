import React from 'react';

const Display = (props) => {
   console.log(props.btnName)
    return(
        <div className='display'>
          <p dir='rtl' id='displayCal'>0</p>  
        </div>
    )
}

export default Display;