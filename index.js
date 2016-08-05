import React  from 'react';
import {  Provider} from 'react-redux'
import {render}  from 'react-dom'

import configureStore  from './store/configureStore'
import  {App} from './container'
require('es6-promise').polyfill();
require('es5-shim');
import 'whatwg-fetch';
let store =  configureStore();

let doc = document.getElementById('roott');


render(
    <Provider store={store}>
       <App/>
    </Provider>
    ,
    doc 
);

