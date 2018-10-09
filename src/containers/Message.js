/**
 * Message
 *
 * - Récupérer le statut "open" via redux
 * - Récupérer le message via redux
 * - Au click, fermer la popup
 *
 *  <aside className="Message" onClick={ ... }>
 *    <section className="MessageContent">
 *      Information : {message}
 *    </section>
 *  </aside>
 */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { closeMessageAction } from '../store/message/message.actions'

import '../styles/message.css'

const Message = ({ close, message }) => {
  return (
    <aside className="Message" onClick={close}>
      <section className="MessageContent">
        Information : {message}
      </section>
    </aside>
  )
}

Message.propTypes = {
  close: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

const mapStateToProps = ({ messageReducer: { message } }) => ({
  message
})

const mapDispatchToProps = {
  close: closeMessageAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
