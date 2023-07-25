
import './globals.css'
import { Inter } from 'next/font/google'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar1 from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Viviani Iluteenused',

}




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar1 />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
