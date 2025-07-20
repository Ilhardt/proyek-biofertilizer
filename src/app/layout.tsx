import './globals.css'; 
import { Inter } from 'next/font/google';
import Sidebar from './components/sidebar'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '',
  description: 'monitoring Biofertilizer MA11 IoT',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}