import cn from 'classnames';
import { useState } from 'react';

import styles from './Accordion.module.scss';

interface AccordionProps {
	title: string;
	contents: {
		title: string;

		email: string;
	}[];
}

const Accordion: React.FC<AccordionProps> = ({ title, contents }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles['accordion-container']}>
			<div
				className={cn(styles['accordion-title'], {
					[styles.active]: isOpen
				})}
				onClick={toggleAccordion}
			>
				{title}
			</div>
			{isOpen && (
				<div className={styles['accordion-contents']}>
					{contents.map((content, index) => (
						<div key={index} className={styles.item}>
							<span> {content.title}</span>
							<span>{content.email}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Accordion;
