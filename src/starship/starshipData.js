import {loadList, loadListError, saveStarship} from './starshipActions';

export const loadStarships = () => {
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
            dispatch(loadListError());
        })
    }
}


export const storeStarship = (payload) => {
    return dispatch => {
        dispatch(saveStarship(payload));
    }
}