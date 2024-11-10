import { useState } from 'react';

function Input({ input }) {
	const [value, setValue] = useState('');

	return (
		<div className='input'>
			<label>{input.label} </label>
			{input.type == 'radio' ? (
				input.options.split(';').map(opt => (
					<div key={opt}>
						<label>{opt}</label>
						<input
							type={input.type}
							name={input.label}
							checked={value == opt}
							onChange={e => setValue(e.target.value)}
							value={opt}
						/>
					</div>
				))
			) : input.type == 'select' ? (
				<select
					className='spacing'
					name='type'
					onChange={e => setValue(e.target.value)}
					value={value}
				>
					{input.options.split(';').map(opt => (
						<option key={opt} value={opt}>
							{opt}
						</option>
					))}
				</select>
			) : (
				<input
					className='spacing'
					type={input.type}
					name={input.label}
					onInput={e => setValue(e.target.value)}
					value={value}
				/>
			)}
		</div>
	);
}

export default Input;
