import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import CartProvider from './components/Providers';
import ShoppingCartModal from './components/ShoppingCartModal';
import Footer from '@/app/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NextStyle | Boutique en ligne de vêtements',
	description: 'NextStyle | Boutique en ligne de vêtements',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fr_ca'>
			<body className={montserrat.className}>
				<CartProvider>
					<div className='flex flex-col min-h-screen'>
						<Navbar />
						<ShoppingCartModal />
						<main className='flex-grow flex flex-col justify-center'>{children}</main>
						<Footer />
					</div>
				</CartProvider>
			</body>
		</html>
	);
}
