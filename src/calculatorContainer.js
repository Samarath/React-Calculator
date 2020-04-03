import React from 'react';
import DisplayInfo from './info'
import Display from  './display';
import Buttons from './buttons';

class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
          buttonName: '',
          update: 1,
          value: 0
        }
    }

    componentDidMount(){

    let input = document.querySelector("#disp");
    let buttons = document.querySelectorAll("button.number-button");
    
    const addFunc = (e) => {
      const currentValue = e.currentTarget.value;
      if(currentValue === 'AC' || currentValue === '=' || currentValue === 'X' ||    currentValue === '/' || currentValue === '+' || currentValue === '-'){

        if(currentValue === 'AC') input.value = 0;

        console.log(e.currentTarget.value, 'inside');
      }else{
        const values = input.value + currentValue;

        if(this.state.update){
          input.value = values;
          console.log(e.currentTarget.value)
        }
      }
    };

        
    buttons.forEach((ele, i) => {
    buttons[i].addEventListener('click', addFunc)})

    }

    render(){
        const NameOfButtons = ['AC', '/', 'X', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'];
        const mapped = NameOfButtons.map((names, i) => {
            return(
                <Buttons btn={names} key={i} ids={`btn${i}`} class='number-button' value={names}/> 
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