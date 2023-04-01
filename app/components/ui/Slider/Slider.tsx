import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './Slider.module.scss';

interface ISlider {
	images: StaticImageData[];
	imageHeight?: number;
	imageWidth?: number;
}

const Slider: FC<ISlider> = ({ images, imageHeight = 100, imageWidth = 100 }) => (
	<div className='relative h-44 w-full overflow-hidden'>
		<div className={styles.absoluteItems}>
			<div className='flex w-1/2 flex-row justify-around'>
				{images.map((image) => (
					<div className='flex h-36 w-36 items-center justify-center'>
						<Image
							className={styles.imgSlider}
							height={imageHeight}
							src={image}
							width={imageWidth}
						/>
					</div>
				))}
			</div>
			<div className='flex w-1/2 flex-row justify-around'>
				{images.map((image) => (
					<div className='flex h-36 w-36 items-center justify-center'>
						<Image
							className={styles.imgSlider}
							height={imageHeight}
							src={image}
							width={imageWidth}
						/>
					</div>
				))}
			</div>
		</div>
	</div>
);
export default Slider;
