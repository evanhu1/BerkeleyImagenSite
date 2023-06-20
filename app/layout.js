import './globals.css'

export const metadata = {
  title: 'Berkeley Imagen',
  description: 'Berkeley Imagen',
  viewport: "initial-scale=1, width=device-width"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
