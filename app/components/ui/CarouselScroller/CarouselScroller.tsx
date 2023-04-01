import styles from 'CarouselScroller.module.scss';
import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import React from 'react';

import { dataReview } from '@/utills/data/reviews.data';


export const CarouselScroller: React.FC = () => {
	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		breakpoints: {
			'(max-width: 580px)': {
				slides: {
					perView: 2
				}
			},
			'(max-width: 768px)': {
				slides: {
					perView: 3
				}
			},
			'(max-width: 1024px)': {
				slides: {
					perView: 4
				}
			}
		},
		initial: 0,
		loop: true,
		mode: 'snap',
		slides: {
			origin: 'auto',
			perView: 6,
			spacing: 20
		}
	});
	return (
		<div className={styles.carousel}>
			<div className={styles['carousel-container']}>
				<div ref={sliderRef} className={cn('keen-slider', styles['media-cards-container'])}>
					{dataReview.map(() => (
						<div />
					))}
				</div>
			</div>
		</div>
	);
};
