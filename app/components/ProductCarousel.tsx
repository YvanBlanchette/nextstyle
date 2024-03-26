import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { simplifiedProduct } from '../interface';
import { client } from '../lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCarouselProps {
	category: string;
}

const ProductCarousel = async ({ category }: ProductCarouselProps) => {
	// Function to fetch the data from Sanity.io
	const getData = async (category: string) => {
		const query = `*[_type == "product" && category -> name == '${category}']{_id, "imageUrl": images[0].asset->url, price, name, "slug": slug.current, "categoryName": category->name}`;
		const data = await client.fetch(query, {}, { next: { revalidate: 3600 } });
		return data;
	};

	const data: simplifiedProduct[] = await getData(category);

	return (
		<Carousel opts={{ align: 'start', loop: true }}>
			<CarouselContent>
				{data.map((product) => (
					<CarouselItem key={product._id} className='md:basis-1/3 lg:basis-1/4'>
						<Link href={`/product/${product.slug}`} className='group relative'>
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
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default ProductCarousel;
