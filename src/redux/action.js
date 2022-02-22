import * as types from './actionType' 
import axios from 'axios'
const fetchCocktailStart =()=>({
    type:types.FETCH_COCTAIL_START
})
const fetchCocktailSuccess =(coctails)=>({
    type:types.FETCH_COCTAIL_SUCCESS,
    payload:coctails,
})
const fetchCocktailFail =(error)=>({
    type:types.FETCH_COCTAIL_FAIL,
    payload:error,
})
const fetchSingleCocktailStart =()=>({
    type:types.GET_SINGLE_COCTAIL_START
})
const fetchSingleCocktailSuccess =(coctail)=>({
    type:types.GET_SINGLE_COCTAIL_SUCCESS,
    payload:coctail,
})
const fetchSingleCocktailFail =(error)=>({
    type:types.GET_SINGLE_COCTAIL_FAIL,
    payload:error,
})
const fetchSearchCocktailStart =()=>({
    type:types.SEARCH_COCTAIL_START
})
const fetchSearchCocktailSuccess =(coctails)=>({
    type:types.SEARCH_COCTAIL_SUCCESS,
    payload:coctails,
})
const fetchSearchCocktailFail =(error)=>({
    type:types.SEARCH_COCTAIL_FAIL,
    payload:error,
})
export function fetchCocktail(){
    return function (dispatch) {
        dispatch(fetchCocktailStart());
        axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
        .then((response)=>{
        const coctails = response.data.drinks;
            dispatch(fetchCocktailSuccess(coctails));
        }).catch((error)=>{
            dispatch(fetchCocktailFail(error));
        })
    }
}
export function fetchSingleCocktail(id){
    return function (dispatch) {
        dispatch(fetchSingleCocktailStart());
        axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response)=>{
        const coctails = response.data.drinks;
            dispatch(fetchSingleCocktailSuccess(coctails));
        }).catch((error)=>{
            dispatch(fetchSingleCocktailFail(error));
        })
    }
}
export function fetchSearchCocktail(searchText){
    return function (dispatch) {
        dispatch(fetchSearchCocktailStart());
        axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then((response)=>{
        const coctails = response.data.drinks;
            dispatch(fetchSearchCocktailSuccess(coctails));
        }).catch((error)=>{
            dispatch(fetchSearchCocktailFail(error));
        })
    }
}