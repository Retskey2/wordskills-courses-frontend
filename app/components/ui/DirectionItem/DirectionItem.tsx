import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Arrow from '@/assets/image/arrow-direction.svg'

const DirectionItem: FC = () => {
	return (
		<div className="max-w-xs p-8 min-h-[320px] relative rounded shadow-direction mt-12 gap-4">
			<h1 className="text-blue-600 text-3xl mb-1">
				<span className="font-semibold">WorldSkills</span> Exam
			</h1>
			<p className="text-xl text-gray-500">
				Индивидуальные консультации и обучение от экспертов WorldSkills.
			</p>
			<Link href="/">
				<a className="absolute bottom-[20px]">
					<Image src={Arrow} alt="arrow"></Image>
				</a>
			</Link>
		</div>
	)
}

export default DirectionItem
