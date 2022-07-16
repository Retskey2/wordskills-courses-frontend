import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Header.module.scss'
import { IHeaderItem } from './header.interface'

const HeaderItem: FC<{ item: IHeaderItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
			key={item.link}
		>
			<Link href={item.link}>
				<a>{item.title}</a>
			</Link>
		</li>
	)
}

export default HeaderItem
