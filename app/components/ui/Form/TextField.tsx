import { forwardRef } from 'react';

import styles from './Form.module.scss';
import { ITextArea } from './form.interface';

const TextField = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ placeholder, error, style, ...rest }, ref) => (
		<>
			<textarea ref={ref} className={styles.textField} placeholder={placeholder} {...rest} />
			{error && <div className={styles.error}>{error.message}</div>}
		</>
	)
);

TextField.displayName = 'TextField';

export default TextField;
