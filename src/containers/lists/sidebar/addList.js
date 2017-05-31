import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Input, Menu } from 'semantic-ui-react'
import { addList } from '../../../actions/lists'

class AddList extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '', hasErrors: false}
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    const isValid = (0 !== this.state.value.length)
    if (isValid) {
      this.props.dispatch(addList(1, this.state.value))
      this.setState({value: ''})
      this.setState({hasErrors: false})
    } else {
      this.setState({hasErrors: true})
    }
  }

  render() {
    return (
      <Menu.Item>
        <div className="field">
          <Input
            value={this.state.value}
            onChange={this.handleChange}
            action={{ color: 'green', labelPosition: 'right', icon: 'add', content: 'Add', onClick: this.handleSubmit }}
            size='small'
            placeholder='Add new list...'
            />
            { this.state.hasErrors &&
              <div className="ui pointing red basic label">
                Please enter a value
              </div>
            }
        </div>
      </Menu.Item>

    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({addList: addList}, dispatch)
})

export default connect(
  mapDispatchToProps
)(AddList)
