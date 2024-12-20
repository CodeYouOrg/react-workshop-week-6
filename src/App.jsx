import { useState } from 'react';
import Form from './Form';
import CreateInput from './CreateInput';
import './app.css';

function App() {
	const [adding, setAdding] = useState(false);
	const [inputs, setInputs] = useState([]);
	const [id, setId] = useState(0);

	const handleAdd = input => {
		setInputs([...inputs, input]);
		setId(id + 1);
	};

	const handleRemove = removedInput => {
		setInputs(inputs.filter(input => input != removedInput));
	};

	return (
		<main>
			<div>
				<button onClick={() => setAdding(true)}>add input</button>
				{adding && (
					<>
						<CreateInput
							id={id}
							onSave={input => {
								handleAdd(input);
								setAdding(false);
							}}
							onCancel={() => {
								setAdding(false);
							}}
						/>
					</>
				)}
			</div>
			<Form inputs={inputs} handleRemove={handleRemove} />
		</main>
	);
}

export default App;
