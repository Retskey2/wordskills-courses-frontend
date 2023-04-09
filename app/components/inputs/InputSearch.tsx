import { ChangeEvent, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { useDebounce } from '@/utills/hooks/useDebounce';

import styles from './InputSearch.module.scss';

interface InputProps {
	placeholder: string;
	onSearch?: (value: string) => void;
}

const InputSearch: React.FC<InputProps> = ({ placeholder }) => {
	const [value, setValue] = useState<string>('');
	const debouncedValue = useDebounce<string>(value, 500);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	// Fetch API (optional)
	useEffect(() => {
		// Do fetch here...
		// Triggers when "debouncedValue" changes
	}, [debouncedValue]);

	return (
		<div className={styles['input-container']}>
			<div className={styles['icon-container']}>
				<FiSearch />
			</div>
			<input placeholder={placeholder} type='text' value={value} onChange={handleChange} />
		</div>
	);
};

export default InputSearch;
