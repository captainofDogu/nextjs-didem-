import '../styles/globals.css'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp


/* global.css tek bir yerden import edilebilir o da _app.js de zaten _app.js de olmasının sebeni budur   */
