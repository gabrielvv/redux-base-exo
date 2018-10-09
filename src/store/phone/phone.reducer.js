import { PHONE_ACTIONS } from './phone.actions'
import defaultPhoneState from './phone'

const filterPhones = (phones, filterValue) => {
  return ([
    ...phones.filter(p => (p.name).toLowerCase().includes(filterValue.toLowerCase()))
  ])
}

const addPhone = (phones, phone) => ([
  ...phones.filter(p => p.id !== phone.id),
  phone
])

export default function phoneReducer(state = defaultPhoneState, action) {
  switch (action.type) {
  case PHONE_ACTIONS.UPDATE_FILTER:
    return {
      ...state,
      filterValue: action.filterValue,
      filteredPhones: filterPhones(state.phones, action.filterValue)
    }
  case PHONE_ACTIONS.ADD_PHONE:
    const phones = addPhone(state.phones, action.phone)
    return {
      ...state,
      phones,
      filteredPhones: filterPhones(phones, state.filterValue)
    }
  case PHONE_ACTIONS.LOAD_PHONES_SUCCESS:
    return {
      ...state,
      phones: [ ...action.phones ],
      filteredPhones: filterPhones(action.phones, state.filterValue),
      asyncActionStatus: 'SUCCESS'
    }
  case PHONE_ACTIONS.LOAD_PHONES_REQUEST:
    return {
      ...state,
      asyncActionStatus: 'PROGRESS'
    }
  case PHONE_ACTIONS.SELECT_PHONE:

    if (!state.selectedPhones.find(p => p.id === action.phone.id)) {
      return {
        ...state,
        selectedPhones: [
          ...state.selectedPhones,
          action.phone
        ]
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
