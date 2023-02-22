import { createStore } from "redux"
const initialState = {
    "VALOR": "",
    "OPTION": 0,
    "TRM": "",
    "posts": JSON.parse(localStorage.getItem("post")) || []
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "changeVALOR": return { ...state, VALOR: action.VALOR };
        case "changeOPTION": return { ...state, OPTION: action.OPTION };
        case "changeTRM": return { ...state, TRM: action.TRM };
        case "reset": return { ...state, ...initialState, posts: JSON.parse(localStorage.getItem("post")) || [] };
        case "updatePosts": return { ...state, posts: JSON.parse(localStorage.getItem("post")) || [] };
        default: return state;
    }
}

export default createStore(reducer)