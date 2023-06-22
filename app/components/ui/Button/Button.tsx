import cn from 'classnames';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './Button.module.scss';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'white' | 'arrow' | 'outline';
	className?: string;
}

const Button: FC<PropsWithChildren<IButton>> = ({ children, variant = 'blue', className }) => (
	<button
		className={cn(
			{
				[styles.white]: variant === 'white',
				[styles.arrow]: variant === 'arrow',
				[styles.outline]: variant === 'outline'
			},
			styles.button,
			className
		)}
	>
		{children}
	</button>
);

export default Button;
