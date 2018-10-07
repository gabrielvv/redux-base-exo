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

import PhoneApi from '../services/phoneApi'
import Phone from '../components/Phone'
import '../styles/phone.css'

class Phones extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      phones: []
    }
  }

  componentDidMount() {
    PhoneApi.getAllPhones().then(phones => {
      this.setState({ phones })
    })
  }

  render() {
    const { phones = [] } = this.state

    const phoneList = phones.map(phone => (
      <Phone
        {...phone}
        key={phone.id}
        className="PhoneLink"
      />
    ))

    return <div className="PhoneList">{phoneList}</div>
  }
}

export default Phones
