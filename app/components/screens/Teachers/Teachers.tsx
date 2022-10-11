import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'
import Slider from './Slider'
import sliderImage from '@/assets/image/slider/slider_300_300_1.jpg'
import sliderImage2 from '@/assets/image/slider/slider_300_300_2.jpg'
import { StaticImageData } from 'next/image'
const Teachers: FC = () => {
	const sliderPhotos: StaticImageData[] = [sliderImage, sliderImage, sliderImage, sliderImage, sliderImage, sliderImage2]
	return (
		<div className="w-full max-w-[1260px] m-auto mt-12 mb-16">
			<Heading title="КОМАНДА И ПРЕПОДАВАТЕЛИ" small />
			<SubHeading>У нас работают лучшие эксперты в своей области</SubHeading>
			<Slider images={sliderPhotos}></Slider>


		</div>
	)
}

export default Teachers
