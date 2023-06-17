import { Button } from '@mui/material';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { WrapperContent } from '@/components/layout/WrapperContent';
import Heading from '@/components/ui/Heading/Heading';

import styles from './Auth.module.scss';
import AuthFields from './AuthFields';
import { IAuthInput } from './auth.interface';
import { useAuthRedirect } from './useAuthRedirect';
import { useActions } from '@/utills/hooks/useActions';
import { useAuth } from '@/utills/hooks/useAuth';
import { Meta } from '@/utills/meta/Meta';

export const Auth = () => {
	useAuthRedirect();

	const { isLoading } = useAuth();

	const [type, setType] = useState<'login' | 'register'>('login');

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
		if (type == 'login') login(data);
		else if (type === 'register') register(data);

		reset();
	};
	return (
		<Meta title='Авторизация'>
			<WrapperContent>
				<section className={styles.wrapper}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Heading title='Авторизация' className='mb-12' />

						<AuthFields formState={formState} register={registerInput} isPasswordRequired />
						<div className={styles.buttons}>
							<Button type='submit' onClick={() => setType('login')} disabled={isLoading}>
								Login
							</Button>
							<Button type='submit' onClick={() => setType('register')} disabled={isLoading}>
								Register
							</Button>
						</div>
					</form>
				</section>
			</WrapperContent>
		</Meta>
	);
};
