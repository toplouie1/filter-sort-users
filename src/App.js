import { useState } from "react";
import "./App.css";
import users from "./data/users.js";

const App = () => {
	// State being stored
	const [searchInput, setSearchInput] = useState("");
	const [sortInput, setSortInput] = useState("");

	// Filter users checking if it includes the character ...
	let filteredUsers = users.filter((user) => {
		let name = user.name.toLowerCase();
		return name.includes(searchInput.toLowerCase());
	});

	// sorting it
	if (sortInput) {
		filteredUsers.sort((a, b) => {
			if (a[sortInput] < b[sortInput]) {
				return -1;
			}
			if (a[sortInput] > b[sortInput]) {
				return 1;
			}
			return 0;
		});
	}

	// Mapping the names
	let renderUsers = filteredUsers.map((user, index) => {
		return (
			<li key={index}>
				{user.name} - {user.currency}
			</li>
		);
	});

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};
	// Short drop down changes
	const handleSortOnChange = (e) => {
		setSortInput(e.target.value);
	};

	return (
		<div>
			<h1>User Filter Sort</h1>
			<form>
				<label htmlFor="search_input">Search Name</label>
				<input
					id="search_input"
					type="text"
					value={searchInput}
					onChange={handleSearchInput}
				/>

				<select onChange={handleSortOnChange}>
					<option>--Sort--</option>
					<option value="name">Name</option>
					<option value="currency">Currency</option>
				</select>
			</form>
			<ul>{renderUsers}</ul>
		</div>
	);
};

export default App;
