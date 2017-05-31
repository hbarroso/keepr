import React from 'react'
import { Menu, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ListItem = ({list}) => (
  <Menu.Item name='lists' as={Link} to={{ pathname: "/" + list.id, id: list.id}}>
    <Label color='blue'>{list.items.length}</Label>
    {list.name}
  </Menu.Item>
)

export default ListItem
