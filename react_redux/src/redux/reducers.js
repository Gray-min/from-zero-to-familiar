import { combineReducers } from 'redux'
import { ADDCOMMENT, DELETECOMMENT, RECEIVECOMMENT } from './action-types'
const initComments = []
function comments (state = initComments, action) {
  switch (action.type) {
    case ADDCOMMENT:
      return [action.data, ...state]
    case DELETECOMMENT:
      return state.filter((comment, index) => index !== action.data)
    case RECEIVECOMMENT:
      return action.data
    default:
      return state
  }
}
export default combineReducers({
  comments
})