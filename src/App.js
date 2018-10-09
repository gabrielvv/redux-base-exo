/**
 * Composant App
 *
 * - Ajouter le store
 * - Ajouter une route "/compare" vers le composant Compare
 * - Ajouter le composant Message après le </Switch>
 */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Phones from './containers/Phones'
import PhoneForm from './containers/PhoneForm'
import Message from './containers/Message'
import Header from './containers/Header'
import Compare from './containers/Compare'
import PageNotFound from './components/PageNotFound'
import Progress from './components/Progress'
import Login from './containers/Login'
import PrivateRoute from './containers/PrivateRoute'

import './styles/main.css'

const App = ({ messageIsOpen, progress }) => (
  <Router>
    <main className="mainPage">
      <Header />
      <Switch>
        <PrivateRoute path="/" component={Phones} exact />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/managePhone" component={PhoneForm} exact />
        <PrivateRoute path="/managePhone/:id" component={PhoneForm} />
        <Route path="/compare" component={Compare} />
        <Route component={PageNotFound} />
      </Switch>
      { messageIsOpen ? <Message /> : '' }
      { progress ? <Progress /> : '' }
    </main>
  </Router>
)

App.propTypes = {
  messageIsOpen: PropTypes.bool,
  progress: PropTypes.bool
}

const mapStateToProps = ({ messageReducer: { isOpen }, phoneReducer }) => ({
  messageIsOpen: isOpen,
  progress: phoneReducer.asyncActionStatus === 'PROGRESS'
})

export default connect(mapStateToProps)(App)
