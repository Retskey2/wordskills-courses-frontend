export interface ICourse {
	courseDurationMonth: number;
	dateEnd: string;
	dateStart: string;
	desc: string;
	hoursInWeek: number;
	id: number;
	imgSrc?: string;
	isOnline: boolean;
	isPopular: boolean;
	name: string;
	price: number;
	priceDiscount: number;
}

export interface ICardCourses extends ICourse {
	className: string;
}
