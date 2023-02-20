import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header home />
        {/* <Banner /> */}
      {/* Header */}
      {/* Banner */}
      {children}
      <Footer />
      </body>
    </html>
  )
}
