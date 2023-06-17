import { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

import Field from '@/components/ui/form-elements/Field';

import { validEmail } from '@/utills/validate/regex';

interface IAuthFields {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
}

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
				placeholder='E-Mail'
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
			/>
		</>
	);
};

export default AuthFields;
