import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ArrowUp from "./utilits/ArrowUp/ArrowUp";
import AppHeader from "./Components/AppHeader/AppHeader";
import Content from "./Components/Content/Content";

const App = () => {
	return (
		<Provider store={store}>
			<main className="App">
				<div className="app-wrapper">
					<AppHeader />
					<Content />
				</div>
				<ArrowUp />
			</main>
		</Provider>
	);
};

export default App;