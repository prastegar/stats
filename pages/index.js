import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import templateActions from '../redux/actions/template'
import styled from 'styled-components'
import Layout from '../components/Layout'

class Index extends React.Component {
	static async getInitialProps () {
		const res = await fetch('http://localhost:3003/template')
		const data = await res.json()
		return {data}
	}
	settings = {
		head:{
			title:"new title"
		}
	}
	
	render () {
		return (
				<Layout settings={this.settings}>
					<div>
						<Title>My First Next.js Page</Title>
					</div>
				</Layout>
		)
	}
}

const Title = styled.h1`
  color: red;
`
const dispatchToProps = dispatch => ({
	actions: bindActionCreators({getTemplate: templateActions.getTemplate}, dispatch)
})
export default connect(null, dispatchToProps)(Index)