import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BiError } from 'react-icons/bi';

const NotFound = () => {
	return (
		<>
			<div className='h-full md:max-w-[60vw] mx-auto flex flex-col justify-center items-center gap-6 pb-24'>
				<div className='flex justify-center items-center gap-4'>
					<BiError className='text-primary w-16 h-16' />
					<h1 className='text-4xl font-semibold'>Oops, une erreur est survenue!</h1>
				</div>
				<p className='font-medium'>La page que vous tentez de consulter ne semble pas exister...</p>
				<Button asChild>
					<Link href='/' className='uppercase font-medium'>
						Retour
					</Link>
				</Button>
			</div>
		</>
	);
};
export default NotFound;
