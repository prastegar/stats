/* global fetch */

import {delay} from 'redux-saga'
import types from '../actions/types'
import {all, call, put, take,takeEvery, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

es6promise.polyfill()
/**********~~~ WORKERS ~~~**********/

function* getTemplate (action) {
	try {
		const res = yield fetch('localhost:3003/template')
		const data = yield res.json()
		console.log('data is :',data)
		yield put({type: types.GET_TEMPLATE+types.STATUS.SUCCESS , payload:{data}})
		console.log('after put')
	} catch (error) {
		yield put({type: types.GET_TEMPLATE+ types.STATUS.FAILURE , payload:{error}})
	}
}

/**********~~~ WATCHERS ~~~**********/
function* getTemplateWatcher () {
	yield takeEvery(types.GET_TEMPLATE+types.STATUS.NORMAL, getTemplate)
}

export default [
	getTemplateWatcher(),
]