import  * as Type from './Type';

 
export const add = ()=> {
   return dispatch => {
        setTimeout(() => {
            fetch('http://www.liyunkuan.com/cache/textJson.php')
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then(json => {
                    dispatch({type:Type.ADD_ONE, noes:json})
                })


        }, 1000);
    };
};

//
// export const add = ()=> {
//    return dispatch => {
//         setTimeout(() => {
//             dispatch({type:Type.ADD_ONE, noes:'xxxx'});
//         }, 1000);
//     };
// };
