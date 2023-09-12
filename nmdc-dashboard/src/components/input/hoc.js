import React from 'react';
import cn from 'classnames';

export const withLabel = (Component) => {
	const WrappedComponent = (props) => {
		const {
			labelClassNames,
			label,
			split = false,
			obliqueFontStyle = false,
			splitText = 'optional',
		} = props;

		return (
			<label
				className={cn(labelClassNames, 'Input__label', {
					'Input__label--split': split,
				})}
			>
				<span className={'Input__label__text'}>
					{!split ? (
						label
					) : (
						<div className='split-label'>
							<span className='regular'>{label}</span>
							<span className={`light ${obliqueFontStyle ? 'oblique' : ''}`}>
								&nbsp;({`${splitText}`})
							</span>
						</div>
					)}
				</span>
				<Component {...props} />
			</label>
		);
	};
	return WrappedComponent;
};
