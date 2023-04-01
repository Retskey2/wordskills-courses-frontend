import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/ui/Button/Button';

const Courses: NextPage = () => {
	const router = useRouter();
	const { slug } = router.query;
	return (
		<div className='m-auto mb-16 mt-2 w-full max-w-[1260px]'>
			<div className='text-[#BDBDBD]'>Курсы | {slug}</div>
			<div className='mt-12 rounded-xl bg-[#0048BA] p-6 text-center text-white'>
				<div className='mx-auto flex max-w-[500px] flex-col gap-2'>
					<div>Дата начала: 01.04.2022</div>
					<div className='text-4xl font-medium'>Веб-дизайн и разрабтка КОД 1.4</div>
					<div className='text-2xl'>от 80 000 ₽</div>
					<ul className='mt-6 flex justify-between'>
						<li>4ч/нед</li>
						<li>6 месяцев</li>
						<li>Online</li>
					</ul>
				</div>
			</div>
			<Button className='mx-auto mt-6' variant='white'>
				Записаться
			</Button>
			<div className='my-6 text-[#828282]'>Описание</div>
			<p className='text-justify'>
				Онлайн-курс ВШЭ адресован всем, кто интересуется индивидуальными различиями – сильными и
				слабыми сторонами личности, вопросами совместимости людей с разными особенностями. Бывает ли
				«счастливый» характер? Какими бывают черты и типы личности? Развиваются ли способности? В
				чем причины гениальности? Как поведение людей связано с полом? Что мы знаем о ценностях и
				моральном сознании людей? Где границы совместимости представителей разных типов? Наконец,
				что мы можем в себе и других изменить и с чем вынуждены смириться? Знание материалов курса
				поможет лучше управлять другими людьми и сопротивляться психологическому манипулированию, а
				также устанавливать искренние отношения с людьми, которые отличаются по темпераменту,
				характеру и способностям. Предлагаемый дистанционный курс дает ответы на эти вопросы,
				способствуя самопознанию и открытию ресурсов развития личности.
			</p>
		</div>
	);
};

export default Courses;
