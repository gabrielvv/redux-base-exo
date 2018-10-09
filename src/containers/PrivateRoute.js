import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'

/**
* @see https://reacttraining.com/react-router/web/example/auth-workflow
*
*/
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isConnected ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

const mapStateToProps = ({ userReducer: { name } }) => ({
  isConnected: !!name
})

export default connect(mapStateToProps)(PrivateRoute)
