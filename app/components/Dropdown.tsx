import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

const categories = [
	{ name: 'Homme', href: '/Homme' },
	{ name: 'Femme', href: '/Femme' },
	{ name: 'Enfant', href: '/Enfant' },
	{ name: 'Toutes', href: '/all' },
];

export function DropdownCategories() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<h2 className='font-medium text-xl hover:text-primary transition duration-200 cursor-pointer'>Catégories</h2>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>Catégories</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					{categories.map((category, index) => (
						<DropdownMenuItem key={index}>
							<Link href={`/category${category.href}`}>{category.name}</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
