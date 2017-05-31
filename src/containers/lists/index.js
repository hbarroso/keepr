import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Sidebar from './sidebar'
import Tasks from '../tasks'

class Lists extends Component {

  id() {
    return this.props.match.params.id
  }

  hasId() {
    return this.id() !== undefined
  }

  render() {

    return (
      <Grid stackable>
        <Grid.Column width={5}>
        <Sidebar />
        </Grid.Column>
        <Grid.Column width={7} >
          { this.hasId() && <Tasks id={this.id()} /> }
          { !this.hasId() &&  <div>Nao temos id </div>}
        </Grid.Column>
      </Grid>
    )
  }
}

export default Lists
