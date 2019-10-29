import { createStore } from 'redux'


import { count } from './reducers'
const store = createStore(count)

export default store