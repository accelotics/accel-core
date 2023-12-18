import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Accelotics Technologies',
  description: 'Accelotics Technologies (OPC) Pvt. Ltd. is a business startup on advancing the software development using latest technologies, incubating with the advancements in Artificial Intelligence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
