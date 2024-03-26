'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaShopware } from 'react-icons/fa6';
import { BiSolidShoppingBagAlt } from 'react-icons/bi';
import { useShoppingCart } from 'use-shopping-cart';
import { DropdownCategories } from './Dropdown';
import { BsList } from 'react-icons/bs';

const links = [
	{ name: 'Accueil', href: '/' },
	{ name: 'À Propos', href: '/About' },
	{ name: 'Nous Joindre', href: '/Contact' },
];

const Navbar = () => {
	const pathname = usePathname();

	const { handleCartClick } = useShoppingCart();

	return (
		<header className='mb-8 border-b shadow-lg'>
			<div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
				<Link href='/' className='flex items-center text-2xl sm:text-4xl gap-2'>
					<FaShopware className='text-primary' />
					<h1 className='font-bold'>
						Next<span className='font-medium text-primary'>Style</span>
					</h1>
				</Link>

				<nav className='hidden gap-12 lg:flex 2xl:ml-16'>
					{links.map((link, index) => (
						<div
							key={index}
							className={`font-medium text-xl hover:text-primary transition duration-200 ${
								pathname === link.href ? 'text-primary pointer-events-none' : 'text-gray-900'
							}`}
						>
							<Link href={link.href}>{link.name}</Link>
						</div>
					))}
					<DropdownCategories />
				</nav>
				<div className='flex justify-end items-center gap-4'>
					<Button
						onClick={() => handleCartClick()}
						variant={'ghost'}
						className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none'
					>
						<BiSolidShoppingBagAlt className='text-primary text-3xl' />
						<p className='text-gray-900 font-semibold hidden sm:block'>Voir Panier</p>
					</Button>
					<button className='inline-block lg:hidden h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 bg-transparent'>
						<BsList className='text-3xl' />
					</button>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
