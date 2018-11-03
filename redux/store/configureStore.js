import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'
import {createLogger} from 'redux-logger'
import {persistReducer} from 'redux-persist'
import createEncryptor from 'redux-persist-transform-encrypt'
import localForage from 'localforage'

//creating logger
const logger = createLogger({
	diff: true,
	collapsed: (getState, action, logEntry) => !logEntry.error,
})

//Creating Saga middleware
const sagaMiddleware = createSagaMiddleware()
//Creating middleware to dispatch navigation actions

const encryptor = createEncryptor({
	secretKey: 'my-super-secret-key',
	onError: (error) => {
		throw new Error(error)
	}
})
const persistConfig = {key: 'root',transforms: [encryptor],storage: localForage, blacklist:['form']}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension')
		return composeWithDevTools(applyMiddleware(...middleware))
	}
	return applyMiddleware(...middleware)
}

const configureStore = (initialState) => {
	const store = createStore(
			persistedReducer,
			initialState,
			bindMiddleware([sagaMiddleware,
				logger])
	)
	store.runSagaTask = () => {
		store.sagaTask = sagaMiddleware.run(rootSaga)
	}
	store.runSagaTask()
	// persistStore(store,{storage: localForage})
	return store
}

export default configureStore