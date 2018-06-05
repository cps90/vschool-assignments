import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

export const getMainData = () => {
    return dispatch => {
    axios.get('https://vschool-cors.herokuapp.com?url=https://newsapi.org/v2/top-headlines?country=us&apiKey=405b6a71cf33471386b73c0e287a7ee7').then(response => {
        dispatch({
            type: "GET_MAIN_DATA",
            data: response.data
        })    
    }).catch(err => {
            console.log(err)
        })
    }
}

export const getBusinessData = () => {
    return dispatch => {
        axios.get('https://vschool-cors.herokuapp.com?url=https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=405b6a71cf33471386b73c0e287a7ee7').then(response => {
            dispatch({
                type: "GET_BUSINESS_DATA",
                data: response.data
            })
        }).catch(err => {
                console.log(err)
        })
    }
}

export const getSportsData = () => {
    return dispatch => {
        axios.get('https://vschool-cors.herokuapp.com?url=https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=405b6a71cf33471386b73c0e287a7ee7').then(response => {
            dispatch({
                type: "GET_SPORTS_DATA",
                data: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getPoliticsData = () => {
    return dispatch => {
        axios.get('https://vschool-cors.herokuapp.com?url=https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=405b6a71cf33471386b73c0e287a7ee7').then(response => {
            dispatch({
                type: "GET_POLITICS_DATA",
                data: response.data
            })
        }).catch(err => {
                console.log(err)
        })
    }
}

export const getSearchData = (searchTerm) => {
    return dispatch => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=405b6a71cf33471386b73c0e287a7ee7`).then(response => {
            dispatch({
                type: "GET_SEARCH_DATA",
                data: response.data
            })
        }).catch(err => {
                console.log(err)
        })
    }
}

export const clearData = () => {
    return {
        type: "CLEAR_DATA"
    }
}
const initialState = {
    data: {
        articles: []
    }
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_MAIN_DATA":
            return {
                data: action.data
            }
        case "GET_BUSINESS_DATA":
            return {
                data: action.data
            }
        case "GET_SPORTS_DATA":
            return {
                data: action.data
            } 
        case "GET_POLITICS_DATA":
            return {
                data: action.data
            }  
        case "GET_SEARCH_DATA":
            return {
                data: action.data
            }  
        case "CLEAR_DATA":
            return {
                data: {articles: []}
            }               
        default: 
            return state    
    }
}




const store = createStore(reducer, applyMiddleware(thunk))

export default store;

//APIKey: 405b6a71cf33471386b73c0e287a7ee7
//Categories business, entertainment, health, science, sports, technology