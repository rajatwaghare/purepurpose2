import { Funnel_Sans } from 'next/font/google'
import "./globals.css";
import Header from './components/Header';

const funnelSans = Funnel_Sans({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={funnelSans.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
