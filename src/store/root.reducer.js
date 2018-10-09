/**
 * Configure root reducer avec combineReducers
 */
import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import phoneReducer from './phone/phone.reducer'
import messageReducer from './message/message.reducer'

export const rootReducer = combineReducers({
  userReducer,
  phoneReducer,
  messageReducer
})
