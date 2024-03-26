'use client';

import Loader from './components/Loader';

const loading = () => {
	return (
		<>
			<div className='md:max-w-[50vw] mx-auto flex flex-col justify-center items-center'>
				<Loader />
			</div>
		</>
	);
};
export default loading;
