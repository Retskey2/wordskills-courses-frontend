import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import collegeIcon from '@/assets/image/college-icon.svg';

import styles from './Footer.module.scss';

const Footer: FC = () => (
	<div className={styles.footer}>
		<ul>
			<li>О нас</li>
			<li>
				<Link href='/'>Наши принципы</Link>
			</li>
			<li>
				<Link href='/'>Развитие компетенций</Link>
			</li>
			<li>
				<Link href='/'>Эксперты</Link>
			</li>
			<li>
				<Link href='/'>Проекты</Link>
			</li>
			<li>
				<Link href='/'>Контакты</Link>
			</li>
		</ul>
		<ul>
			<li>Доступ</li>
			<li>
				<Link href='/'>Бесплатные курсы</Link>
			</li>
			<li>
				<Link href='/'>Система обучения</Link>
			</li>
		</ul>
		<ul>
			<li>Социальные сети</li>
			<li>
				<Link href='/'>Бесплатные курсы</Link>
			</li>
			<li>
				<Link href='/'>Система обучения</Link>
			</li>
		</ul>
	</div>
);

export default Footer;
