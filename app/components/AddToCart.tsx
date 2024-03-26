'use client';

import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { urlFor } from '../lib/sanity';

export interface AddToCartProps {
	name: string;
	description: string;
	price: number;
	currency: string;
	image: string;
}

const AddToCart = ({ currency, description, image, name, price }: AddToCartProps) => {
	const { addItem, handleCartClick } = useShoppingCart();
	const product = {
		id: 'gsdfjk',
		name: name,
		description: description,
		image: urlFor(image).url(),
		price: price,
		currency: currency,
	};

	return (
		<Button
			onClick={() => {
				addItem(product), handleCartClick();
			}}
		>
			Ajouter au Panier
		</Button>
	);
};
export default AddToCart;
