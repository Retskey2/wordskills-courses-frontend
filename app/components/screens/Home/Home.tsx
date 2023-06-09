import Image from 'next/image';
import { FC } from 'react';
import { Meta } from 'utills/meta/Meta';

import DirectionItem from '@/components/ui/DirectionItem/DirectionItem';
import Heading from '@/components/ui/Heading/Heading';
import { CarouselScrollerCourse } from '@/components/ui/carousels/CarouselScrollerCourse/CarouselScrollerCouse';
import { CarouselScrollerReview } from '@/components/ui/carousels/CarouselScrollerReview/CarouselScrollerReview';
import ContactForm from '@/components/ui/forms/ContactForm/ContactForm';
import LastNews from '@/components/ui/lastNews/LastNews';

import illustration from '@/assets/image/Illustration.svg';
import book from '@/assets/image/book-icon.svg';
import chalkboard from '@/assets/image/chalkboard-icon.svg';
import diploma from '@/assets/image/diploma-icon.svg';

import SubHeading from '../../ui/Heading/SubHeading';

import styles from './Home.module.scss';

const Home: FC = () => {
	return (
		<Meta description='Обучим вас нужными навыками' title='Главная'>
			<div>
				<div className={styles.headBlock}>
					<div className={styles.content}>
						<div className={styles.label}>
							<h1>WorldSkills Education</h1>
							<h2>Школа подготовки WorldSkills курсам</h2>
						</div>
						<div className='mt-3 invisible md:visible'>
							<Image alt='illustration' src={illustration} />
						</div>
					</div>
				</div>
				{/* Блок контентной части */}
				<div className={styles.contentBlock}>
					<div>
						<Heading small title='ЗАДАЧА' />
						<SubHeading className='max-w-4xl'>
							Наша Миссия - раскрыть таланты и дать возможность проявится каждому
						</SubHeading>
					</div>
					<div className={styles.advantages}>
						<div className={styles.item}>
							<Image alt='book' src={book} />
							<p>
								Легкое и простое обучение, в удобной для вас форме. Индивидуальное расписание для
								каждого.
							</p>
						</div>
						<div className={styles.item}>
							<Image alt='chalkboard' src={chalkboard} />
							<p>
								Поддержка преподавателей в течении всего процесса обучение. Помощь при сдаче и
								подготовке к экзаменам.
							</p>
						</div>
						<div className={styles.item}>
							<Image alt='diploma' src={diploma} />
							<p>Сертификат об окончании школы подготовки по стандратам WorldSkills.</p>
						</div>
					</div>
					<div>
						<Heading center title='Самые популярные курсы' />
						<SubHeading center small className='mb-10'>
							Подготовка по самым популярным и актуальным направлениям 2022 года.
						</SubHeading>
					</div>
					<CarouselScrollerCourse />
				</div>
				<LastNews />
				<div className={styles.contentBlock}>
					<div>
						<Heading title='Отзывы наших студентов' />
						<SubHeading small className='mb-6 max-w-4xl'>
							Подготовка по самым популярным и актуальным направлениям 2022 года.
						</SubHeading>
					</div>

					<CarouselScrollerReview />

					<div className='m-auto py-24'>
						<div>
							<Heading center title='Подготовка по направлениям' />
							<SubHeading center small className='m-auto mb-6 max-w-4xl text-black'>
								Подготовка по направлениям
							</SubHeading>
						</div>
						<div className='flex'>
							<div className={styles.directions}>
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
				<div>
					<div>
						<Heading center className=' mt-20' title='Оставьте заявку на обучение!' />
						<SubHeading center small className='mb-6 text-black'>
							Заполните форму ниже. Мы вам ответим или <br />
							перезвоним в течение 24 часов!
						</SubHeading>
					</div>
					<ContactForm />
				</div>
			</div>
		</Meta>
	);
};

export default Home;
