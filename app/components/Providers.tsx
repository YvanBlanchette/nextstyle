'use client';

import { ReactNode } from 'react';
import { CartProvider as USCProvider } from 'use-shopping-cart';

const CartProvider = ({ children }: { children: ReactNode }) => {
	return (
		<USCProvider
			mode='payment'
			cartMode='client-only'
			stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
			successUrl='http://localhost:3000/stripe/confirmation'
			cancelUrl='http://localhost:3000/stripe/error'
			currency='CAD'
			billingAddressCollection={false}
			shouldPersist={true}
			language='fr-ca'
		>
			{children}
		</USCProvider>
	);
};
export default CartProvider;
