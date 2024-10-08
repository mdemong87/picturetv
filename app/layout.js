import ConnectDB from '@/lib/connectionDB'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Picture TV',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  ConnectDB();

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
