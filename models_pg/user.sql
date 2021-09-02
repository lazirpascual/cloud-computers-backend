/* create users table*/
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL, 
    name VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    passwordHash TEXT NOT NULL
);

/* add data to table */
INSERT INTO users (username, name, lastName, passwordHash)
VALUES (
    'zae18', 
    'Zae', 
    'Pascual',
    '$2b$10$uTv9ku73LrVzrjpLwBAYxOK4jAjC1abIbE/gqwO8Ydyz6QOZc6Ama'
);