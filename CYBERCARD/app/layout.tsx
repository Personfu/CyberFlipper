import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CyberCard / CyberFlipper',
  description: 'Consent-based NFC, QR, RF, and telemetry lab for CyberCard and CyberFlipper.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}