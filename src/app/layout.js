import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar/Navbar'
import { Providers } from './Providers'
import React, {   Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from "../store";

 

 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arjun Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundImage: "linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);"   }}>
       
       <Provider store={store}>
          <Providers>
       <Navbar/>
      
          
         <Suspense fallback={ <h2>Loading...</h2>}>{children}</Suspense>
       </Providers>
       </Provider>
     
      
      
      </body>
    </html>
  )
}
