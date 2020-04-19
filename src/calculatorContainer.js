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
          inputValue: '',
          displayValue: '',
          symbols: '',
          updatedValue: '',
        }
    }

    disableButton = (direction) =>{
      // this is for disable button when we cross the limit and enable the button when we press 'AC'.

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

      mainFunction = (e) =>{

      //------------------------------for future-------------------------------
      // ([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)
      // ^([-+]? ?(\d+|\(\g<1>\))( ?[-+*\/] ?\g<1>)?)$
      // ----------------------------for future-------------------------      
      
      const input = document.getElementById('disp');
      const currentValue = e.target.value;
      let appearCalsValue = '';

      //Make input value zero when AC button is pressed
      if(currentValue === 'AC'){
        input.value = 0;
        this.disableButton(false);
        document.getElementById('btn16').disabled = false;
        this.setState({
           inputValue: '0',
           displayValue: '',
           symbols: '',
           updatedValue: ''
         });
      }

     //appear only once calculation value
     if(currentValue === '+' || currentValue === '-' || currentValue === 'x' ||      currentValue === '/'){
       appearCalsValue = currentValue;
       this.disableButton(false);

      if(this.state.inputValue === '' || input.value === '0' || input.value === '+' ||input.value === '-' || input.value === '/' || input.value === 'x'){

        const updateCal = this.state.inputValue; 
        input.value = appearCalsValue;

        if(updateCal === '0'){ // for removing initial zero from input when calculation appear
          this.setState((preState) => {
            return {displayValue: appearCalsValue}
          });

        }else{
          this.setState({displayValue:updateCal + appearCalsValue});
       }
       
      }else{
        input.value = appearCalsValue;
        this.setState((preState) => {
          return {
            displayValue: preState.displayValue + appearCalsValue,
            updatedValue: preState.displayValue
          }
        });
     }
       
     }else if(currentValue !== 'AC'){
      const addSymbol = this.state.symbols;

      if(currentValue !== '='){  // to not show equal sign in the display

        if(currentValue === '.' || currentValue === '0.'){ //the issue of coming decimal without zero
        if(input.value.slice(0,1) === '+' || input.value.slice(0,1) === '-' || input.value.slice(0,1) === 'x' || input.value.slice(0,1) === '/' ){
          
            input.value += '0' + currentValue;
            if(this.state.updatedValue !== ''){
              this.setState({
                displayValue:this.state.updatedValue +  input.value
              })
            }else{
              this.setState({displayValue: addSymbol + input.value});
            }

          }else{
            input.value = input.value + currentValue;
            
            if(this.state.updatedValue !== ''){
              this.setState({
                displayValue:this.state.updatedValue + addSymbol + input.value
              })
            }else{
              this.setState({displayValue: addSymbol + input.value});
            }
          }

          this.setState({inputValue: input.value});

        }else if(input.value.slice(0,2) === '0.'){

          input.value = input.value + currentValue;
          if(this.state.updatedValue !== ''){
            this.setState({
              displayValue:this.state.updatedValue + addSymbol + input.value
            })
          }else{
            this.setState({
              displayValue: addSymbol + input.value
            })
          }
          this.setState({
           inputValue: input.value
          });
        }else{ 
          
          let getFirstValue = ''
          const removeValue = ['+','-','x','/'];

          removeValue.forEach(remove => {
            if(input.value.indexOf(remove) !== -1){
              getFirstValue = remove;
              this.setState({symbols: getFirstValue});
            }
          })
         
          if(getFirstValue === ''){
            getFirstValue = this.state.symbols;
          }
               //  removing intial zero from info display

              if(input.value.slice(0,1) === '0'){
                input.value = input.value.replace('0', '') + currentValue;
                this.setState({displayValue: input.value});

              }else if(input.value.slice(0,1) === getFirstValue){
                 input.value = input.value.replace(getFirstValue, '') + currentValue;
              }else{
                input.value += currentValue;
              }

              if(this.state.updatedValue !== ''){
                const update = this.state.updatedValue;
                this.setState({displayValue: update + getFirstValue + input.value});
              }else{
                this.setState({displayValue: getFirstValue + input.value});
              }
              
          }
          this.setState({inputValue: input.value});
        
      }

     }
     
      //don't repeat multiple decimals
      if(currentValue === '.'){
         document.getElementById('btn16').disabled = true;
       }
      
      if(currentValue === '='){
        console.log(currentValue, 'Equal 1');
      }

      if(input.value.length > 14){
        const preValueOfDisplay = this.state.displayValue;
        this.disableButton(true);
        input.value = 'Digit limit met';
        
        $('#disp').fadeOut(500);
        $('#disp').fadeIn(500);
        setTimeout(() => {
          input.value = this.state.inputValue;
        }, 1000);
        this.setState({displayValue: preValueOfDisplay});
      }
    }

    componentDidMount() {
      window.onload= () => {
        document.getElementById("btn0").click();
      };
      
    }

    render(){
        const NameOfButtons = ['AC', '/', 'x', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'];
        const mapped = NameOfButtons.map((names, i) => {
            return(
                <Buttons btn={names} key={i} ids={`btn${i}`} value={names} func={this.mainFunction}/> 
            )
        })
        return(
        <>
          <div id='main-div'>
            <DisplayInfo display={this.state.displayValue}/>
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