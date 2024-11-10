import { useState } from 'react';

function CreateInput({ onSave, id }) {
	const [values, setValues] = useState({
		id,
		type: 'text',
		label: '',
		options: '',
	});
	const [showOptions, setShowOptions] = useState(false);

	const handleChange = (name, value) => {
		setValues({ ...values, [name]: value });
	};

	return (
		<form
			aria-describedby='form-title'
			onSubmit={e => {
				e.preventDefault();
				onSave(values);
			}}
		>
			<h2 id='form-title'>new input</h2>
			<label>Label</label>
			<input
				className='spacing'
				name='label'
				onInput={e => handleChange(e.target.name, e.target.value)}
				type='text'
				value={values.label}
			/>
			<label>Type</label>
			<select
				className='spacing'
				autoFocus
				name='type'
				onChange={e => {
					handleChange(e.target.name, e.target.value);
					if (e.target.value == 'select' || e.target.value == 'radio')
						setShowOptions(true);
					else setShowOptions(false);
				}}
				value={values.type}
			>
				<option value={'text'}>text</option>
				<option value={'date'}>date</option>
				<option value={'email'}>email</option>
				<option value={'password'}>password</option>
				<option value={'tel'}>phone number</option>
				<option value={'radio'}>radio</option>
				<option value={'checkbox'}>checkbox</option>
				<option value={'select'}>select</option>
			</select>
			{showOptions && (
				<>
					<label>Options</label>
					<input
						className='spacing'
						name='options'
						placeholder='Enter options separated by ;'
						onInput={e =>
							handleChange(e.target.name, e.target.value)
						}
						type='text'
						value={values.options}
					/>
				</>
			)}
			<button type='submit'>create</button>
		</form>
	);
}

export default CreateInput;
