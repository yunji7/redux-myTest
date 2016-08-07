import * as type from '../action/Type'
import {List} from 'immutable';
// require('jasmine');


//
// function number(state = List([0]), action) {
//     switch (action.type) {
//         case type.ADD_ONE :
//             // console.log(state.get(0) + 11);
//
//             return state.push(state.get(state.size - 1) + 1 );
//
//         case type.DEL_ONE :
//             return  2 ;
//         default :
//             return state;
//     }
// }


function number(state = 0, action) {
    switch (action.type) {
        case type.ADD_ONE :
            // console.log(state.get(0) + 11);
            return state + 1

        case type.DEL_ONE :  
            return  2 ;
        default :
            return state;
    }
}

export default number;