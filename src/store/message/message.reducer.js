/**
 * messageReducer
 *
 * importer MESSAGE_ACTIONS
 * importer defaultMessageState
 *
 */
import { MESSAGE_ACTIONS } from './message.actions'
import { defaultMessageState } from './message'

export default function messageReducer(state = defaultMessageState, action){
  switch (action.type) {
  case MESSAGE_ACTIONS.MESSAGE:
    return {
      message: action.message,
      isOpen: true
    }
  case MESSAGE_ACTIONS.CLOSE:
    return {
      message: '',
      isOpen: false
    }
  default:
    return state
  }
}
