import cn from 'classnames';
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react';
import React, { useEffect } from 'react';

import { dataReview } from '@/utills/data/reviews.data';

import CardReview from '../../cards/CardsReview/CardReview';
import styles from '../Carousel.module.scss';


export const CarouselScrollerReview: React.FC = () => {
	const [currentSlide, setCurrentSlide] = React.useState(0);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>();

	const sliderOptions: KeenSliderOptions = {
		initial: 0,
		loop: true,
		mode: 'snap',
		slides: {
			origin: 'auto',
			perView: 2,
			spacing: 20
		},
		slideChanged: (slider) => setCurrentSlide(slider.track.details.rel)
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
					{dataReview.map((item) => (
						<CardReview
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
