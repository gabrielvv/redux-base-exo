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
import { getAllPhonesAction, selectPhoneAction, updateFilter } from '../store/phone/phone.actions'
import { messageAction } from '../store/message/message.actions'

import Phone from '../components/Phone'
import TextInput from '../components/TextInput'

import '../styles/phone.css'
import '../styles/load-awesome/css/ball-beat.min.css'

class Phones extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    if (this.props.isConnected) this.props.getAllPhonesAction()
  }

  componentDidUpdate() {
  }

  changeName(name){
    this.setState({ name })
  }

  render() {
    const {
      phones = [],
      selectedPhones,
      selectPhoneAction,
      messageAction,
      filterValue,
      updateFilter,
      isConnected
    } = this.props

    const phoneList = phones.map(phone => {
      const isSelected = !!selectedPhones.find(p => p.id === phone.id)
      const selectHandler = selectedPhones.length === 3 && !isSelected
        ? () => messageAction('3 items maximum')
        : () => selectPhoneAction(phone)

      return (
        <Phone
          {...phone}
          selected={isSelected}
          handleSelected={selectHandler}
          key={phone.id}
          className="PhoneLink"
        />
      )
    })

    return (
      <React.Fragment>
        <div className="PhoneFilter">
          <TextInput name="filter" label="filter" value={filterValue} onChange={(e) => updateFilter(e.target.value)}/>
        </div>
        <div className="PhoneList">{!phones.length ? <div className="NoResult">0 résultats</div> : phoneList}</div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  getAllPhonesAction,
  selectPhoneAction,
  messageAction,
  updateFilter
}

const mapStateToProps = ({ phoneReducer, userReducer }) => {
  return ({
    filterValue: phoneReducer.filterValue,
    phones: phoneReducer.filteredPhones,
    selectedPhones: phoneReducer.selectedPhones,
    isConnected: !!userReducer.name
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones)
