import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import usersReducer from './reducers/usersReducer'
import gatheringReducer from './reducers/gatheringReducer'
import { composeWithDevTools } from 'redux-devtools-extension'



const reducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  gatherings: gatheringReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store