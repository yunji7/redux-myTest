import * as type from '../action/Type'

function number(state=0,action) {
    switch (action.type){
        case type.ADD_ONE :

            return state + 1 + ' ' + action.noes;
        case type.DEL_ONE :
            return state - 1;
        default : return 0;
    } 
}

export default number;