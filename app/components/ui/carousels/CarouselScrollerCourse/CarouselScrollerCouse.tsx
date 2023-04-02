import cn from 'classnames';
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react';
import React, { useEffect, useState } from 'react';

import { dataCourse } from '@/utills/data/couse.data';

import { CardCourse } from '../../cards/CardCourse.tsx/cardCourse';
import styles from '../Carousel.module.scss';


export const CarouselScrollerCourse = () => {
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
					{dataCourse.map((item) => (
						<CardCourse
							key={item.description + Math.random()}
							className='keen-slider__slide'
							item={item}
						/>
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
