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
import { NavLink } from 'react-router-dom'

import '../styles/header.css'

const routes = [
  {
    url: '/',
    label: 'Phones'
  },
  {
    url: '/managePhone',
    label: 'Ajout Phone'
  }
]

const Links = routes.map(route => (
  <NavLink
    to={route.url} className="HeaderLink" activeClassName="HeaderActive" exact key={route.url}
  >{route.label}</NavLink>
))

const Header = () => (
  <header className="Header">
    <div className="HeaderTitleName">Bonjour "nom"</div>
    <div>{Links}</div>
  </header>
)

export default Header
