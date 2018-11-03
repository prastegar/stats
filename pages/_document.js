import Document, { Head, Main, NextScript } from 'next/document';
import 'styles/globalStyle'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet();
		
		// Step 2: Retrieve styles from components in the page
		const page = renderPage((App) => (props) =>
				sheet.collectStyles(<App {...props} />),
		);
		
		// Step 3: Extract the styles as <style> tags
		const styleTags = sheet.getStyleElement();
		
		// Step 4: Pass styleTags as a prop
		return { ...page, styleTags };
	}
	
	render() {
		return (
				<html>
				<Head>
					<style>
						{`
						body {
							margin: 0;
							padding:0;
							font-family: lato, Helvetica, sans-serif;
							line-height: 1;
							height: 100%;
							font-size: 16px;
							color: #28262c;
						`}
					</style>
					{/* Step 5: Output the styles in the head  */}
					{this.props.styleTags}
				</Head>
				<body>
				<Main />
				<NextScript />
				</body>
				</html>
		);
	}
}