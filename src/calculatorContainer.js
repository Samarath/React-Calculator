import React from 'react';
import DisplayInfo from './info'
import Display from  './display';
import Buttons from './buttons';

class Calculator extends React.Component{
    constructor(){
        super()
    }

    render(){
        const NameOfButtons = ['AC', '/', 'X', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'];
        const mapped = NameOfButtons.map((names, i) => {
            return(
                <Buttons btn={names} key={i} ids={`btn${i}`}/>
            )
        })
        return(
        <>
          <div id='main-div'>
            <DisplayInfo />
            <Display />
            <div className='btns'>
              {mapped}
            </div>
            
          </div>  
        </> 
        )
    }
}

export default Calculator;