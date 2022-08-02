import Image from 'next/image'
import { FC } from 'react'

import { IProjectItem } from '@/components/screens/Projects/projects.interface'
import Button from '@/components/ui/Button/Button'

import friendsSVG from '@/assets/image/friends.svg'
import Teacher from '@/assets/image/teacher-photo.png'
import watchSVG from '@/assets/image/watch.svg'

import styles from './ProjectItemLeft.module.scss'

const ProjectItemLeft: FC<{ item: IProjectItem }> = ({ item }) => {
	return (
		<div className={styles.projectItemLeft}>
			<div className={styles.wrapper}>
				<div className={styles.containerImage}>
					<Image
						className={styles.promoImage}
						src={item.image}
						alt="project photo"
						height={464}
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
					<div className="mt-6">
						Преподаватели:
						<div className={styles.teachers}>
							<div>
								<Image className="rounded-full" src={Teacher} alt="photo" />
							</div>
							<span>Каспин Дмитрий</span>
						</div>
					</div>
					<div className={styles.info}>
						<div>
							<Image src={watchSVG} alt="icon" />
							<span>{item.duration}</span>
						</div>
						<div>
							<Image src={friendsSVG} alt="icon" />
							<span>{item.old}</span>
						</div>
					</div>
					<Button className="mt-7">Смотреть курсы</Button>
				</div>
			</div>
		</div>
	)
}

export default ProjectItemLeft
