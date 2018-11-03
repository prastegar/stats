import Link from 'next/link'
import {connect} from 'react-redux'
function Page (props) {
	console.log('props are : ',props)
	return (
			<div>
				<h1>
					{props.title}
				</h1>
				<h2>{props.userAgent}</h2>
				<nav>
					<Link prefetch href={props.linkTo}>
						<a>Navigate: {props.NavigateTo}</a>
					</Link>
				</nav>
			</div>
	)
}

export default connect(state => state)(Page)