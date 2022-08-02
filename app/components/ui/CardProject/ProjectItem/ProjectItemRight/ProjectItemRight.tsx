import Image from 'next/image'
import { FC } from 'react'

import { IProjectItem } from '@/components/screens/Projects/projects.interface'
import Button from '@/components/ui/Button/Button'

import friendsSVG from '@/assets/image/friends.svg'
import ProjectImage from '@/assets/image/project-photo.png'
import Teacher from '@/assets/image/teacher-photo.png'
import watchSVG from '@/assets/image/watch.svg'

import styles from './ProjectItemRight.module.scss'

const ProjectItemRight: FC<{ item: IProjectItem }> = ({ item }) => {
	return (
		<div className={styles.projectItemRight}>
			<div className={styles.wrapper}>
				<div className={styles.containerContent}>
					<div>
						<h1>{item.title}</h1>
						<h2>{item.subtitle}</h2>
						<p>{item.text}</p>
					</div>
					<div className="mt-6 text-white">
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
					<Button variant="white" className="mt-7">
						Смотреть курсы
					</Button>
				</div>
				<div className={styles.containerImage}>
					<Image
						className={styles.promoImage}
						src={ProjectImage}
						alt="project photo"
						height={464}
						width={355}
					/>
					<div className={styles.promoBorder} />
				</div>
			</div>
		</div>
	)
}

export default ProjectItemRight
