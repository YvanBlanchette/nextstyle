'use client';

import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import { useState } from 'react';

interface imagesGalleryProps {
	images: any;
}

const ImageGallery = ({ images }: imagesGalleryProps) => {
	const [largeImage, setLargeImage] = useState(images[0]);
	return (
		<article className='grid gap-4 lg:grid-cols-5 max-h-8'>
			<div className='order-last flex gap-4 lg:order-none lg:flex-col lg:justify-between'>
				{images.map((image: any, index: any) => (
					<div key={index} className='overflow-hidden rounded-lg bg-gray-100' onClick={() => setLargeImage(image)}>
						<Image src={urlFor(image).url()} width={200} height={200} alt='product image' className='h-full w-full object-cover object-center cursor-pointer' />
					</div>
				))}
			</div>
			<div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
				<Image src={urlFor(largeImage).url()} height={500} width={500} alt='focused Image' className='w-full h-full object-cover object-center' />
				<span className='absolute top-2 left-2 rounded-md bg-primary px-3 py-1.5 text-sm uppercase tracking-wider text-white font-semibold'>En vente</span>
			</div>
		</article>
	);
};
export default ImageGallery;
