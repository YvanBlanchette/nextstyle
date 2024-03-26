import Link from 'next/link';
import { categoryImages, simplifiedProduct } from '../interface';
import { client } from '../lib/sanity';
import Image from 'next/image';

// Function to fetch the category data from Sanity.io
const getCategoryData = async (category: string) => {
	const query = `*[_type == "product" && category -> name == '${category}']{_id, "imageUrl": images[0].asset->url, price, name, "slug": slug.current, "categoryName": category->name}`;
	const data = await client.fetch(query, {}, { next: { revalidate: 3600 } });
	return data;
};

//! Rendering the page
const CategoryPage = async ({ params }: { params: { category: string } }) => {
	// Fetching the data from Sanity.io
	const categoryData: simplifiedProduct[] = await getCategoryData(params.category);

	return (
		<section className='bg-white'>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
				<div className='flex justify-between items-center'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900'>
						Nos produits pour <span className='text-primary'>{params.category}s</span>
					</h2>
				</div>
				<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{categoryData.map((product) => (
						<div key={product._id}>
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
									<h3 className='text-md font-medium text-gray-900'>{product.name}</h3>
									<p className='text-sm text-gray-500'>{product.categoryName}</p>
								</div>
								<div>
									<p className='text-md text-primary font-medium'>{`$${product.price.toFixed(2)}`}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default CategoryPage;
