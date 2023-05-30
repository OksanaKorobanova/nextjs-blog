import MainNavigation from './components/layout/main-navigation';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js blog',
  description: 'Test blog to cover Next.js 13 functionality',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
