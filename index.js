import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

//COMPONENTS
import App from './App (copie)';



class App extends Component{

    render(){
        return <div> home </div>

    }
}


ReactDOM.render(
    <BrowserRouter>
    <div>
    <Route path="/App" component={Posts}>  </Route>
    

    </div>
    </BrowserRouter>

    ,document.querySelector('#root'))
