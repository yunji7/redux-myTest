import  reducer  from '../reducers';
import {createStore, applyMiddleware}  from 'redux';
import thunk from 'redux-thunk';
import DevTools from '../container/DevTools'



const configureStore = () => {
    return createStore(
        reducer,
        DevTools.instrument(),
        applyMiddleware(thunk)
    )
};


export default configureStore;