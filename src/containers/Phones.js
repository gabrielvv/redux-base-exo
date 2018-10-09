/**
 * Objet Phones
 *
 * UserLogin :
 * - Si l'utilisateur n'est pas loggé, afficher UserLogin
 * - sinon afficher la liste des phones
 *
 * Phone :
 * - doit avoir un paramètre "selected"
 * - doit avoir une méthode "handleSelected"
 *
 * - Le state n'est plus utile, utiliser redux
 * - La récupération des données doit se faire par action redux
 *
 * - La sélection d'un phone doit se faire par redux
 * - On ne peut sélectionner que 3 items maximum
 * - Si l'utilisateur tente de saisir plus d'items, envoyer un message : 'Veuillez sélectionner 3 élements maximum.'
 */

import React from 'react'
import { connect } from 'react-redux'
import { getAllPhonesAction, selectPhoneAction } from '../store/phone/phone.actions'
import { addNameAction } from '../store/user/user.actions'
import { messageAction } from '../store/message/message.actions'

import Phone from '../components/Phone'
import '../styles/phone.css'
import UserLogin from '../components/UserLogin'

class Phones extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    this.props.getAllPhonesAction()
  }

  changeName(name){
    this.setState({ name })
  }

  render() {
    const {
      phones = [],
      isConnected,
      selectedPhones,
      addNameAction,
      selectPhoneAction,
      messageAction
    } = this.props

    const { name } = this.state

    if (!isConnected) {
      return <UserLogin
        changeName={(e) => this.changeName(e.target.value)}
        submit={() => addNameAction(name)}
        value={name}
      />
    }

    const phoneList = phones.map(phone => {
      const isSelected = !!selectedPhones.find(p => p.id === phone.id)
      const selectHandler = selectedPhones.length === 3 && !isSelected
        ? () => messageAction('3 items maximum')
        : () => selectPhoneAction(phone)

      return <Phone
        {...phone}
        selected={isSelected}
        handleSelected={selectHandler}
        key={phone.id}
        className="PhoneLink"
      />
    })

    return <div className="PhoneList">{phoneList}</div>
  }
}

const mapDispatchToProps = {
  getAllPhonesAction,
  addNameAction,
  selectPhoneAction,
  messageAction
}

const mapStateToProps = ({ phoneReducer, userReducer }) => {
  return ({
    phones: phoneReducer.phones,
    selectedPhones: phoneReducer.selectedPhones,
    isConnected: !!userReducer.name
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones)
