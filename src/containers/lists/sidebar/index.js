import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Profile from './profile'
import ListItem from './listItem'
import AddList from './addList'
import { fetchLists } from '../../../actions/lists'

class Index extends Component {
  componentWillMount() {
    this.props.actions.fetchLists()
  }

  render() {
    return (
      <Menu size='massive' vertical fluid>
        <Profile user={this.props.state.auth.user}/>
        {this.props.state.lists.map((list) =>
          <ListItem key={list.id} list={list} />
        )}
        <AddList />
      </Menu>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({fetchLists: fetchLists}, dispatch)
})
const mapStateToProps = state => ({state: state})
export default connect(mapStateToProps, mapDispatchToProps)(Index)
