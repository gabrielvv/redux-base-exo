import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import UserLogin from '../components/UserLogin'
import { addNameAction } from '../store/user/user.actions'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  changeName(name){
    this.setState({ name })
  }

  render(){
    const { addNameAction, isConnected } = this.props
    const { name } = this.state

    if (isConnected) return <Redirect to="/" />

    return (
      <UserLogin
        changeName={(e) => this.changeName(e.target.value)}
        submit={() => addNameAction(name)}
        value={name}
      />
    )
  }
}

Login.propTypes = {
  addNameAction: PropTypes.func.isRequired,
  isConnected: PropTypes.bool
}

const mapStateToProps = ({ userReducer: { name } }) => ({
  isConnected: !!name
})

const mapDispatchToProps = {
  addNameAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
