/**
 * Objet TextInput :
 * { name, label, onChange, value, error, className }
 *
 * styles/form.css
 *
 * <div>
 *    <label for="name" class="FormLabel">
 *      libelle
 *      <span class="ErrorMessage">message</span>
 *    </label>
 *    <input
 *      type="text"
 *      name="?"
 *      id="?"
 *      class="?"
 *      onChange="?"
 *      value="?"
 *    />
 * </div>
 *
 * Le message d'erreur ne s'affiche que s'il y a une erreur
 */

import React from 'react'
import PropTypes from 'prop-types'
import '../styles/form.css'

function TextInput(props) {
  const {
    name, label, onChange, value, error, className
  } = props

  return (
    <div>
      <label htmlFor={name} className="FormLabel">
        {label}
        {error && <span className="ErrorMessage">{error}</span>}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        className={className}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  className: PropTypes.string
}

export default TextInput
