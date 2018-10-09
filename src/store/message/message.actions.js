/**
 * MESSAGE_ACTIONS
 *    MESSAGE: 'MESSAGE_ACTIONS/MESSAGE'
 *    CLOSE: 'MESSAGE_ACTIONS/CLOSE'
 *
 * - fonction messageAction
 * - fonction closeMessageAction
 */
export const MESSAGE_ACTIONS = {
  MESSAGE: 'MESSAGE_ACTIONS/MESSAGE',
  CLOSE: 'MESSAGE_ACTIONS/CLOSE'
}

export const messageAction = (message) => ({
  type: MESSAGE_ACTIONS.MESSAGE,
  message
})

export const closeMessageAction = () => ({
  type: MESSAGE_ACTIONS.CLOSE
})
