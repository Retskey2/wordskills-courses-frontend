import { ChangeEventHandler } from 'react';
import { FaSearch } from 'react-icons/fa';

import styles from './InputSearch.module.scss';

interface InputProps {
	placeholder: string;
	value: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputSearch: React.FC<InputProps> = ({ placeholder, value, onChange }) => (
	<div className={styles['input-container']}>
		<div className={styles['icon-container']}>
			<FaSearch />
		</div>
		<input placeholder={placeholder} type='text' value={value} onChange={onChange} />
	</div>
);

export default InputSearch;
