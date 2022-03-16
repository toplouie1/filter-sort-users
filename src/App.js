import { useState } from "react";
import "./App.css";
import users from "./data/users.js";

const App = () => {
	// State being stored
	const [searchInput, setSearchInput] = useState("");
	// Filter users checking if it includes the character ...
	let filteredUsers = users.filter((user) => {
		let name = user.name.toLowerCase();
		return name.includes(searchInput.toLowerCase());
	});
	// Mapping the names
	let renderUsers = filteredUsers.map((user, index) => {
		return <li key={index}>{user.name}</li>;
	});
	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};

	return (
		<div>
			<h1>User Filter Sort</h1>
			<form>
				<label>Search Name</label>
				<input value={searchInput} onChange={handleSearchInput} />
			</form>
			<ul>{renderUsers}</ul>
		</div>
	);
};

export default App;
