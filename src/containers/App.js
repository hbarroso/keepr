import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import * as authActions from '../actions/auth'
import Header from '../components/header'
import Login from '../containers/login'
import Lists from '../containers/lists/index'

const PrivateRoute = ({component: Component, authed, ...rest}) => (
  <Route {...rest} render={props => (
    authed ? (
      <Component {...props}/>
    ) : (
      <Redirect authed={authed} to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends Component {
  componentWillMount() {
    this.props.actions.authStateChanged()
  }

  render() {
    const authed = this.props.state.auth.token !== null;

    return (
      <Router history={this.props.history}>
        <div>
          <Header
            user={this.props.state.auth.user}
            loginAction={this.props.actions.authenticate}
            logoutAction={this.props.actions.logout}
          />
          <Container >
            <Switch>
              <Route exact path="/login" component={Login}/>
                <PrivateRoute path="/:id" component={Lists} authed={authed}/>
              <PrivateRoute path="/" component={Lists} authed={authed}/>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(authActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
