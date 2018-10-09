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
  ADD_PHONES: 'PHONE_ACTIONS/ADD_PHONES',
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
      type: PHONE_ACTIONS.ADD_PHONES,
      asyncActionStatus: 'PROGRESS',
      phones: []
    })

    return PhoneApi.getAllPhones().then(phones => {
      dispatch({
        type: PHONE_ACTIONS.ADD_PHONES,
        asyncActionStatus: 'SUCCESS',
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
