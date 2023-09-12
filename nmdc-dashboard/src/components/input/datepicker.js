import cn from 'classnames';
import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const Index = (props) => {
	const {
		error,
		minDate,
		maxDate,
		endDate,
		selected,
		startDate,
		classNames,
		placeholder,
		onInputChange,
		disabled = false,
		dateFormat = 'MMM dd, yyyy',
	} = props;

	const hasError = !!error;
	return (
		<DatePicker
			minDate={minDate}
			maxDate={maxDate}
			endDate={endDate}
			selected={selected}
			disabled={disabled}
			startDate={startDate}
			dateFormat={dateFormat}
			onChange={onInputChange}
			placeholderText={placeholder}
			className={cn(classNames, 'input__field', {
				'input__field--error': hasError,
				'input__field--disabled': disabled,
			})}
		/>
	);
};

export default Index;
