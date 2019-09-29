import {loadList} from './starshipActions';

// const loadStarships = () => {
// //    return loadList([3,4,5,6]);
//         fetch('https://swapi.co/api/starships/')
//         .then(res => res.json())
//         .then(res => {
//             if(res.error) {
//                 throw(res.error);
//             }
//             console.log(res.results);
//             return loadList(res.results);
//         })
//         .catch(error => {
//             console.log(error);
//         })        
// }

function loadStarships() {
    return dispatch => {
        //dispatch(fetchProductsPending());
        fetch('https://swapi.co/api/starships')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(loadList(res.results));
            return res.results;
        })
        .catch(error => {
            console.log(error);
            //dispatch(fetchProductsError(error));
        })
    }
}

export default loadStarships;
