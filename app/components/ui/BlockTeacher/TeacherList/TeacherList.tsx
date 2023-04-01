import React, { FC } from 'react';

import { ITeacher } from '@/components/screens/Teachers/teacher.interface';

import styles from './TeacherList.module.scss';
import { TeacherListItem } from './TeacherListItem';

export const TeacherList: FC<{ items: ITeacher[] }> = ({ items }) => (
	<div className={styles['teacher-list']}>
		{items.slice(0, 3).map((item) => (
			<TeacherListItem item={item} />
		))}
	</div>
);
