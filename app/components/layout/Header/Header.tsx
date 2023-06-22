import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { NoSSR } from '@/components/ui/NoSSR/NoSSR';

import iconMenu from '@/assets/icon/menu.svg';

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
	const [isShownMenu, setIsShownMenu] = useState(true);
	const { width } = useWindowSize();
	const [isShownRightMenu, setIsShownRightMenu] = useState(false);

	useEffect(() => {
		if (width < 1080) setIsShownMenu(true);
		else {
			setIsShownMenu(false);
			setIsShownRightMenu(false);
		}
	}, [width]);

	const handlerRightMenu = () => setIsShownRightMenu(!isShownRightMenu);

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
			{isShownRightMenu && (
				<div className='absolute bg-white flex flex-col text-blue-600 px-4 py-2 list-none left-8 top-[60px] rounded-sm shadow-sm'>
					{items.map((item) => (
						<HeaderItem key={item.link} item={item} />
					))}
				</div>
			)}
			<NoSSR>
				<ul className={styles.ul}>
					{isShownMenu ? (
						<Image
							className='cursor-pointer'
							onClick={handlerRightMenu}
							src={iconMenu}
							width={24}
							height={24}
						/>
					) : (
						items.map((item) => <HeaderItem key={item.link} item={item} />)
					)}

					<li className='text-white relative h-full'>
						{user ? (
							<div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
								<div>Добро пожаловать, {user.login}</div>
								{isShown && (
									<ul className='absolute z-10 bg-white shadow-lg text-[#003ecb] w-full max-w-[225px] top-6 flex-col flex gap-2 px-4 py-2 rounded'>
										<li className='cursor-pointer' onClick={logout}>
											Выйти
										</li>
										{user.isAdmin && (
											<Link href='manage'>
												<li className='cursor-pointer'>Админ панель</li>
											</Link>
										)}
									</ul>
								)}
							</div>
						) : (
							<Link href='/auth'>
								<div className='cursor-pointer'>Войти</div>
							</Link>
						)}
					</li>
				</ul>
			</NoSSR>
		</div>
	);
};

export default Header;
