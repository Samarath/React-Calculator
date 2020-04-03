import React from 'react';

const Display = (props) => {
    return(
        <div className='display'>
          <input defaultValue={0} dir='rtl' id='disp' readOnly maxLength={16}/>  
        </div>
    )
}

export default Display;