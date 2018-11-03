import initialState from './initialState'
import types from '../actions/types'

const auth = (state = initialState.auth, action) => {
  
  switch (action.type) {
    case types.RESET:
      return initialState.auth
    default:
      return state
  }
}

export default auth