/**
 * CompareItem
 *
 *  props : { id, name, price }
 *
 *  styles/compare.css
 *
 *  <section className="CompareItem">
 *    <article className="CompareLine">
 *      <strong>{id}</strong>
 *      <span>{name}</span>
 *    </article>
 *    <article className="CompareLine">{price}&euro;</article>
 *  </section>
 */
import React from 'react'
import '../styles/compare.css'
import PropTypes from 'prop-types'

const CompareItem = ({ id, price, name }) => (
  <section className="CompareItem">
    <article className="CompareLine">
      <strong>{id}</strong>
      <span>{name}</span>
    </article>
    <article className="CompareLine">{price}&euro;</article>
  </section>
)

CompareItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string
}

export default CompareItem
