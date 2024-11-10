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
				<>
					<input
						type={input.type}
						label={input.label}
						key={input.id}
					></input>
					<button
						key={'button' + input.id}
						onClick={() => handleRemove(input)}
					>
						X
					</button>
				</>
			))}
		</form>
	);
}

export default Form;
