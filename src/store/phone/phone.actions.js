/**
 * importer PhoneApi
 *
 * PHONE_ACTIONS
 *   - ADD_PHONES: 'PHONE_ACTIONS/ADD_PHONES',
 *   - SELECT_PHONE: 'PHONE_ACTIONS/SELECT_PHONE'
 *
 * Actions :
 *  - getAllPhonesAction
 *  - selectPhoneAction
 */
import PhoneApi from '../../services/phoneApi'

export const PHONE_ACTIONS = {
  LOAD_PHONES_REQUEST: 'PHONE_ACTIONS/LOAD_PHONES_REQUEST',
  LOAD_PHONES_SUCCESS: 'PHONE_ACTIONS/LOAD_PHONES_SUCCESS',
  LOAD_PHONES_FAILURE: 'PHONE_ACTIONS/LOAD_PHONES_FAILURE',
  ADD_PHONE: 'PHONE_ACTIONS/ADD_PHONE',
  SELECT_PHONE: 'PHONE_ACTIONS/SELECT_PHONE',
  UPDATE_FILTER: 'UPDATE_FILTER'
}

export const updateFilter = (value) => ({
  type: PHONE_ACTIONS.UPDATE_FILTER,
  filterValue: value
})

export const getAllPhonesAction = () => {
  return (dispatch) => {

    dispatch({
      type: PHONE_ACTIONS.LOAD_PHONES_REQUEST
    })

    return PhoneApi.getAllPhones().then(phones => {
      dispatch({
        type: PHONE_ACTIONS.LOAD_PHONES_SUCCESS,
        phones
      })
    })
  }
}

export const addPhoneAction = (phone) => {
  return (dispatch) => {
    return PhoneApi.savePhone(phone).then(() => {
      dispatch({
        type: PHONE_ACTIONS.ADD_PHONE,
        phone
      })
    })
  }
}

export const selectPhoneAction = phone => ({
  type: PHONE_ACTIONS.SELECT_PHONE,
  phone
})
