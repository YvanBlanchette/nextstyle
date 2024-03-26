export interface simplifiedProduct {
	_id: string;
	name: string;
	imageUrl: string;
	price: number;
	slug: string;
	categoryName: string;
}

export interface productDetails {
	_id: string;
	name: string;
	images: any;
	price: number;
	slug: string;
	categoryName: string;
	description: string;
	article: string;
	color: string;
}
