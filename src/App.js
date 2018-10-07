/**
 * Composant App
 *
 * - Ajouter le store
 * - Ajouter une route "/compare" vers le composant Compare
 * - Ajouter le composant Message après le </Switch>
 * - Ajouter une page Login
 * - Ajouter des routes protégées accessibles seulement si l'utilisateur est connecté
 * - Ajouter un loader pendant que les données sont chargées
 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Phones from './containers/Phones'
import PhoneForm from './containers/PhoneForm'
import Header from './containers/Header'
import PageNotFound from './components/PageNotFound'

import './styles/main.css'

const App = () => (
  <Router>
    <main className="mainPage">
      <Header />
      <Switch>
        <Route path="/" component={Phones} exact />
        <Route path="/managePhone" component={PhoneForm} exact />
        <Route path="/managePhone/:id" component={PhoneForm} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
  </Router>
)
