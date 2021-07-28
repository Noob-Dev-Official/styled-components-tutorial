import './App.css';
import { Buttons } from './Buttons';
import { Wrapper } from './components/styled';

function App() {
	return (
		<>
			<Wrapper>
				<h2>app</h2>
				<Buttons primary={true}>Hello</Buttons>
				<Buttons>Bye</Buttons>
			</Wrapper>
		</>
	);
}

export default App;
