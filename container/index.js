import React  from 'react';
import {connect} from 'react-redux';
import {add}  from '../action';

let Apps = ({number,cip}) => (
    <div>
        {number}
        <button onClick={cip}>21</button>
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






