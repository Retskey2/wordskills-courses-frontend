import { FC } from 'react';

import Field from '@/components/ui/form-elements/Field';

import { IAuthFields } from './auth.interface';
import { validEmail } from '@/utills/validate/regex';

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				})}
				placeholder='Почта'
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
				placeholder='Пароль'
				type='password'
				error={errors.passwordHash}
			/>
		</>
	);
};

export default AuthFields;
