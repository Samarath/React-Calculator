import React from 'react';

const DisplayInfo = (props) => {
    return(
        <div className='inforamtion'>
          <p id='info'>{props.display? props.display: ''}</p>
        </div> 
    )
}

export default DisplayInfo;