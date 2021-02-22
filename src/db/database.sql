CREATE TABLE transactions(
id SERIAL NOT NULL PRIMARY KEY,
amount MONEY NOT NULL,
type_of VARCHAR(8) NOT NULL,
wallet VARCHAR(20) NOT NULL,
about VARCHAR(50),
date_of TIMESTAMP DEFAULT NOW()
);

INSERT INTO transactions (amount, type_of, wallet, about) VALUES
(450, 'ingreso', 'efectivo', 'propina'),
(850, 'gasto', 'tarjeta', 'cominda para el viaje');