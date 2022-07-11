import Image from 'next/image'
import { FC } from 'react'
import { Meta } from 'utills/meta/Meta'

import { LastNews } from '@/components/ui/lastNews/LastNews'

import illustration from '@/assets/image/Illustration.svg'
import arrow from '@/assets/image/Vector.svg'
import book from '@/assets/image/book-icon.svg'
import chalkboard from '@/assets/image/chalkboard-icon.svg'
import diploma from '@/assets/image/diploma-icon.svg'

import styles from './Home.module.scss'

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
				<LastNews variant="vertical" />
			</div>
		</Meta>
	)
}

export default Home
