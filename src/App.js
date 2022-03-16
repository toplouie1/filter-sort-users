import { render } from "@testing-library/react";
import "./App.css";
import users from "./data/users.js";

const App = () => {
	let renderUsers = users.map((user) => {
		return <li>{user.name}</li>;
	});
	return (
		<div>
			<h1>User Filter Sort</h1>
			<ul>{renderUsers}</ul>
		</div>
	);
};

export default App;
