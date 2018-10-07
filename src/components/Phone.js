/**
 * Objet Phone
 *
 * props : { id, name, price, selected, handleSelect }
 *
 * - ajouter une props "handleSelect"
 * - ajouter une props "selected"
 * - ajouter une props "id"
 *
 * <article class="Phone selected" onclick="handleSelect(id, selected)"">
 * Au click envoi de l'id et de son status selected
 */

import React from 'react'
import PropTypes from 'prop-types'
import '../styles/phone.css'

const Phone = ({ name, price }) => (
  <article className="Phone">
    <div>{name}</div>
    <div>{price}&euro;</div>
  </article>
)

Phone.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
}

export default Phone
