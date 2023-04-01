import cn from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface ITextOnImage {
	header: string;
	text: string;
	photo: StaticImageData;
	className?: string;
}

const TextOnImage: FC<ITextOnImage> = ({ header, text, className, photo }) => (
	<div className={cn('relative my-10 flex w-full justify-center', className)}>
		<Image alt='' src={photo} />
		<div className='absolute top-1/2 flex translate-y-[-50%] flex-col items-center'>
			<h2 className='text-3xl font-bold text-white'>{header}</h2>
			<p className='text-xl text-white'>{text}</p>
		</div>
	</div>
);

export default TextOnImage;
