/**
 * Compare
 *
 * styles/compare.css
 *
 * - Si l'utilisateur n'est pas connecté, redirect vers home
 * - Si l'utilisateur n'a pas sélectionné d'items, redirect vers home
 *
 * - Récupérer la liste des éléments sélectionnés par redux
 * - Récupérer le statut "connecté" par redux
 *
 *
 */
import React from 'react'
import { connect } from 'react-redux'
import '../styles/compare.css'
import PropTypes from 'prop-types'

import CompareItem from '../components/CompareItem'

const Compare = ({ phones }) => {

  const items = phones.map(phone => {
    return <CompareItem
      key={phone.id}
      {...phone}
    />
  })

  return (
    <section className="CompareWrapper">
      {items}
    </section>
  )
}

Compare.propTypes = {
  phones: PropTypes.array
}

const mapStateToProps = ({ phoneReducer }) => ({
  phones: phoneReducer.selectedPhones
})

export default connect(mapStateToProps)(Compare)
