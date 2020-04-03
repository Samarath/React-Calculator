import React from 'react';

const Display = (props) => {
    return(
        <div className='display'>
          <input type="text" maxLength={10} id='disp' defaultValue={0} dir='rtl' readOnly/>
        </div>
    )
}

export default Display;