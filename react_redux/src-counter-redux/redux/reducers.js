import { INCREMENT, DECREMENT } from '../redux/actions-type'
export function count (state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state
  }
}