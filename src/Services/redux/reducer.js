import {ADD_USER,ADD_SELECTION_LESSON,ADD_LESSONS} from './actions.js'

export function userReducer(state=[],action){
    switch(action.type){
        case ADD_USER:
            { 
                return [...state ,action.payload]
            }
        case ADD_SELECTION_LESSON:
            { 
                return [...state ,action.payload]
            }
            case ADD_LESSONS : 
            { 
                return [...state ,action.payload]
            }
    }
}