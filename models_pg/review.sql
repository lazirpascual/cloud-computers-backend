/* create reviews table*/
CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    rating DOUBLE PRECISION NOT NULL, 
    title VARCHAR(50),
    comment TEXT,
    recommend BOOLEAN NOT NULL,
    productId TEXT,
    date TEXT
);

/* add data to table */
INSERT INTO reviews (rating, title, comment, recommend, productId, date)
VALUES (
    5, 
    'Great but hard to find', 
    'Test Comment',
    true, 
    '60ef5ae3254d9a2b86750a09', 
    '2021-07-27'
);