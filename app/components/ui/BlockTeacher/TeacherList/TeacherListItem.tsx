import Image from 'next/image'
import React from 'react'
import { FC } from 'react'

import { ITeacher } from '@/components/screens/Teachers/teacher.interface'

import EmailIcon from '@/assets/image/email.svg'

import styles from './TeacherList.module.scss'

export const TeacherListItem: FC<{ item: ITeacher }> = ({ item }) => {
	return (
		<div className={styles['teacher-list-item']}>
			<div className={styles['image-block']}>
				<Image src={item.Photo} />
				<div />
			</div>
			<div className={styles['info-block']}>
				<div>{item.Name}</div>
				<div>{item.RoleName}</div>
				<div>
					<Image src={EmailIcon} />
					<span>{item.Email}</span>
				</div>
			</div>
		</div>
	)
}
