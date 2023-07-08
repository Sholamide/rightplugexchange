import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RightPlug Exchange <Send Aza>',
  description: 'RightPlug Exchange: Seamlessly Buy, Sell, and Trade Bitcoin, Gift Cards, Altcoins, and eFunds with Ease.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
