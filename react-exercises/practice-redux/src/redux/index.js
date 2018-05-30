import { createStore } from 'redux';

//set up reducer

const initialState = [];

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_PIDGEON":
            return [...state, action.pidgeon]
        case "DELETE_PIDGEON":  
            return state.filter((pidgeon, i) => i !== action.index) 
        default:
            return state;
    }
}
export const addPidgeon = (pidgeon) => {
    return {
        type: "ADD_PIDGEON",
        pidgeon
    }
}

export const deletePidgeon = index => {
    return {
        type: "DELETE_PIDGEON",
        index
    }
}
//set up store
const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState());
})

//connect redux to our app using Provider
export default store;