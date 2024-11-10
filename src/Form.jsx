import Input from './Input';

function Form({ inputs, handleRemove }) {
	return (
		<form
			aria-describedby='form-title'
			onSubmit={e => {
				e.preventDefault();
			}}
		>
			<h2 id='form-title'>new form</h2>
			{inputs.map(input => (
				<Input
					input={input}
					key={input.id}
					handleRemove={handleRemove}
				/>
			))}
		</form>
	);
}

export default Form;
