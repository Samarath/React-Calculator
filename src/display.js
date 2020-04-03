import React from 'react';

const Display = (props) => {
    return(
        <div className='display'>
          <input type="text" id='disp' defaultValue={0} dir='rtl' readOnly/>
        </div>
    )
}

export default Display;