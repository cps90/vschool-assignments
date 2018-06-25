import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'


export const getIssues = () => {
    return dispatch => {
        axios.get('/issues').then(response => {
            dispatch({
                type: "GET_ISSUES",
                issues: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const addIssue = newIssue => {
    return dispatch => {
        axios.post('/issues', newIssue).then(response => {
            dispatch(getIssues()) 
        }).catch(err => {
            console.log(err)
        })
    }
}



const reducer = (state = [], action) => {
    switch(action.type) {
        case "GET_ISSUES":
            return action.issues
        default: 
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk))