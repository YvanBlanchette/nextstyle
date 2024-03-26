import ProductCarousel from '@/app/components/ProductCarousel';
import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';

const headerImageStyles = {
	backgroundImage: `url(/images/All.jpg)`,
	height: '550px',
	width: '100vw',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'bottom',
	marginTop: '-35px',
	marginBottom: '50px',
};

const AllProductsPage = () => {
	return (
		<section className='bg-white mb-24'>
			<div style={headerImageStyles}></div>
			<div className='max-w-[1200px] mx-auto'>
				<div className='flex justify-between items-center mb-6'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900'>
						Nos produits pour <span className='text-primary'>Hommes</span>
					</h2>
					<Link href={'/category/Homme'} className='text-primary flex items-center gap-x-1 font-medium opacity-100 hover:opacity-80 transition duration-300'>
						Voir tous les Produits{' '}
						<span>
							<LuChevronRight />
						</span>
					</Link>
				</div>
				<ProductCarousel category='Homme' />
				<div className='flex justify-between items-center mt-12 mb-6'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900'>
						Nos produits pour <span className='text-primary'>Femmes</span>
					</h2>
					<Link href={'/category/Femme'} className='text-primary flex items-center gap-x-1 font-medium opacity-100 hover:opacity-80 transition duration-300'>
						Voir tous les Produits{' '}
						<span>
							<LuChevronRight />
						</span>
					</Link>
				</div>
				<ProductCarousel category='Femme' />
				<div className='flex justify-between items-center mt-12 mb-6'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900'>
						Nos produits pour <span className='text-primary'>Enfants</span>
					</h2>
					<Link href={'/category/Enfant'} className='text-primary flex items-center gap-x-1 font-medium opacity-100 hover:opacity-80 transition duration-300'>
						Voir tous les Produits{' '}
						<span>
							<LuChevronRight />
						</span>
					</Link>
				</div>
				<ProductCarousel category='Enfant' />
			</div>
		</section>
	);
};
export default AllProductsPage;
