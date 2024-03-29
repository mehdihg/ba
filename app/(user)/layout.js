import MainNav from '../components/nav/MainNav'
import '../globals.css'
import { Poppins } from 'next/font/google'

const popins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '700','900'],
  display: 'swap'
  
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={popins.className}>
      <MainNav/>
        {children}</body>
    </html>
  )
}
