import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import Button from '@/components/ui/Button/Button'

import Field from '../Field'
import TextField from '../TextField'

import styles from './ContactFormTeachers.module.scss'
import { IFormsField } from './forms.types'

import attachIcon from '@/assets/image/attachment-icon.svg'
import Image, { StaticImageData } from 'next/image'

const ContactFormTeachers: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm<IFormsField>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IFormsField> = (data) => {
		console.log(data)
		reset()
	}

	return (
		<div className={styles.contactForm}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('name', {
						required: 'Имя обязательное поле',
					})}
					placeholder="Имя*"
					error={errors.name}
				/>

				<Field
					{...register('email', {
						required: 'Почта обязательное поле',
						pattern: {
							value:
								/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: 'Неккоректная почта!',
						},
					})}
					placeholder="E-mail*"
					error={errors.email}
				/>

				<Field
					{...register('phone', {
						required: 'Телефон обязательное поле',
						pattern: {
							value:
								/^\s*(?:\+?(\d{1,3}))?[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d[\W\D\s]*?\d)(?: *x(\d+))?\s*$/,
							message: 'Неккоректный телефон',
						},
					})}
					placeholder="Телефон*"
					error={errors.phone}
				/>

				<Field
					{...register('experience', {
						required: 'Лет опыта работы экспертом - обязательное поле',
						pattern: {
							value: /\d+/,
							message: 'Неккоректный телефон',
						},
					})}
					placeholder="Лет опыта работы экспертом*"
					error={errors.experience}
				/>
				<div className={styles.inputImage}>
					<input type={'file'} accept="image/*"></input>
					<label>Резюме* </label>
					<Image src={attachIcon}></Image>
				</div>


				<TextField
					{...register('info')}
					placeholder="Дополнительная информация"
				/>

				<Button className="m-auto mt-6">Отправить</Button>
			</form>
		</div>
	)
}

export default ContactFormTeachers
