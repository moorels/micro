import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import { Navbar } from '../Components/Navbar'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
