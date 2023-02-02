import { FC } from 'react'
import { Meta } from 'utills/meta/Meta'

import { WrapperContent } from '@/components/layout/WrapperContent'
import CardPriority from '@/components/ui/CardPriority/CardPriority'
import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'

import styles from './About.module.scss'

const About: FC = () => {
	return (
		<Meta title="О нас">
			<WrapperContent>
				<Heading title="О НАС" small />
				<SubHeading>Наша миссия и ценности!</SubHeading>
				<p className={styles.description}>
					Онлайн-курс ВШЭ адресован всем, кто интересуется индивидуальными
					различиями – сильными и слабыми сторонами личности, вопросами
					совместимости людей с разными особенностями. Бывает ли «счастливый»
					характер? Какими бывают черты и типы личности? Развиваются ли
					способности? В чем причины гениальности? Как поведение людей связано с
					полом? Что мы знаем о ценностях и моральном сознании людей? Где
					границы совместимости представителей разных типов? Наконец, что мы
					можем в себе и других изменить и с чем вынуждены смириться? Знание
					материалов курса поможет лучше управлять другими людьми и
					сопротивляться психологическому манипулированию, а также устанавливать
					искренние отношения с людьми, которые отличаются по темпераменту,
					характеру и способностям. Предлагаемый дистанционный курс дает ответы
					на эти вопросы, способствуя самопознанию и открытию ресурсов развития
					личности.
				</p>
				<div className={styles.priority}>Приоритеты</div>
				<CardPriority />
			</WrapperContent>
		</Meta>
	)
}

export default About
