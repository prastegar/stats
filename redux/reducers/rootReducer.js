import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import auth from './auth'

const reducers = {
  auth,
}

//Don't change below code ,  Put your reducer on the upper object.
const rootReducer = combineReducers({
  ...reducers,
  form: formReducer
})

export default rootReducer