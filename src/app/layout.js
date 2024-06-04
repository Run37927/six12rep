import { Montserrat } from 'next/font/google'
import "./globals.css";
import { cn, constructMetadata } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import Providers from '@/components/Providers';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body className={cn('min-h-screen font-sans antialiased', montserrat.className)}>
        <Providers>
          <Toaster />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
