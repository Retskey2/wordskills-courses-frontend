import { forwardRef } from 'react';

import styles from './Form.module.scss';
import { IField } from './form.interface';

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => (
		<>
			<input ref={ref} className={styles.field} type={type} {...rest} placeholder={placeholder} />

			{error && <div className={styles.error}>{error.message}</div>}
		</>
	)
);

Field.displayName = 'Field';

export default Field;
