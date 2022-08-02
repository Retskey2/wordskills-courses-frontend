import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import collegeIcon from '@/assets/image/college-icon.svg'

import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<ul>
				<li>WorldSkills</li>
				<li>
					<Link href="/">
						<a>РКЦ Санкт-Петербург</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>РКЦ Юниоры Санкт-Петербург</a>
					</Link>
				</li>
			</ul>
			<ul>
				<li>О нас</li>
				<li>
					<Link href="/">
						<a>Наши принципы</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Развитие компетенций</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Эксперты</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Проекты</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Контакты</a>
					</Link>
				</li>
			</ul>
			<ul>
				<li>Доступ</li>
				<li>
					<Link href="/">
						<a>Бесплатные курсы</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Система обучения</a>
					</Link>
				</li>
			</ul>
			<ul>
				<li>Социальные сети</li>
				<li>
					<Link href="/">
						<a>Бесплатные курсы</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Система обучения</a>
					</Link>
				</li>
			</ul>
			<div className={styles.logo}>
				<Image src={collegeIcon} alt="collegeIcon" />
			</div>
		</div>
	)
}

export default Footer
