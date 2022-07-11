import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
	outlined?: boolean
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, outlined }) => {
	return (
		<button
			className={outlined ? cn(styles.button, styles.outlined) : styles.button}
		>
			{children}
		</button>
	)
}

export default Button
