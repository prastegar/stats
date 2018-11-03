import Head from './Head'
import Nav from './Nav'
import styled from 'styled-components'
import Footer from './Footer'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

export default ({ children, settings = {} }) => (
		<Wrap>
			<Head settings={settings.head || {}} />
			<header>
				<Nav settings={settings.nav || {}} />
			</header>
			<main className="main">
				{children}
			</main>
			<footer>
				<Footer settings={settings.footer || {}}/>
			</footer>
		</Wrap>
)


const Wrap = styled.div`

`
