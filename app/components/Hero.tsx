import Image from 'next/image';
import { client, urlFor } from '../lib/sanity';
import Link from 'next/link';

const getHeroImages = async () => {
	const query = "* [_type == 'heroImage'][0]";
	const data = await client.fetch(query);
	return data;
};

const Hero = async () => {
	const data = await getHeroImages();

	return (
		<section className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
			<div className='mb-8 flex flex-wrap justify-between md:mb-16'>
				<div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
					<h2 className='mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl'>
						La <span className='text-primary'>Mode</span> à des prix <span className='text-primary'>imbattables</span>!
					</h2>
					<p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>
						Nous vendons uniquement les produits les plus exclusifs et de la plus haute qualité. Vous ne trouverez pas de meilleures offres ailleurs, venez
						faire vos achats chez nous.{' '}
					</p>
				</div>

				<div className='mb-12 flex w-full md:mb-12 lg:w-2/3'>
					<div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
						<Image src={urlFor(data.image1).url()} alt='Product image' width={500} height={500} className='h-full w-full object-cover object-center' priority />
					</div>
					<div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
						<Image src={urlFor(data.image2).url()} alt='Product image' width={500} height={500} className='h-full w-full object-cover object-center' priority />
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
				<div className='flex h-12 w-64 divide-x overflow-hidden rounded-lg border'>
					<Link
						href='/Homme'
						className='flex w-1/3 items-center justify-center text-gray-500 transition duration-200 hover:bg-gray-100 hover:text-primary font-medium active:bg-gray-200 active:text-primary'
					>
						Homme
					</Link>
					<Link
						href='/Femme'
						className='flex w-1/3 items-center justify-center text-gray-500 transition duration-200 hover:bg-gray-100 hover:text-primary font-medium active:bg-gray-200 active:text-primary'
					>
						Femme
					</Link>
					<Link
						href='/Enfant'
						className='flex w-1/3 items-center justify-center text-gray-500 transition duration-200 hover:bg-gray-100 hover:text-primary font-medium active:bg-gray-200 active:text-primary'
					>
						Enfant
					</Link>
				</div>
			</div>
		</section>
	);
};
export default Hero;
