import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Input = (props) => {
	const {
		id,
		name,
		value,
		onFocus,
		disabled,
		classNames,
		placeholder,
		type = 'text',
		onInputChange,
		error = null,
	} = props;

	const hasError = !!error;

	return (
		<>
			<input
				id={id}
				type={type}
				name={name}
				value={value}
				onFocus={onFocus}
				disabled={disabled}
				onChange={onInputChange}
				placeholder={placeholder}
				className={cn(classNames, 'input__field', {
					'input__field--error': hasError,
					'input__field--disabled': disabled,
				})}
			/>

			{hasError && <div className={'Input__error'}>{error}</div>}
		</>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	classNames: PropTypes.string,
	onInputChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default Input;
