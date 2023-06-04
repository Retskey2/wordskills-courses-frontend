import { Skeleton } from '@mui/material';
import cn from 'classnames';
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react';
import React, { FC, useEffect, useState } from 'react';

import { useRequestCoursesQueries } from '@/api/hooks/useRequestCoursesQueries';

import { CardCourse } from '../../cards/CardCourse.tsx/cardCourse';
import styles from '../Carousel.module.scss';


export const CarouselScrollerCourse: FC = () => {
	const { data } = useRequestCoursesQueries({ page: 1, take: 3 });
	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>();

	const sliderOptions: KeenSliderOptions = {
		initial: 0,
		loop: true,
		mode: 'free-snap',
		slides: {
			origin: 'auto',
			perView: 3,
			spacing: 5
		},
		slideChanged: (slider) => {
			setCurrentSlide(slider.track.details.rel);
		}
	};

	const updateSlide = () =>
		instanceRef.current?.update({
			...sliderOptions
		});

	// re-render on each change sliderOptions
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => updateSlide, [instanceRef, sliderOptions]);

	return (
		<>
			<div className='navigation-wrapper'>
				<div ref={sliderRef} className={cn('keen-slider', styles['media-cards-container'])}>
					{data
						? data.data.map((item) => (
								<CardCourse
									key={item.id + Math.random()}
									className='keen-slider__slide'
									item={item}
								/>
						  ))
						: Array.from({ length: 9 }, (_, index) => index + 1).map(() => (
								<Skeleton className='keen-slider__slide' height={373} width={416} />
						  ))}
				</div>
			</div>
			{instanceRef.current && (
				<div className={styles.dots}>
					{[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
						<button
							key={idx}
							aria-label='change'
							type='button'
							className={cn(styles.dot, {
								[styles.active]: currentSlide === idx
							})}
							onClick={() => {
								instanceRef.current?.moveToIdx(idx);
							}}
						/>
					))}
				</div>
			)}
		</>
	);
};
