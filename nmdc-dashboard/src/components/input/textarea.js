import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Textarea = (props) => {
	const {
		name,
		value,
		onFocus,
		maxLength,
		classNames,
		placeholder,
		error = null,
		onInputChange,
	} = props;

	const hasError = !!error;

	return (
		<>
			<textarea
				name={name}
				value={value}
				onFocus={onFocus}
				maxLength={maxLength}
				onChange={onInputChange}
				placeholder={placeholder}
				className={cn(classNames, 'input__field input__textarea', {
					'input__field--error': hasError,
				})}
			/>

			{hasError && <div className={'input__error'}>{error}</div>}
		</>
	);
};

Textarea.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	classNames: PropTypes.string,
	onInputChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default Textarea;
