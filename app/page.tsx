import Hero from './components/Hero';
import NewProducts from './components/NewProducts';

export default function Home() {
	return (
		<main className='bg-white pb-6 sm:pb-8 lg:pb-12'>
			<Hero />
			<NewProducts />
		</main>
	);
}
