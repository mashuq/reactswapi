import {STARSHIP} from './starshipActionTypes'

export const loadList = (payload) => ({
    type: STARSHIP.LOADLIST,
    payload
})

export const loadListError = (payload) => ({
    type: STARSHIP.LOADLISTERROR,
}) 

export const saveStarship = (payload) => ({
    type: STARSHIP.SAVESTARSHIP,
    payload
})
