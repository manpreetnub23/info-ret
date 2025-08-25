import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Profile Cards by MS',
  description: 'Create, view, and manage profiles in a card-based interface for information retrieval.'
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html >
  );
}