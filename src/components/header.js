import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react'

const ActionButton = ({action, name, color}) => {
  return(
    <Menu.Item>
      <Button color={color} onClick={action}>{name}</Button>
    </Menu.Item>
  )
}

class Header extends Component {

  isUserLoggedIn() {
    return this.props.user;
  }

  render() {
    return (
      <Menu>
        <Menu.Item name='Keepr'/>
        <Menu.Menu position='right'>
          {this.isUserLoggedIn()
            ? <ActionButton name='Logout' action={this.props.logoutAction}/>
          : <ActionButton color="green" name='Login' action={this.props.loginAction}/>
          }
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;
