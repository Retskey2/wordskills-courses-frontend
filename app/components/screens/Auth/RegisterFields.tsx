import React, { FC } from 'react';

import Field from '@/components/ui/form-elements/Field';

import { IAuthFields } from './auth.interface';
import { validEmail } from '@/utills/validate/regex';

export const RegisterFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false
}) => {
	return (
		<>
			<Field
				{...register('login', {
					required: 'login is required',
					minLength: {
						value: 6,
						message: 'Min length should more 6 symbols'
					}
				})}
				placeholder='login'
				type='text'
				error={errors.login}
			/>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				})}
				placeholder='E-Mail'
				error={errors.email}
			/>
			<Field
				{...register(
					'passwordHash',
					isPasswordRequired
						? {
								required: 'password is required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols'
								}
						  }
						: {}
				)}
				placeholder='password'
				type='password'
				error={errors.passwordHash}
			/>
		</>
	);
};
