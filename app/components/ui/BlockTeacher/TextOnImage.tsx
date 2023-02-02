import cn from 'classnames'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface ITextOnImage {
	header: string
	text: string
	photo: StaticImageData
	className?: string
}

const TextOnImage: FC<ITextOnImage> = ({ header, text, className, photo }) => {
	return (
		<div className={cn('w-full flex justify-center relative my-10', className)}>
			<Image alt="" src={photo}></Image>
			<div className="absolute top-1/2 translate-y-[-50%] flex flex-col items-center">
				<h2 className="text-white text-3xl font-bold">{header}</h2>
				<p className="text-white text-xl">{text}</p>
			</div>
		</div>
	)
}

export default TextOnImage
