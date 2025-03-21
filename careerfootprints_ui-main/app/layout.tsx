import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import SupabaseProvider from '@/providers/SupabaseProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import { Navbar } from '@/components/Navbar';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "CareerFootprints",
  description: "Shape your future career path",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <AuthProvider>
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
            </div>
            <Toaster 
              position="top-right"
              expand={false}
              richColors
              closeButton
            />
          </AuthProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
