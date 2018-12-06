import React , { Component }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import InputWithUserName from './InputWithUserName';

class Index extends Component{
    render(){
        return(
            <div>
                用户名: <InputWithUserName/>
            </div>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
