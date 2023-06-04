import Image from 'next/image';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import attachIcon from '@/assets/image/attachment-icon.svg';
import Button from '@/components/ui/Button/Button';


import Field from '../Field';
import TextField from '../TextField';

import styles from './ContactFormTeachers.module.scss';
import { IFormsField } from './forms.types';

const ContactFormTeachers: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IFormsField>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<IFormsField> = () => {
		reset();
	};

	return (
		<div className={styles.contactForm}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('name', {
						required: 'Имя обязательное поле'
					})}
					error={errors.name}
					placeholder='Имя*'
				/>

				<Field
					{...register('email', {
						required: 'Почта обязательное поле',
						pattern: {
							value:
								/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: 'Неккоректная почта!'
						}
					})}
					error={errors.email}
					placeholder='E-mail*'
				/>

				<Field
					{...register('phone', {
						required: 'Телефон обязательное поле',
						pattern: {
							value:
								/^\s*(?:\+?(\d{1,3}))?[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d[\W\D\s]*?\d)(?: *x(\d+))?\s*$/,
							message: 'Неккоректный телефон'
						}
					})}
					error={errors.phone}
					placeholder='Телефон*'
				/>

				<Field
					{...register('experience', {
						required: 'Лет опыта работы экспертом - обязательное поле',
						pattern: {
							value: /\d+/,
							message: 'Неккоректный телефон'
						}
					})}
					error={errors.experience}
					placeholder='Лет опыта работы экспертом*'
				/>

				<TextField {...register('info')} placeholder='Дополнительная информация' />

				<Button className='m-auto mt-6'>Отправить</Button>
			</form>
		</div>
	);
};

export default ContactFormTeachers;
