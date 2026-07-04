import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: {
    template: '%s | Pocket Toto',
    default: 'Pocket Toto — Premium Lifestyle Essentials',
  },
  description:
    'Discover curated premium accessories, tech, and lifestyle essentials. Handcrafted quality meets modern design at Pocket Toto.',
  keywords: ['premium accessories', 'luxury lifestyle', 'handcrafted', 'pocket toto'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Pocket Toto',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <CartDrawer />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
