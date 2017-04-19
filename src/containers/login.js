import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'

class Login extends Component {

  render() {
    const { from } = { from: { pathname: '/' } }
    const isAuthenticated = this.props.state.auth.token !== null

    if (isAuthenticated) {
      return (
        <Redirect to={from}/>
      )
    }
    return (
      <Container textAlign='center'>
        <Header as='h2'>Login</Header>
        <p>In order to use Keepr, you first must login.</p>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  state: state
})

export default connect(
  mapStateToProps
)(Login)
