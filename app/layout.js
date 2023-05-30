import MainNavigation from './components/layout/main-navigation';
import './globals.css';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js blog',
  description: 'Test blog to cover Next.js 13 functionality',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={oswald.className} suppressHydrationWarning={true}>
        <MainNavigation />
        <main>{children}</main>
        <div id='notifications'></div>
      </body>
    </html>
  );
}
