import Image from 'next/image'
import { FC } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Meta } from 'utills/meta/Meta'

import Button from '@/components/ui/Button/Button'
import CardTeacher from '@/components/ui/CardTeacher/CardTeacher'
import DirectionItem from '@/components/ui/DirectionItem/DirectionItem'
import LastNews from '@/components/ui/lastNews/LastNews'

import illustration from '@/assets/image/Illustration.svg'
import arrow from '@/assets/image/Vector.svg'
import book from '@/assets/image/book-icon.svg'
import chalkboard from '@/assets/image/chalkboard-icon.svg'
import diploma from '@/assets/image/diploma-icon.svg'
import TeacherPhoto from '@/assets/image/teacher-photo.png'

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
				<div className={styles.wrapper_header}>
					<div className={styles.content}>
						<div className={styles.label}>
							<h1>WordSkills Education</h1>
							<h2>
								Школа подготовки по стандартам <br /> WorldSkills
							</h2>
							<button>
								<span>Подробнее</span>
								<Image src={arrow} alt="arrow"></Image>
							</button>
						</div>
						<div className="mt-36">
							<Image src={illustration} alt="illustration" />
						</div>
					</div>
				</div>
				<div className={styles.wrapper_content}>
					<div className={styles.task}>
						<h1>Задача</h1>
						<p>
							Наша Миссия - раскрыть таланты и дать возможность проявится
							каждому
						</p>
						<div className={styles.advantages}>
							<div>
								<Image src={book} alt="book"></Image>
								<p>
									Легкое и простое обучение, в удобной для вас форме.
									Индивидуальное расписание для каждого.
								</p>
							</div>
							<div>
								<Image src={chalkboard} alt="chalkboard"></Image>
								<p>
									Поддержка преподавателей в течении всего процесса обучение.
									Помощь при сдаче и подготовке к экзаменам.
								</p>
							</div>
							<div>
								<Image src={diploma} alt="diploma"></Image>
								<p>
									Сертификат об окончании школы подготовки по стандратам
									WorldSkills.
								</p>
							</div>
						</div>
					</div>
				</div>
				<LastNews />
				<div className={styles.wrapper_content}>
					<div>
						<h1 className="text-blue-600 text-4xl font-semibold">
							Отзывы наших студентов
						</h1>
						<p className="text-gray-500 mb-6 mt-4 max-w-2xl text-2xl font-normal">
							Подготовка по самым популярным и актуальным направлениям 2022
							года.
						</p>

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
						<Button className="m-auto mt-14" outlined>
							Оставить отзыв
						</Button>
						<div className="m-auto py-24">
							<h1 className="text-blue-600 text-center text-4xl font-semibold">
								Подготовка по направлениям
							</h1>
							<p className="text-3xl font-normal mt-2 text-center">
								Подготовка по направлениям
							</p>
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
				</div>
				<LastNews horizontal />
			</div>
		</Meta>
	)
}

export default Home
