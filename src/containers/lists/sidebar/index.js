import React from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'
import Profile from './profile'
import { connect } from 'react-redux'
import ListItem from './listItem'

const Index = ({state}) => (
  <Menu size='massive' vertical fluid>
    <Profile user={state.auth.user}/>
    {state.lists.map((list) =>
      <ListItem key={list.id} list={list} />
    )}
    <Menu.Item>
      <Button positive fluid><Icon name='add' /> Create New List </Button>
    </Menu.Item>
  </Menu>
)

const mapStateToProps = state => ({state: state})
export default connect(mapStateToProps)(Index)
