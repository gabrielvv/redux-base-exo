/**
 * Objet ManagePhonePage
 *
 * Si l'utilisateur n'est pas connecté, rediriger vers la page d'accueil
 */

import React from 'react'
import { Redirect } from 'react-router'

import PhoneApi from '../services/phoneApi'
import isPhoneError from '../services/isPhoneError'
import TextInput from '../components/TextInput'

import '../styles/form.css'

const defaultState = {
  phone: { name: '', price: '', id: '' },
  shouldRedirect: false,
  errors: {}
}

class ManagePhonePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...defaultState }
  }

  componentDidMount() {
    this.getPhone()
  }

  // getPhone en cas de changement de route (par id param) entre update et création
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id === this.props.match.params.id) return
    this.getPhone()
  }

  getPhone() {
    const phoneId = this.props.match.params.id
    if (!phoneId) {
      this.setState({ ...defaultState })
      return
    }

    PhoneApi.getPhoneById(phoneId).then(phone => {
      this.setState({ phone })
    })
  }

  setPhoneNameState(event) {
    const { value } = event.target
    const { phone } = this.state
    this.setState({ phone: { ...phone, name: value } })
  }

  setPhonePriceState(event) {
    const { value } = event.target
    const { phone } = this.state
    this.setState({ phone: { ...phone, price: value } })
  }

  submitPhone(event) {
    event.preventDefault()
    const { phone } = this.state
    const { isInError, errors } = isPhoneError(phone)

    if (isInError) {
      this.setState({ errors })
      return
    }

    this.savePhone(phone)
  }

  savePhone(phone) {
    PhoneApi.savePhone(phone).then(() => {
      this.setState({ shouldRedirect: true })
    })
  }

  render() {
    const { shouldRedirect, phone, errors } = this.state

    const nameField = {
      name: 'name',
      label: 'Nom',
      value: phone.name,
      onChange: e => this.setPhoneNameState(e),
      error: errors.name
    }

    const priceField = {
      name: 'price',
      label: 'Prix',
      value: phone.price,
      onChange: e => this.setPhonePriceState(e),
      error: errors.price
    }

    return shouldRedirect ? (
      <Redirect to="/" />
    ) : (
      <section className="FormWrapper">
        <h1 className="FormTitle">
          Phone {phone.id && '#'}{phone.id}
        </h1>
        <form>
          <TextInput
            {...nameField}
            className="TextInput"
          />

          <TextInput
            {...priceField}
            className="TextInput"
          />

          <button
            className="Button"
            onClick={e => this.submitPhone(e)}
          >
            {phone.id ? 'Mettre à jour' : 'Ajouter' }
          </button>
        </form>
      </section>
    )
  }
}

export default ManagePhonePage
