import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Sidebar from './sidebar'

class Lists extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Column width={5}>
        <Sidebar />
        </Grid.Column>
        <Grid.Column width={7} >
          ----
        </Grid.Column>
      </Grid>
    )
  }
}

export default Lists
