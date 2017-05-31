import { FETCH_LISTS, GET_LIST } from '../constants/ActionTypes'
import { database } from '../config'

export function fetchLists() {
  return dispatch => {
    database.ref('lists/1').on('value', snapshot => {
      dispatch({
        type: FETCH_LISTS,
        payload: snapshot.val()
      })
    })
  }
}

export function addList(userId, name) {
  return dispatch => {
    database.ref('lists/' + userId).push({name: name, lists: []});
  }
}

export function getList(listId) {
  return dispatch => {
    dispatch({
      type: GET_LIST,
      listId: listId
    })
  }
}
