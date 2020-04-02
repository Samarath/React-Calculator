import React from 'react';
import DisplayInfo from './info'
import Display from  './display';
import Buttons from './buttons';

class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
          buttonName: '',
          update: 0
        }
    }

    knowButton = (names) => {
      this.setState({buttonName: names});
    }

    componentDidMount(){
      let changeValue = ''
      const updateValue = () => {
        const olderValue = this.state.buttonName;
        changeValue+= olderValue;
        this.setState({update: changeValue});
      }

      document.getElementsByTagName('button').addEventListener('click', updateValue);
    }

    render(){
        const NameOfButtons = ['AC', '/', 'X', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'];
        const mapped = NameOfButtons.map((names, i) => {
            return(
                <Buttons btn={names} key={i} ids={`btn${i}`} func={this.knowButton}/>
            )
        })
        return(
        <>
          <div id='main-div'>
            <DisplayInfo />
            <Display btnName={this.state.update}/>
            <div className='btns'>
              {mapped}
            </div>
            
          </div>  
        </> 
        )
    }
}

export default Calculator;