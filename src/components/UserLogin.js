/*
 * UserLogin
 *
 * styles/user-login.css
 * styles/form.css
 *
 * props : { submit }
 *
 * - Controlled component contrôlé par Phones
 * - Utiliser TextInput
 *
 *      <div className="FormWrapper UserLogin">
 *        <form>
 *          <TextInput
 *            name="user"
 *            label="Votre Nom"
 *            onChange={e => this.changeName(e)}
 *            value={value}
 *            className="TextInput"
 *          />
 *
 *          <button
 *            className="Button"
 *            onClick={e => this.submitName(e)}
 *          >Login</button>
 *        </form>
 *      </div>
 */
import React from 'react'

import '../styles/user-login.css'
import TextInput from './TextInput'
import PropTypes from 'prop-types'

const UserLogin = (props) => {

  const { changeName, submit, value } = props
  const submitName = (e) => {
    e.preventDefault()
    submit()
  }

  return (<div className="FormWrapper UserLogin">
    <form>
      <TextInput
        name="user"
        label="Votre Nom"
        onChange={e => changeName(e)}
        value={value}
        className="TextInput"
      />

      <button
        className="Button"
        onClick={e => submitName(e)}
      >Login</button>
    </form>
  </div>)

}

UserLogin.propTypes = {
  changeName: PropTypes.func,
  submit: PropTypes.func,
  value: PropTypes.string.isRequired
}

export default UserLogin
