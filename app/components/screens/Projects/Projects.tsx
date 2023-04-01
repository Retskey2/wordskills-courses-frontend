import { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Meta } from 'utills/meta/Meta';


// slider import
import sliderImage from '@/assets/image/slider/slider_300_300_1.jpg';
import sliderImage2 from '@/assets/image/slider/slider_300_300_2.jpg';
import sliderImage3 from '@/assets/image/slider/slider_300_300_3.jpg';
import sliderImage4 from '@/assets/image/slider/slider_300_300_4.jpg';
import sliderImage5 from '@/assets/image/slider/slider_300_300_5.jpg';
import sliderImage6 from '@/assets/image/slider/slider_300_300_6.jpg';
import { WrapperContent } from '@/components/layout/WrapperContent';
import Heading from '@/components/ui/Heading/Heading';
import SubHeading from '@/components/ui/Heading/SubHeading';
import Slider from '@/components/ui/Slider/Slider';

import CardProject from '../../ui/CardProject/CardProject';

import { ProjectContent } from './projects.data';

const Projects: FC = () => {
	const sliderPhotos: StaticImageData[] = [
		sliderImage,
		sliderImage2,
		sliderImage3,
		sliderImage4,
		sliderImage5,
		sliderImage6,
		sliderImage,
		sliderImage2,
		sliderImage2
	];
	return (
		<Meta title='Проекты'>
			<WrapperContent>
				<Heading small title='ПРОЕКТЫ' />
				<SubHeading className='mb-16'>Помогаем раскрыть талант всем и каждому!</SubHeading>
				{/* <CardProject /> */}
			</WrapperContent>
			<CardProject project={ProjectContent} />

			<div className='mt-20 flex flex-col items-center justify-center'>
				<Heading title='Ведущие эксперты WorldSkills' />
				<p className=' text-2xl text-gray-500'>
					У нас учат лучшие преподаватели и ведущие эксперты WorldSkills Russia
				</p>
				<Slider images={sliderPhotos} />
				<Slider images={sliderPhotos} />
			</div>
		</Meta>
	);
};

export default Projects;
