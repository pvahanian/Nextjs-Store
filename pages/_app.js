import '../styles/globals.css'
import Link from 'next/link'

const MyApp = ({ Component, pageProps }) => {
  return (
  <>
  <Link href="/">
    <a >Nav / Homepage links</a>
  </Link>
  <br></br>
  <Link href="/about"><a>about page</a></Link>
  

  <Component {...pageProps} />
<footer>Pablo's footers</footer>  
</>
  )
}

export default MyApp
