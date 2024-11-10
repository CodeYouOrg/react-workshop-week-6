import { useState } from 'react';

function CreateInput({ onSave, id }) {
	const [values, setValues] = useState({
		id,
		type: 'text',
		label: '',
	});

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
			<select
				autoFocus
				name='type'
				label='Type'
				onChange={e => handleChange(e.target.name, e.target.value)}
				value={values.type}
			>
				<option value={'text'}>text</option>
				<option value={'date'}>date</option>
				<option value={'email'}>email</option>
				<option value={'password'}>password</option>
				<option value={'tel'}>phone number</option>
				<option value={'radio'}>radio</option>
				<option value={'checkbox'}>checkbox</option>
			</select>
			<input
				label='Label'
				name='label'
				onInput={e => handleChange(e.target.name, e.target.value)}
				type='text'
				value={values.label}
			/>
			<button type='submit'>create</button>
		</form>
	);
}

export default CreateInput;
