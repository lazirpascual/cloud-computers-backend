/* create products table*/
CREATE TABLE products(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(100),
    price DOUBLE PRECISION NOT NULL,
    quantity INT NOT NULL,
    category VARCHAR(30) NOT NULL,
    imgPath TEXT NOT NULL,
    imgPreview TEXT NOT NULL,
    productPreview TEXT NOT NULL,
    overview TEXT NOT NULL
);

/* add data to table */
INSERT INTO products (name, price, quantity, category, imgPath, imgPreview, productPreview, overview)
VALUES (
    'Fractal Design Meshify C', 
    95.99, 
    1, 
    'Case', 
    'https://i.imgur.com/b3ieUZw.jpg', 
    'https://i.imgur.com/iOrrWY6.jpg', 
    'https://i.imgur.com/x4CmFCt.png',
    'Meshify strikes an aggressive pose in the Fractal Design lineup with unparalleled cooling performance and a defiant new look. Like Black Diamond facets, The angular asymmetry of the Meshify C carves a space uniquely its own as a new Force in high-airflow design. an open ATX layout with intelligent space utilization creates an unrestricted airflow Path from the mesh front intakes directly through key components to exhaust, ensuring heat is never an issue. The Meshify C has a remarkably compact footprint with the high-end component support of a larger tower, and with seven fan mounts and multi-radiator liquid cooling capability, It has the cooling capacity to match.'
);