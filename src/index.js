import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/fa/css/all.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CodingKids from './CodingKids';
import MyFooter from './FooterClass';
// import TopNav from './TopNav';

const lejhroData = (
                      <HashRouter>
                              <Route exact path="/" component={App}></Route>
                              <Route path="/hashcodejr" component={CodingKids}></Route>
                              <MyFooter/> 
                     </HashRouter>
  
);


ReactDOM.render(lejhroData, document.getElementById('root') );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
