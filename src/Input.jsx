import { useState } from 'react';

function Input({ input }) {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const [image, setImage] = useState('');

	function onInputPhone(newValue) {
		if (isNaN(newValue)) {
			setError('Please enter a number');
			return;
		}
		setError('');
		setValue(newValue);
	}

	function onInputFile(input) {
		if (input.files && input.files[0]) {
			const reader = new FileReader();

			reader.onload = function (e) {
				setImage(e.target.result);
			};

			reader.readAsDataURL(input.files[0]);
		}
		setValue(input.value);
	}

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
			) : input.type == 'tel' ? (
				<>
					<input
						className='spacing'
						type={input.type}
						name={input.label}
						onInput={e => onInputPhone(e.target.value)}
						onFocus={e => setError('')}
						value={value}
					/>
					<p className='error'>{error}</p>
				</>
			) : input.type == 'file' ? (
				<>
					<input
						className='spacing'
						type={input.type}
						name={input.label}
						onInput={e => onInputFile(e.target)}
						value={value}
						accept='image/*,.pdf'
					/>
					{image && <img src={image} width={300} height={200}></img>}
				</>
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
