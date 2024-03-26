import { client } from '../lib/sanity';
import { simplifiedProduct } from '../interface';
import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';
import Image from 'next/image';

const getProductsData = async () => {
	const query =
		"* [_type == 'product'][0...4] | order(_createdAt desc) {_id, price, name, 'slug': slug.current, 'categoryName': category->name, 'imageUrl': images[0].asset->url}";
	const data = await client.fetch(query, {}, { next: { revalidate: 3600 } });
	return data;
};

const NewProducts = async () => {
	const productData: simplifiedProduct[] = await getProductsData();

	return (
		<section className='bg-white'>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
				<div className='flex justify-between items-center'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900'>
						Nos <span className='text-primary'>derniers produits</span>
					</h2>
					<Link href={'/category/all'} className='text-primary flex items-center gap-x-1 font-medium opacity-100 hover:opacity-80 transition duration-300'>
						Voir tous les Produits{' '}
						<span>
							<LuChevronRight />
						</span>
					</Link>
				</div>
				<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{productData.map((product, index) => (
						<Link href={`product/${product.slug}`} key={product._id} className='group relative'>
							<div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
								<Image
									src={product.imageUrl}
									alt={product.name}
									width={300}
									height={300}
									className='w-full h-full object-covber object-center lg:w-full lg:h-full'
								/>
							</div>
							<div className='mt-4 flex justify-between items-baseline'>
								<div>
									<h3 className='text-[1rem] font-semibold text-gray-900 tracking-tighter'>{product.name}</h3>
									<p className='text-xs text-gray-500'>{product.categoryName}</p>
								</div>
								<div>
									<p className='text-md text-primary font-medium'>{`$${product.price.toFixed(2)}`}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default NewProducts;
