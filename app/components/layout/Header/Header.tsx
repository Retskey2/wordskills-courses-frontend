import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { NoSSR } from '@/components/ui/NoSSR/NoSSR';

import styles from './Header.module.scss';
import HeaderItem from './HeaderItem';
import { IHeader } from './header.interface';
import { useActions } from '@/utills/hooks/useActions';
import { useAuth } from '@/utills/hooks/useAuth';

const Header: FC<{ header: IHeader }> = ({ header: { items } }) => {
	const { asPath } = useRouter();
	const { user } = useAuth();
	const { logout } = useActions();
	const [isShown, setIsShown] = useState(false);

	return (
		<div
			className={cn(
				{
					[styles.smash]: asPath !== '/',
					[styles.glass]: asPath === '/'
				},
				styles.header
			)}
		>
			<ul className={styles.ul}>
				{items.map((item) => (
					<HeaderItem key={item.link} item={item} />
				))}
				<NoSSR>
					<li className='text-white  relative h-full'>
						{user ? (
							<div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
								<div>Добро пожаловать, {user.login}</div>
								{isShown && (
									<ul className='absolute z-10 bg-white shadow-lg text-[#003ecb] w-full max-w-[225px] top-6 flex-col flex gap-2 px-4 py-2 rounded'>
										<li className='cursor-pointer' onClick={logout}>
											Выйти
										</li>
									</ul>
								)}
							</div>
						) : (
							<Link href='/auth'>
								<div className='cursor-pointer'>Войти</div>
							</Link>
						)}
					</li>
				</NoSSR>
			</ul>
		</div>
	);
};

export default Header;
