import  * as Type from './Type';
require('es6-promise').polyfill();
require('isomorphic-fetch');


//
// export const add = ()=> {
//    return dispatch => {
//         setTimeout(() => {
//             fetch('http://www.liyunkuan.com/cache/textJson.php')
//                 .then(response => {
//                     if (response.status >= 400) {
//                         console.log(response.status);
//                         // throw new Error("Bad response from server");
//                     }
//
//
//                     console.log(response);
//                     return response.json();
//                 })
//                 .then(json => {
//                     dispatch({type:Type.ADD_ONE, noes:json})
//                 })
//
//
//         }, 1000);
//     };
// };

//

export const add = ()=> {
    return {
        type: Type.ADD_ONE,
    }
};




