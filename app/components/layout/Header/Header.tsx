import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Logo from '@/assets/image/logo.svg';

import styles from './Header.module.scss';
import HeaderItem from './HeaderItem';
import { IHeader } from './header.interface';

const Header: FC<{ header: IHeader }> = ({ header: { items } }) => {
	const { asPath } = useRouter();
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
			<Link href='/'>
				<Image
					alt='logo'
					className='cursor-pointer'
					draggable={false}
					height='65'
					src={Logo}
					width='110'
				/>
			</Link>
			<ul className={styles.ul}>
				{items.map((item) => (
					<HeaderItem key={item.link} item={item} />
				))}
			</ul>
		</div>
	);
};

export default Header;
