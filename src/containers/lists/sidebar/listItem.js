import React from 'react'
import { Menu, Label } from 'semantic-ui-react'

const ListItem = ({list}) => (
  <Menu.Item name='lists' onClick={() => {}}>
    <Label color='blue'>{list.items.length}</Label>
    {list.name}
  </Menu.Item>
)

export default ListItem
