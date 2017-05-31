import * as types from '../constants/ActionTypes'
import _ from 'lodash'

export function lists(lists = [], action) {
  switch(action.type) {
    case types.FETCH_LISTS: {
      return _.map(action.payload, (obj, key) => {
        return {
          id: key,
          name: obj.name,
          items: []
        }
      })
    }
    default:
      return lists
  }
}

export function selectedList(selectedList = null, action) {
  switch(action.type) {
    case types.GET_LIST: {
      return {
        id: 1234,
        name: 'asdasdasd',
        items: []
      }
    }
    default:
      return selectedList
  }
}
