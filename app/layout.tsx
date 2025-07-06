import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: 'Balaji Construction - Premium Construction Services in Udaipur',
  description: 'Expert construction services by Pyar Chand Suthar in Udaipur, Rajasthan. Building dreams with strength and style. Contact: +91 8079039805',
  keywords: 'construction, building, Udaipur, Rajasthan, contractor, real estate, architecture',
  authors: [{ name: 'Balaji Construction' }],
  openGraph: {
    title: 'Balaji Construction - Premium Construction Services',
    description: 'Building dreams with strength and style in Udaipur, Rajasthan',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{ overflowX: 'hidden' }}>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`} style={{ overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}