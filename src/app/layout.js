import './globals.css'
import { Inter } from 'next/font/google'
import 'normalize.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Biuro Rachunkowe',
  description: 'Stworzone przez Sebastiana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="PL">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
