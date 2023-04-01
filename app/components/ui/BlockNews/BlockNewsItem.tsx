import React from 'react';

import Button from '../Button/Button';

import styles from './BlockNews.module.scss';

export const BlockNewsItem = () => (
	<div className={styles['news-container-item']}>
		<div className={styles['image-block']} />
		<div className={styles['info-block']}>
			<span>Data science</span>
			<h1>Национальная сборная</h1>
			<p>Национальная сборная WorldSkills Russia – носитель лучших технологий подготовки ...</p>
			<Button className='mx-auto' variant='white'>
				Смотреть
			</Button>
		</div>
	</div>
);
