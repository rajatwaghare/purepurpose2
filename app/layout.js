import { Jost } from 'next/font/google'
import "./globals.css";
import Header from './components/Header';

const jost = Jost({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
