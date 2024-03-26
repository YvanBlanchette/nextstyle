import AddToCart from '@/app/components/AddToCart';
import CheckoutNow from '@/app/components/CheckoutNow';
import ImageGallery from '@/app/components/ImageGallery';
import { productDetails } from '@/app/interface';
import { client } from '@/app/lib/sanity';
import { Button } from '@/components/ui/button';
import { BsTruck } from 'react-icons/bs';
import { RiStarSFill } from 'react-icons/ri';

//Function to fetch the product data from Sanity.io
const getProductData = async (slug: string) => {
	const query = `* [_type == 'product' && slug.current == "${slug}"][0] { _id, images, price, name, description, article, color, "slug": slug.current, "categoryName": category -> name, price_id}`;
	const data = await client.fetch(query, {}, { next: { revalidate: 3600 } });
	return data;
};

// Function to calculate a random reduction between 15 anbd 25%
const reductionPerc = (min: number, max: number) => {
	const randomNumber = Math.random() * (max - min) + min;
	const reduc = randomNumber / 100 + 1;
	return { reduction: +reduc.toFixed(2), percentage: +Math.round(randomNumber) };
};

const result = reductionPerc(15, 25);

//! Rendering the page
const ProductPage = async ({ params }: { params: { slug: string } }) => {
	// Fetching the data from Sanity.io
	const productData: productDetails = await getProductData(params.slug);

	return (
		<section className='bg-white'>
			<div className='mx-auto max-w-screen-xl px-4 md:px-8'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<ImageGallery images={productData.images} />

					<div className='md:py-8'>
						<div className='mb-2 md:mb-3'>
							<span className='mb-0.5 inline-block text-gray-500'>{productData.categoryName}</span>
							<h2 className='text-3xl font-bold text-gray-800 lg:text-4xl'>{productData.name}</h2>
						</div>
						<div className='mb-6 flex items-center gap-3'>
							<Button className='rounded-full flex items-center gap-x-1'>
								<span className='text-sm'>4.2</span>
								<RiStarSFill className='h-6 w-5' />
							</Button>
							<span className='text-sm font-medium text-gray-500'>156 évaluations</span>
						</div>
						<div className='mb-4'>
							<div className='flex items-center gap-2 mb-1'>
								<span className='text-xl font-semibold text-gray-800 md:text-2xl tracking-wider'>${productData.price.toFixed(2)}</span>
								<span className='text-md line-through md:text-lg font-light'>${(productData.price * result.reduction).toFixed(2)}</span>
								<span className='text-green-400 tracking-tight font-medium'>({result.percentage} % de réduction)</span>
							</div>
							<div className='mb-6 flex items-center gap-2 text-lg text-gray-500'>
								<BsTruck />
								<span className='text-sm'>Expédition 2-4 jours</span>
							</div>
						</div>

						<div className='mb-6 leading-relaxed text-md font-medium text-gray-500'>
							<p className='mb-2'>{productData.description}</p>
							<p className='mb-2'>
								<span className='font-medium underline underline-offset-1'>Couleur affichée:</span> {productData.color}
							</p>
							<p>
								<span className='font-medium underline underline-offset-1'>Article:</span> {productData.article}
							</p>
						</div>

						<div className='flex gap-2.5'>
							<AddToCart
								currency='USD'
								description={productData.description}
								image={productData.images[0]}
								name={productData.name}
								price={productData.price}
								key={productData._id}
								price_id={productData.price_id}
							/>
							<CheckoutNow
								currency='CAD'
								description={productData.description}
								image={productData.images[0]}
								name={productData.name}
								price={productData.price}
								key={productData._id}
								price_id={productData.price_id}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default ProductPage;
