/* create useritems table*/
CREATE TABLE useritems(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(100),
    price DOUBLE PRECISION NOT NULL,
    quantity INT NOT NULL,
    category VARCHAR(30) NOT NULL,
    imgPath TEXT NOT NULL,
    imgPreview TEXT NOT NULL,
    productPreview TEXT NOT NULL
);

/* add data to table */
INSERT INTO useritems (name, price, quantity, category, imgPath, imgPreview, productPreview)
VALUES (
    'Fractal Design Meshify C', 
    95.99, 
    1, 
    'Case', 
    'https://i.imgur.com/b3ieUZw.jpg', 
    'https://i.imgur.com/iOrrWY6.jpg', 
    'https://i.imgur.com/x4CmFCt.png'
);

/* add reference to users */
ALTER TABLE useritems
ADD COLUMN userId INT,
ADD FOREIGN KEY (userId) REFERENCES users(id);