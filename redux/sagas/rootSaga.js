import {all} from 'redux-saga/effects'
import templateWatchers from './template'

const rootSaga = function* () {
  yield all([
		  ...templateWatchers,
  ])
}

export default rootSaga
