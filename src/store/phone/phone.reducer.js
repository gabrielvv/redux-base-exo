import { PHONE_ACTIONS } from './phone.actions'
import defaultPhoneState from './phone'

export default function phoneReducer(state = defaultPhoneState, action) {
  switch (action.type) {
  case PHONE_ACTIONS.ADD_PHONES:
    return {
      ...state,
      phones: [ ...action.phones ]
    }
  case PHONE_ACTIONS.SELECT_PHONE:

    if (!state.selectedPhones.find(p => p.id === action.phone.id)) {
      return {
        ...state,
        selectedPhones: [ ...state.selectedPhones, action.phone]
      }
    }

    return {
      ...state,
      selectedPhones: state.selectedPhones.filter(p => p.id !== action.phone.id)
    }
  default:
    return state
  }
}
