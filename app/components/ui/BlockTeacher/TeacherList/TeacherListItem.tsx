import Image from 'next/image';
import React, { FC } from 'react';

import EmailIcon from '@/assets/image/email.svg';
import { ITeacher } from '@/components/screens/Teachers/teacher.interface';


import styles from './TeacherList.module.scss';

export const TeacherListItem: FC<{ item: ITeacher }> = ({ item }) => (
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
);
