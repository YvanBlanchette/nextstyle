import Link from 'next/link';
import { BiCopyright, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';
import { FaShopware } from 'react-icons/fa6';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<>
			<footer className='footer p-10 bg-stone-800/70 text-base-content'>
				<div className='flex justify-between  mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
					<nav>
						<h6 className='text-md uppercase font-medium text-primary'>Catégories</h6>
						<ul>
							<li>
								<Link href='/category/Homme' className='text-sm text-stone-300 hover:text-stone-100 transition duration-300'>
									Homme
								</Link>
							</li>
							<li>
								<Link href='/category/Femme' className='text-sm text-stone-300 hover:text-stone-100 transition duration-300'>
									Femme
								</Link>
							</li>
							<li>
								<Link href='/category/Enfant' className='text-sm text-stone-300 hover:text-stone-100 transition duration-300'>
									Enfant
								</Link>
							</li>
						</ul>
					</nav>
					<nav>
						<h6 className='text-md uppercase font-medium text-primary'>Entreprise</h6>
						<ul>
							<li>
								<Link href='/' className='text-sm text-stone-300 hover:text-stone-100 transition duration-300'>
									À Propos
								</Link>
							</li>
							<li>
								<Link href='/' className='text-sm text-stone-300 hover:text-stone-100 transition duration-300'>
									Nous Joindre
								</Link>
							</li>
							<li>
								<Link href='/' className='text-sm text-stone-300 hover:text-stone-100 transition duration-300'>
									Carrière
								</Link>
							</li>
						</ul>
					</nav>
					<nav>
						<h6 className='text-md uppercase font-medium text-primary'>Légal</h6>
						<ul>
							<li>
								<Link href='/' className='text-sm text-stone-300 hover:text-stone-100 transition duration-300'>
									Conditions d&apos;utilisation
								</Link>
							</li>
							<li>
								<Link href='/' className='text-sm text-stone-300 hover:text-stone-100 transition duration-300'>
									Politique de confidentialité
								</Link>
							</li>
							<li>
								<Link href='/' className='text-sm text-stone-300 hover:text-stone-100 transition duration-300'>
									Paramètres des cookies
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
			<footer className='py-4 border-t bg-stone-800/70 text-base-content border-stone-400'>
				<div className='flex justify-between items-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
					<Link href='/' className='flex items-center text-2xl sm:text-4xl gap-2'>
						<FaShopware className='text-primary' />
						<h1 className='font-bold text-stone-100'>
							Next<span className='font-medium text-primary'>Style</span>
						</h1>
					</Link>
					<div className='flex flex-col justify-center items-center'>
						<Link href='https://yvanblanchette.com' target='_blank' className='text-stone-100 text-sm  hover:opacity-80 transition duration-300'>
							Une création de <span className='text-primary'>Yvan jr Blanchette</span>
						</Link>
						<div className='flex justify-center items-center gap-1'>
							<BiCopyright className='text-stone-100' />
							<p className='text-stone-100 text-sm'>Copyright {year} - Tous droits réservés</p>
						</div>
					</div>
					<nav className='md:place-self-center md:justify-self-end'>
						<div className='flex gap-4 justify-end items-center'>
							<Link href='https://www.facebook.com' target='_blank' className='text-stone-100 text-4xl hover:text-primary transition duration-300'>
								<BiLogoFacebook />
							</Link>
							<Link href='https://www.twitter.com' target='_blank' className='text-stone-100 text-4xl hover:text-primary transition duration-300'>
								<BiLogoTwitter />
							</Link>
							<Link href='https://www.instagram.com' target='_blank' className='text-stone-100 text-4xl hover:text-primary transition duration-300'>
								<BiLogoInstagram />
							</Link>
							<Link href='https://www.youtube.com' target='_blank' className='text-stone-100 text-4xl hover:text-primary transition duration-300'>
								<BiLogoYoutube />
							</Link>
						</div>
					</nav>
				</div>
			</footer>
		</>
	);
};
export default Footer;
