import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

import Button from '@/components/ui/Button/Button'

const Courses: NextPage = () => {
	const router = useRouter()

	const { slug } = router.query
	return (
		<div className="w-full max-w-[1260px] m-auto mt-2 mb-16">
			<div className="text-[#BDBDBD]">Курсы | {slug}</div>
			<div className="bg-[#0048BA] mt-12 text-white p-6 rounded-xl text-center">
				<div className="flex gap-2 flex-col max-w-[500px] mx-auto">
					<div>Дата начала: 01.04.2022</div>
					<div className="font-medium text-4xl">
						Веб-дизайн и разрабтка КОД 1.4
					</div>
					<div className="text-2xl">от 80 000 ₽</div>
					<ul className="flex justify-between mt-6">
						<li>
							<span>4ч/нед</span>
						</li>
						<li>
							<span>6 месяцев</span>
						</li>
						<li>
							<span>Online</span>
						</li>
					</ul>
				</div>
			</div>
			<Button children="Записаться" variant="white" className="mt-6 mx-auto" />
			<div className="my-6 text-[#828282]">Описание</div>
			<p className="text-justify">
				Онлайн-курс ВШЭ адресован всем, кто интересуется индивидуальными
				различиями – сильными и слабыми сторонами личности, вопросами
				совместимости людей с разными особенностями. Бывает ли «счастливый»
				характер? Какими бывают черты и типы личности? Развиваются ли
				способности? В чем причины гениальности? Как поведение людей связано с
				полом? Что мы знаем о ценностях и моральном сознании людей? Где границы
				совместимости представителей разных типов? Наконец, что мы можем в себе
				и других изменить и с чем вынуждены смириться? Знание материалов курса
				поможет лучше управлять другими людьми и сопротивляться психологическому
				манипулированию, а также устанавливать искренние отношения с людьми,
				которые отличаются по темпераменту, характеру и способностям.
				Предлагаемый дистанционный курс дает ответы на эти вопросы, способствуя
				самопознанию и открытию ресурсов развития личности.
			</p>
		</div>
	)
}

export default Courses
