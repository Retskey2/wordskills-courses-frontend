import React, { FC } from 'react';

import { ITeacher } from '@/components/screens/Teachers/teacher.interface';

import styles from './TeacherGrid.module.scss';
import { TeacherGridItem } from './TeacherGridItem';

export const TeacherGrid: FC<{ items: ITeacher[] }> = ({ items }) => (
	<div className={styles['grid-container']}>
		{items.slice(0, 8).map((item) => (
			<TeacherGridItem item={item} />
		))}
	</div>
);
