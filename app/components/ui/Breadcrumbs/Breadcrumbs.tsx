import { Skeleton } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

import styles from './Breadcrumbs.module.scss';
import { BreadcrumbsProps } from './breadcrumbs.interface';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
	
	return (
		<nav className={styles['breadcrumbs-container']}>
			<ul>
				{breadcrumbs.map((item) => (
					<Link href={item.path}>
						<li>
							<MdOutlineArrowBackIos />
							{item.label !== 'undefined' ? (
								<span>{item.label}</span>
							) : (
								<Skeleton height={32} width={200} />
							)}
						</li>
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Breadcrumbs;
