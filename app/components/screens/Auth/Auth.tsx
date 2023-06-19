import { Button } from '@mui/material';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { WrapperContent } from '@/components/layout/WrapperContent';
import Heading from '@/components/ui/Heading/Heading';

import styles from './Auth.module.scss';
import AuthFields from './AuthFields';
import { RegisterFields } from './RegisterFields';
import { IAuthInput } from './auth.interface';
import { useAuthRedirect } from './useAuthRedirect';
import { useActions } from '@/utills/hooks/useActions';
import { useAuth } from '@/utills/hooks/useAuth';
import { Meta } from '@/utills/meta/Meta';

export const Auth = () => {
	useAuthRedirect();

	const { isLoading } = useAuth();

	const [type, setType] = useState<'login' | 'register'>('login');
	const [typeForm, setTypeForm] = useState<'login' | 'register'>('login');

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset
	} = useForm<IAuthInput>({
		mode: 'onChange'
	});

	const { login, register } = useActions();

	const onSubmit: SubmitHandler<IAuthInput> = (data: any) => {
		if (typeForm == 'login') login(data);
		else if (typeForm === 'register') register(data);

		reset();
	};
	return (
		<Meta title={typeForm === 'login' ? 'Авторизация' : 'Регистрация'}>
			<WrapperContent>
				<section className={styles.wrapper}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Heading title='Авторизация' className='mb-12' />

						{typeForm === 'login' ? (
							<AuthFields formState={formState} register={registerInput} isPasswordRequired />
						) : (
							<RegisterFields formState={formState} register={registerInput} />
						)}

						<div className='flex flex-col gap-2'>
							<div className={styles.buttons}>
								<Button type='submit' onClick={() => setType('login')} disabled={isLoading}>
									Отправить
								</Button>
							</div>
							<div className='text-gray-600 text-sm cursor-pointer'>
								{typeForm === 'login' ? (
									<div onClick={() => setTypeForm('register')}>
										Нет аккаунта? <span className='font-medium'>Зарегистрируйтесь</span>.
									</div>
								) : (
									<div onClick={() => setTypeForm('login')}>
										Есть аккаунт? <span className='font-medium'>Авторизируйтесь</span>.
									</div>
								)}
							</div>
						</div>
					</form>
				</section>
			</WrapperContent>
		</Meta>
	);
};
