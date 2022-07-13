import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { FC } from 'react'

interface ItemProps {
	image: StaticImageData
	title?: string
	description?: string
}

const ItemHorizontal: FC<ItemProps> = ({ image }) => {
	return (
		<div className="mt-2 bg-white">
			<div className="relative">
				<Image objectFit="cover" height={1000} src={image} alt="promo" />
			</div>
			<div className="px-5 pb-5">
				<h2 className="mt-6 font-semibold text-3xl">Национальная сборная</h2>
				<p className="mt-2 text-xl text-gray-500">
					Национальная сборная WorldSkills Russia – носитель лучших технологий
					подготовки ...
				</p>
			</div>
		</div>
	)
}

export default ItemHorizontal
