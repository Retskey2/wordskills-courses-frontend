import Image from 'next/image'
import React, { FC } from 'react'

import { ITeacher } from '@/components/screens/Teachers/teacher.interface'

import styles from './TeacherGrid.module.scss'

export const TeacherGridItem: FC<{ item: ITeacher }> = ({ item }) => {
	return (
		<div className={styles['teacher-grid-item']}>
			<div className={styles['image-block']}>
				<Image src={item.Photo} alt="photo" />
				<div />
			</div>
			<div className={styles['info-block']}>
				<div>{item.Name}</div>
				<div>{item.RoleName}</div>
			</div>
		</div>
	)
}
