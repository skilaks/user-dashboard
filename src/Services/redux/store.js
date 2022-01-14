import {createStore} from 'redux'
import {userReducer} from './reducer'

export const userStore = createStore(userReducer);