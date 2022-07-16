import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import Button from '@/components/ui/Button/Button'

import Field from '../Field'
import TextField from '../TextField'

import styles from './ContactForm.module.scss'
import { IFormsField, IOption } from './forms.types'

const options: IOption[] = [
	{
		value: 'course_1',
		label: 'Курс 1',
	},
	{
		value: 'course_2',
		label: 'Курс 2',
	},
	{
		value: 'course_3',
		label: 'Курс 3',
	},
]

const getValue = (value: string) =>
	value ? options.find((option) => option.value === value) : ''

const ContactForm: FC = () => {
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

				<Controller
					control={control}
					name="course"
					rules={{
						required: 'Выберите курс!',
					}}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<>
							<ReactSelect
								classNamePrefix="custom-select"
								placeholder={'Выберите курс*'}
								options={options}
								value={getValue(value)}
								onChange={(newValue) => onChange((newValue as IOption).value)}
							/>
							{errors.course && <div>{errors.course.message}</div>}
						</>
					)}
				/>
				<TextField
					{...register('info')}
					placeholder="Дополнительная информация"
				/>

				<Button className="m-auto mt-6">Отправить</Button>
			</form>
		</div>
	)
}

export default ContactForm
