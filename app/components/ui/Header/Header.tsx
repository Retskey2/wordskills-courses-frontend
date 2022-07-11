import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Logo from '@/assets/image/logo.svg'

import styles from './Header.module.scss'
import { IHeader } from './header.interface'

const Header: FC<{ header: IHeader }> = ({ header: { items } }) => {
	return (
		<div className={styles.wrapper}>
			<Image draggable={false} src={Logo} width="110" height="65" alt="logo" />
			<ul className={styles.ul}>
				{items.map((item) => (
					<li className={styles.li} key={item.link}>
						<Link href={item.link}>
							<a>{item.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Header
