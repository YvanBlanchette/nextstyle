import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GiCheckMark } from 'react-icons/gi';

const ConfirmationPage = () => {
	return (
		<div className='h-screen'>
			<div className='mt-32 md:max-w-[50vw] mx-auto flex flex-col justify-center items-center gap-6'>
				<div className='flex justify-center items-center gap-4'>
					<GiCheckMark className='text-green-600 w-16 h-16' />
					<h1 className='text-5xl'>Confirmation de commande</h1>
				</div>
				<p className='text-center text-gray-600'>
					Merci, votre commande à bien été reçu et vous sera acheminé d&apos;ici 2 à 4 jours.
					<br /> Un courriel de confirmation vous a été envoyé.
				</p>
				<Button asChild>
					<Link href='/' className='uppercase font-medium'>
						Retour
					</Link>
				</Button>
			</div>
		</div>
	);
};
export default ConfirmationPage;
