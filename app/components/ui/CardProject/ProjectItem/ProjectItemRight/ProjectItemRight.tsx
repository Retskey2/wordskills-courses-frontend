import Image from 'next/image';
import { FC } from 'react';


import friendsSVG from '@/assets/image/friends.svg';
import ProjectImage from '@/assets/image/project-photo.png';
import Teacher from '@/assets/image/teacher-photo.png';
import watchSVG from '@/assets/image/watch.svg';
import { IProjectItem } from '@/components/screens/Projects/projects.interface';
import Button from '@/components/ui/Button/Button';

import styles from './ProjectItemRight.module.scss';

const ProjectItemRight: FC<{ item: IProjectItem }> = ({ item }) => (
	<div className={styles.projectItemRight}>
		<div className={styles.wrapper}>
			<div className={styles.containerContent}>
				<div>
					<h1>{item.title}</h1>
					<h2>{item.subtitle}</h2>
					<p>{item.text}</p>
				</div>
				<div className='mt-6 text-white'>
					Преподаватели:
					<div className={styles.teachers}>
						<div>
							<Image alt='photo' className='rounded-full' src={Teacher} />
						</div>
						<span>Каспин Дмитрий</span>
					</div>
				</div>
				<div className={styles.info}>
					<div>
						<Image alt='icon' src={watchSVG} />
						<span>{item.duration}</span>
					</div>
					<div>
						<Image alt='icon' src={friendsSVG} />
						<span>{item.old}</span>
					</div>
				</div>
				<Button className='mt-7' variant='white'>
					Смотреть курсы
				</Button>
			</div>
			<div className={styles.containerImage}>
				<Image
					alt='project photo'
					className={styles.promoImage}
					height={464}
					src={ProjectImage}
					width={355}
				/>
				<div className={styles.promoBorder} />
			</div>
		</div>
	</div>
);

export default ProjectItemRight;
