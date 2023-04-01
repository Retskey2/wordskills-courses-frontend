import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from './Header.module.scss';
import { IHeaderItem } from './header.interface';

const HeaderItem: FC<{ item: IHeaderItem }> = ({ item }) => {
	const { asPath } = useRouter();

	return (
		<li
			key={item.link}
			className={cn({
				[styles.active]: asPath === item.link
			})}
		>
			<Link href={item.link}>{item.title}</Link>
		</li>
	);
};

export default HeaderItem;
