import React from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-unfetch'
import {bindActionCreators} from 'redux'
import Layout from '../components/Layout'
import templateActions from '../redux/actions/template'

class Template extends React.Component {
	static async getInitialProps ({ctx}) {
		// console.log('props is: ',props)
		const { req} = ctx
		ctx.store.dispatch(templateActions.getTemplate('0'))
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
		return { userAgent }
	}
	
	componentDidMount () {
	}
	
	render () {
		return (
				<Layout title='Temp Page'  {...this.props} />
		)
	}
}

const dispatchToProps = dispatch => ({
	actions: bindActionCreators({getTemplate: templateActions.getTemplate}, dispatch)
})

export default connect(null, dispatchToProps)(Template)