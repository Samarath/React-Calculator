import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Containers/calculatorContainer';
import './Components/calculator.css';
import './Components/digital-7.ttf';
import * as serviceWorker from './serviceWorker';


// const Testting = () => {
//     return(
//         <div id= 'test'>
//             <p>This p is for testing perpose do not try to voilet until and unless you you make it work and i knwo your are thinking to hard and don't</p>
//         </div>
//     )
// }

ReactDOM.render(
    <Calculator />,
     document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
