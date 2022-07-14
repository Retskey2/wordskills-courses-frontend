import Image from 'next/image'
import { FC } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Meta } from 'utills/meta/Meta'

import Button from '@/components/ui/Button/Button'
import CardTeacher from '@/components/ui/CardTeacher/CardTeacher'
import DirectionItem from '@/components/ui/DirectionItem/DirectionItem'
import Heading from '@/components/ui/Heading/Heading'
import LastNews from '@/components/ui/lastNews/LastNews'

import illustration from '@/assets/image/Illustration.svg'
import arrow from '@/assets/image/Vector.svg'
import book from '@/assets/image/book-icon.svg'
import chalkboard from '@/assets/image/chalkboard-icon.svg'
import diploma from '@/assets/image/diploma-icon.svg'
import TeacherPhoto from '@/assets/image/teacher-photo.png'

import SubHeading from '../../ui/Heading/SubHeading'

import styles from './Home.module.scss'

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 2,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
}

const Home: FC = () => {
	return (
		<Meta title="Главная" description="Обучим вас нужными навыками">
			<div>
				{/* Верхний блок*/}
				<div className={styles.wrapper_header}>
					<div className={styles.content}>
						<div className={styles.label}>
							<h1>WordSkills Education</h1>
							<h2>
								Школа подготовки по стандартам <br /> WorldSkills
							</h2>
							<Button variant="arrow">
								<span>Подробнее</span>
								<Image src={arrow} alt="arrow"></Image>
							</Button>
						</div>
						<div className="mt-36">
							<Image src={illustration} alt="illustration" />
						</div>
					</div>
				</div>
				{/* Блок контентной части*/}
				<div className="w-full max-w-[1260px] mt-28 mx-auto">
					<div>
						<Heading title="ЗАДАЧА" small />
						<SubHeading className="max-w-4xl">
							Наша Миссия - раскрыть таланты и дать возможность проявится
							каждому
						</SubHeading>
					</div>
					<div className="flex flex-row justify-between mt-[60px] mb-[120px]">
						<div className="max-w-xs text-base text-gray-500">
							<Image src={book} alt="book"></Image>
							<p className="mt-4">
								Легкое и простое обучение, в удобной для вас форме.
								Индивидуальное расписание для каждого.
							</p>
						</div>
						<div className="max-w-xs text-base text-gray-500">
							<Image src={chalkboard} alt="chalkboard"></Image>
							<p className="mt-4">
								Поддержка преподавателей в течении всего процесса обучение.
								Помощь при сдаче и подготовке к экзаменам.
							</p>
						</div>
						<div className="max-w-xs text-base text-gray-500">
							<Image src={diploma} alt="diploma"></Image>
							<p className="mt-4">
								Сертификат об окончании школы подготовки по стандратам
								WorldSkills.
							</p>
						</div>
					</div>
				</div>
				<LastNews />
				<div className="w-full max-w-[1260px] mt-28 mx-auto">
					<div>
						<Heading title="Отзывы наших студентов" />
						<SubHeading className="max-w-4xl mb-6" small>
							Подготовка по самым популярным и актуальным направлениям 2022
							года.
						</SubHeading>
					</div>
					<div>
						<Carousel
							dotListClass="custom-dot-list-style"
							showDots={true}
							responsive={responsive}
							ssr={true}
							infinite={true}
							draggable={false}
						>
							<CardTeacher image={TeacherPhoto} />
							<CardTeacher image={TeacherPhoto} />
							<CardTeacher image={TeacherPhoto} />
						</Carousel>
						<Button className="m-auto mt-14" variant="white">
							Оставить отзыв
						</Button>
					</div>
					<div className="m-auto py-24">
						<div>
							<Heading title="Подготовка по направлениям" center />
							<SubHeading className="max-w-4xl mb-6 m-auto" small center>
								Подготовка по направлениям
							</SubHeading>
						</div>
						<div className="flex">
							<div className="inline-grid grid-cols-2 content-center m-auto">
								<DirectionItem />
								<DirectionItem />
								<DirectionItem />
								<DirectionItem />
								<DirectionItem />
								<DirectionItem />
							</div>
						</div>
					</div>
				</div>
				<LastNews horizontal />
			</div>
		</Meta>
	)
}

export default Home
