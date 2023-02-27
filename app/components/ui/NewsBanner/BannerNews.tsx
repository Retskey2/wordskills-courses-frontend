import React from 'react'

import Button from '../Button/Button'

import styles from './BannerNews.module.scss'

const BannerNews = () => {
	return (
		<div className={styles.mainWrapper}>
			<h1>Новость дня</h1>
			<h2>«УНИВЕРСИТЕТ FUTURE SKILLS»</h2>
			<p>
				В рамках проекта “Университет Future Skills” прошло <br />
				обучение для международных студентов
			</p>
			<Button className="mt-4" variant="outline">
				Cмотреть
			</Button>
		</div>
	)
}

export default BannerNews
