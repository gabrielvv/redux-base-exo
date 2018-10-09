/**
 * USER_ACTIONS
 *
 *    ADD_NAME: 'USER_ACTIONS/SUBMIT_NAME'
 */
export const USER_ACTIONS = {
  ADD_NAME: 'USER_ACTIONS/SUBMIT_NAME'
}

export const addNameAction = name => ({
  type: USER_ACTIONS.ADD_NAME,
  name
})
