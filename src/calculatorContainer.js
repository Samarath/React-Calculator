import React from 'react';
import DisplayInfo from './info'
import Display from  './display';
import Buttons from './buttons';
import 'jquery';
import $ from'jquery';

class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
          update: 1,
          stopButton: true
        }
    }

    componentDidMount(){

    let input = document.querySelector("#disp");
    let buttons = document.querySelectorAll("button.number-button");

    const blink = () => {
      $('#disp').fadeOut(500);
      $('#disp').fadeIn(500);
    }

    const regainValue = () => {
      input.value = this.state.update;
    }

    const disableButton = (direction) => {
      const idsOfButton = ['btn3', 'btn4', 'btn5', 'btn7', 'btn8', 'btn9', 'btn11', 'btn12', 'btn13', 'btn15', 'btn16'];
      if(direction){
           idsOfButton.forEach(ids => {
          document.getElementById(ids).disabled = true;
        })
      }else{
        idsOfButton.forEach(ids => {
          document.getElementById(ids).disabled = false;
        })
      }
      

    }
    
    const addFunc = (e) => {
      let currentValue = e.currentTarget.value;
      let iv = input.value;

      if(e.currentTarget.value === 'AC' || e.currentTarget.value === '=' || e.currentTarget.value === 'X' ||    e.currentTarget.value === '/' || e.currentTarget.value === '+' || e.currentTarget.value === '-'){

        if(e.currentTarget.value === 'AC'){
           input.value = 0;
           this.setState({stopButton: true});
           disableButton(false);
          };

        console.log(e.currentTarget.value, 'inside');
      }else{
        if(iv === '0'){ //For making the intial zero disappear
          iv = ''; 
        }
        
        if(this.state.stopButton){
          input.value = iv + currentValue;
        }
        
        if(input.value.length > 14){
          this.setState({update: iv + e.currentTarget.value, stopButton: false});
          input.value = 'Digit limit';
          blink();
          setTimeout(regainValue, 1000);
          disableButton(true);
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