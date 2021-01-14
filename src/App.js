import { AppState } from './context/AppState';
import { Navbar } from './components/layout/Navbar';
import { Page } from './components/pages/Page';
// import { Footer } from './components/layout/Footer';
import './App.css';

function App() {
	return (
		<AppState>
			<Navbar />
			<Page />
		</AppState>
	);
}

export default App;
