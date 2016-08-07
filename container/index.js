import React  from 'react';
import {connect} from 'react-redux';
import {add}  from '../action';
import  DevTools from './DevTools';

let Apps = ({number,cip}) => (
    <div>
        {number}
        <button onClick={cip}>21</button>
        <DevTools />
    </div>
); 

const mapStateToProps = (state) => {

    return {
        number : state.number 
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        cip: ()=>{
            dispatch(add())
        }
    }
}


export const App = connect(mapStateToProps,mapDispatchToProps)(Apps)






