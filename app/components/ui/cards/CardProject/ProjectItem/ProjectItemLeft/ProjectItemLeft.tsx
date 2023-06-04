import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';


import friendsSVG from '@/assets/image/friends.svg';
import Teacher from '@/assets/image/teacher-photo.png';
import watchSVG from '@/assets/image/watch.svg';
import { IProjectItem } from '@/components/screens/Projects/projects.interface';
import Button from '@/components/ui/Button/Button';

import styles from './ProjectItemLeft.module.scss';

const ProjectItemLeft: FC<{ item: IProjectItem }> = ({ item }) => (
	<div className={styles.projectItemLeft}>
		<div className={styles.wrapper}>
			<div className={styles.containerImage}>
				<Image
					alt='project photo'
					className={styles.promoImage}
					height={464}
					src={item.image}
					width={355}
				/>
				<div className={styles.promoBorder} />
			</div>
			<div className={styles.containerContent}>
				<h1>{item.title}</h1>
				<div>
					<h2>{item.subtitle}</h2>
					<p>{item.text}</p>
				</div>
				<div className='mt-6'>
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
				<Button className='mt-7'>
					<Link href='/courses'>Смотреть курсы</Link>
				</Button>
			</div>
		</div>
	</div>
);

export default ProjectItemLeft;
