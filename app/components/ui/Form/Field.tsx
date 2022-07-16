import cn from 'classnames'
import { forwardRef } from 'react'

import styles from './Form.module.scss'
import { IField } from './form.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<>
				<input
					className={styles.field}
					ref={ref}
					type={type}
					{...rest}
					placeholder={placeholder}
				/>

				{error && <div className={styles.error}>{error.message}</div>}
			</>
		)
	}
)

Field.displayName = 'Field'

export default Field
