import styled from 'styled-components'

const Footer = () => (
		<footer>
			<CopyRight>
				<div>All rights are reserved</div>
			</CopyRight>
		</footer>
)
const CopyRight = styled.div`
  div {
  	position: fixed;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	font-size: 15px;
  	width: 100%;
  	height: 25px;
  	background:#a8a8a8;
  	color: #4a4a5d;
  }
`
export default Footer
