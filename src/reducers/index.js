import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import repos from './repos'

export default combineReducers({
    page,
    user,
    repos
})