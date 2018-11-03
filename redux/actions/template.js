import types from './types'
/*
* this is for getting a form template.
* */
const getTemplate = (id) => ({
	type: types.GET_TEMPLATE+types.STATUS.NORMAL,
	payload:{
		id,
	}
})

export default {
	getTemplate,
}