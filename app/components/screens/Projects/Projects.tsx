import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'


import CardProject from '../../ui/CardProject/CardProject'

import { ProjectContent } from './projects.data'

//slider import 
import sliderImage from '@/assets/image/slider/slider_300_300_1.jpg'
import sliderImage2 from '@/assets/image/slider/slider_300_300_2.jpg'
import sliderImage3 from '@/assets/image/slider/slider_300_300_3.jpg'
import sliderImage4 from '@/assets/image/slider/slider_300_300_4.jpg'
import sliderImage5 from '@/assets/image/slider/slider_300_300_5.jpg'
import sliderImage6 from '@/assets/image/slider/slider_300_300_6.jpg'
import Slider from '@/components/ui/Slider/Slider'
import { StaticImageData } from 'next/image'


const Projects: FC = () => {
	const sliderPhotos: StaticImageData[] = [sliderImage, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6, sliderImage, sliderImage2, sliderImage2]
	return (
		<>
			<div className="w-full max-w-[1260px] m-auto mt-12 mb-10">
				<Heading title="ПРОЕКТЫ" small />
				<SubHeading className="mb-16">
					Помогаем раскрыть талант всем и каждому!
				</SubHeading>
				{/* <CardProject /> */}
			</div>
			<CardProject project={ProjectContent} />

			<div className='flex items-center justify-center flex-col mt-20'>
				<Heading title="Ведущие эксперты WorldSkills" />
				<p className=" text-2xl text-gray-500" >
					У нас учат лучшие преподаватели и ведущие эксперты WorldSkills Russia
				</p>
				<Slider images={sliderPhotos} ></Slider>
				<Slider images={sliderPhotos} ></Slider>
			</div>
		</>
	)
}

export default Projects
