import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'José Hernandez',
  description: 'Web Dashboard de José Hernández',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" data-theme='dashboard'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
