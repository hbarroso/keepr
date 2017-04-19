import * as types from '../constants/ActionTypes'

const initalList = [
  {
    id: 1,
    name: "My first list",
    items: [
      {
        id: 1,
        name: "task 1",
        completed: false
      },
      {
        id: 2,
        name: "task 2",
        completed: false
      },
      {
        id: 3,
        name: "task 3",
        completed: false
      }
    ]
  },
  {
    id: 2,
    name: "My second list",
    items: [
      {
        id: 1,
        name: "task 1",
        completed: false
      },
      {
        id: 2,
        name: "task 2",
        completed: false
      }
    ]
  }
]

export function lists(state = initalList, action) {
  switch(action.type) {
    case types.AUTH_STATE_CHANGED:
      return state
    default:
      return state
  }
}
