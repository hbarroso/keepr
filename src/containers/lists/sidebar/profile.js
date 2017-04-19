import React from 'react'
import { Menu, Image } from 'semantic-ui-react'

const Profile = ({user}) => (
  <Menu.Item name='Profile'>
    <center>
      <Image src={user.photoURL} size='small' shape='circular'/>
      <strong>{user.displayName}</strong>
    </center>
  </Menu.Item>
)

export default Profile
