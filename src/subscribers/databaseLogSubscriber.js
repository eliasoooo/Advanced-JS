const db = require("../db");

const databaseLogSubscriber = (data) => {
	const { name, createdAt } = data;
	const query = `INSERT INTO resource_logs (name, created_at) VALUES (?, ?)`;

	db.run(query, [name, createdAt], (err) => {
		if (err) {
			console.error("Error logging to database:", err.message);
		} else {
			console.log("Data logged to database:", data);
		}
	});
};

module.exports = databaseLogSubscriber;
