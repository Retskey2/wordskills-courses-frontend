import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import StarRating from 'react-star-rating-component'

interface CardTeacherProps {
	image: StaticImageData
}

const CardTeacher: FC<CardTeacherProps> = ({ image }) => {
	return (
		<div className=" max-w-[550px] flex p-7 gap-6 justify-center bg-white">
			<Image
				objectFit="cover"
				width={200}
				height={230}
				src={image}
				alt="Photo"
			/>
			<div>
				<div>Алла Борисовна</div>
				<div className="text-sm text-gray-500">27 лет</div>
				<div style={{ fontSize: 24 }}>
					<StarRating name="star-rating" value={5} emptyStarColor="#4f4f4f" />
				</div>
				<p className="text-sm max-w-[250px] leading-5">
					Мне очень понравилось обучение здесь! Самые лучшие преподаватели!
					Всегда помогут, подскажут, дадут обратную связь. Училась и в других
					школах, но могу с уверенностью сказать, что...
				</p>
				<Link href="/">
					<a className="text-gray-500 mt-4">Смотреть полностью</a>
				</Link>
			</div>
		</div>
	)
}

export default CardTeacher
