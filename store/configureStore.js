import  reducer  from '../reducers';
import {createStore, applyMiddleware}  from 'redux';
import thunk from 'redux-thunk';


const configureStore = () => {
    return createStore(
        reducer,
        applyMiddleware(thunk)
    )
};


export default configureStore;