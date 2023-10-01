import '@/styles/globals.css'
import Link from 'next/link'

function MenuLayout () {
  return (
    <ul>
      <Link href='./'>Home | </Link>
      <Link href='./contacts'>Contacts | </Link>
    </ul>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <MenuLayout/>
      <br/>
      <Component {...pageProps} />
    </>
  )
}
