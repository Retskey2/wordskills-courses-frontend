import { FC } from 'react'
import { Meta } from 'utills/meta/Meta'

<<<<<<< HEAD
import { WrapperContent } from '@/components/layout/WrapperContent'
import GoogleCard from '@/components/ui/GoogleCard/GoogleCard'
=======
import MapCard from '@/components/ui/MapCard/MapCard'
>>>>>>> working
import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'

import styles from './Contacts.module.scss'

const Contacts: FC = () => {
	return (
		<Meta title="Контакты">
			<WrapperContent>
				<Heading title="КОНТАКТЫ" small />
				<SubHeading>Доступны в любое время для вас</SubHeading>
				<div className={styles.contacts}>
					<div>
						<ul>
							<li>Адрес</li>
							<li>Санкт-Петерубрг, ул. Связи, д.4</li>
						</ul>
						<ul className="mt-8">
							<li>E-mail</li>
							<li>support@worldskills.ru</li>
						</ul>
					</div>
					<div>
						<ul className="ml-24">
							<li>Телефон</li>
							<li>+7(ХХХ)ХХХ-ХХ-ХХ</li>
							<li>+7(ХХХ)ХХХ-ХХ-ХХ</li>
							<li>+7(ХХХ)ХХХ-ХХ-ХХ</li>
						</ul>
					</div>
				</div>
				<div>
<<<<<<< HEAD
					<GoogleCard />
					{/* <Heading title="Остались вопросы?" center />
=======
					<ul className="ml-24">
						<li>Телефон</li>
						<li>+7(ХХХ)ХХХ-ХХ-ХХ</li>
						<li>+7(ХХХ)ХХХ-ХХ-ХХ</li>
						<li>+7(ХХХ)ХХХ-ХХ-ХХ</li>
					</ul>
				</div>
			</div>
			<div>
				<MapCard />
				{/* <Heading title="Остались вопросы?" center />
>>>>>>> working
				<SubHeading small center className="mb-6">
					Заполните форму ниже. Мы вам ответим или <br /> перезвоним в течение
					24 часов!
				</SubHeading>
				<ContactForm /> */}
				</div>
			</WrapperContent>
		</Meta>
	)
}

export default Contacts
