import NextHead from 'next/head'
import { string } from 'prop-types'
import {connect} from 'react-redux'
const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = ({settings}) => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{settings.title || ''}</title>
    {/*<meta name="description" content={settings.description || defaultDescription} />*/}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    {/*<meta property="og:url" content={settings.url || defaultOGURL} />*/}
    {/*<meta property="og:title" content={settings.title || ''} />*/}
    {/*<meta property="og:description" content={settings.description || defaultDescription} />*/}
    {/*<meta name="twitter:site" content={settings.url || defaultOGURL} />*/}
    {/*<meta name="twitter:card" content="summary_large_image" />*/}
    {/*<meta name="twitter:image" content={settings.ogImage || defaultOGImage} />*/}
    {/*<meta property="og:image" content={settings.ogImage || defaultOGImage} />*/}
    {/*<meta property="og:image:width" content="1200" />*/}
    {/*<meta property="og:image:height" content="630" />*/}
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default connect()(Head)
