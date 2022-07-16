import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Logo from '@/assets/image/logo.svg'

import styles from './Header.module.scss'
import HeaderItem from './HeaderItem'
import { IHeader } from './header.interface'

const Header: FC<{ header: IHeader }> = ({ header: { items } }) => {
	const { asPath } = useRouter()
	return (
		<div
			className={cn(
				{
					[styles.smash]: asPath !== '/',
					[styles.glass]: asPath === '/',
				},
				styles.header
			)}
		>
			<Link href="/">
				<a>
					<Image
						draggable={false}
						src={Logo}
						width="110"
						height="65"
						alt="logo"
					/>
				</a>
			</Link>
			<ul className={styles.ul}>
				{items.map((item) => (
					<HeaderItem item={item} key={item.link} />
				))}
			</ul>
		</div>
	)
}

export default Header
