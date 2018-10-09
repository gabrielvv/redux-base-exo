/**
 * Objet Header
 *
 * - Récupérer le username de redux
 *
 * - Si l'utilisateur n'est pas connecté, afficher :
 *
 *   <div className="Header HeaderTitle">Connection</div>
 *
 * - Si l'utilisateur est connecté, afficher son "nom"
 *
 * - Ajouter un lien vers Compare. '/compare'
 *
 * Note : wrapper le composant par le HOC withRouter de 'react-router-dom'
 */

import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../styles/header.css'

const routes = [
  {
    url: '/',
    label: 'Phones'
  },
  {
    url: '/managePhone',
    label: 'Ajout Phone'
  },
  {
    url: '/compare',
    label: 'Comparer'
  }
]

const Links = routes.map(route => (
  <NavLink
    to={route.url} className="HeaderLink" activeClassName="HeaderActive" exact key={route.url}
  >{route.label}</NavLink>
))

const Header = (props) => {
  const { name } = props

  if (name)
    return (
      <header className="Header">
        <div className="HeaderTitleName">Bonjour {name}</div>
        <div>{Links}</div>
      </header>
    )

  return (
    <header className="Header">
      <div className="HeaderTitleName">Connexion</div>
    </header>
  )
}

const mapStateToProps = ({ userReducer: { name } }) => ({
  name
})

Header.propTypes = {
  name: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Header)
