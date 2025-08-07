-- Seed data for the e-commerce analytics dashboard

-- Insert sample products
INSERT INTO products (name, description, price, stock_quantity, category, sku) VALUES
('Wireless Headphones', 'High-quality wireless headphones with noise cancellation', 199.99, 50, 'Electronics', 'WH-001'),
('Smartphone Case', 'Protective case for smartphones', 29.99, 200, 'Accessories', 'SC-001'),
('Laptop Stand', 'Adjustable laptop stand for better ergonomics', 79.99, 75, 'Office', 'LS-001'),
('Coffee Mug', 'Ceramic coffee mug with company logo', 14.99, 300, 'Merchandise', 'CM-001'),
('Bluetooth Speaker', 'Portable bluetooth speaker with excellent sound quality', 89.99, 120, 'Electronics', 'BS-001'),
('Desk Lamp', 'LED desk lamp with adjustable brightness', 45.99, 60, 'Office', 'DL-001'),
('Water Bottle', 'Stainless steel water bottle', 24.99, 150, 'Merchandise', 'WB-001'),
('Wireless Mouse', 'Ergonomic wireless mouse', 39.99, 90, 'Electronics', 'WM-001'),
('Notebook Set', 'Set of 3 premium notebooks', 19.99, 180, 'Office', 'NS-001'),
('Phone Charger', 'Fast charging cable for smartphones', 15.99, 250, 'Accessories', 'PC-001');

-- Insert sample customers
INSERT INTO customers (first_name, last_name, email, phone, address, city, state, zip_code) VALUES
('John', 'Doe', 'john.doe@email.com', '555-0101', '123 Main St', 'New York', 'NY', '10001'),
('Jane', 'Smith', 'jane.smith@email.com', '555-0102', '456 Oak Ave', 'Los Angeles', 'CA', '90210'),
('Mike', 'Johnson', 'mike.johnson@email.com', '555-0103', '789 Pine Rd', 'Chicago', 'IL', '60601'),
('Sarah', 'Williams', 'sarah.williams@email.com', '555-0104', '321 Elm St', 'Houston', 'TX', '77001'),
('David', 'Brown', 'david.brown@email.com', '555-0105', '654 Maple Dr', 'Phoenix', 'AZ', '85001'),
('Lisa', 'Davis', 'lisa.davis@email.com', '555-0106', '987 Cedar Ln', 'Philadelphia', 'PA', '19101'),
('Tom', 'Wilson', 'tom.wilson@email.com', '555-0107', '147 Birch St', 'San Antonio', 'TX', '78201'),
('Amy', 'Moore', 'amy.moore@email.com', '555-0108', '258 Spruce Ave', 'San Diego', 'CA', '92101'),
('Chris', 'Taylor', 'chris.taylor@email.com', '555-0109', '369 Fir Rd', 'Dallas', 'TX', '75201'),
('Emma', 'Anderson', 'emma.anderson@email.com', '555-0110', '741 Ash Dr', 'San Jose', 'CA', '95101');

-- Insert sample orders
INSERT INTO orders (customer_id, total_amount, status, order_date, shipping_address, payment_method) VALUES
(1, 229.98, 'completed', '2024-01-15 10:30:00', '123 Main St, New York, NY 10001', 'credit_card'),
(2, 89.99, 'completed', '2024-01-16 14:20:00', '456 Oak Ave, Los Angeles, CA 90210', 'paypal'),
(3, 154.97, 'shipped', '2024-01-17 09:15:00', '789 Pine Rd, Chicago, IL 60601', 'credit_card'),
(4, 44.98, 'completed', '2024-01-18 16:45:00', '321 Elm St, Houston, TX 77001', 'debit_card'),
(5, 199.99, 'processing', '2024-01-19 11:30:00', '654 Maple Dr, Phoenix, AZ 85001', 'credit_card'),
(6, 79.99, 'completed', '2024-01-20 13:20:00', '987 Cedar Ln, Philadelphia, PA 19101', 'paypal'),
(7, 59.98, 'shipped', '2024-01-21 08:45:00', '147 Birch St, San Antonio, TX 78201', 'credit_card'),
(8, 104.98, 'completed', '2024-01-22 15:30:00', '258 Spruce Ave, San Diego, CA 92101', 'credit_card'),
(9, 34.98, 'pending', '2024-01-23 12:15:00', '369 Fir Rd, Dallas, TX 75201', 'debit_card'),
(10, 129.98, 'completed', '2024-01-24 10:00:00', '741 Ash Dr, San Jose, CA 95101', 'paypal');

-- Insert sample order items
INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_price) VALUES
-- Order 1
(1, 1, 1, 199.99, 199.99),
(1, 4, 2, 14.99, 29.99),
-- Order 2
(2, 5, 1, 89.99, 89.99),
-- Order 3
(3, 3, 1, 79.99, 79.99),
(3, 8, 1, 39.99, 39.99),
(3, 9, 1, 19.99, 19.99),
(3, 10, 1, 15.99, 15.99),
-- Order 4
(4, 4, 3, 14.99, 44.98),
-- Order 5
(5, 1, 1, 199.99, 199.99),
-- Order 6
(6, 3, 1, 79.99, 79.99),
-- Order 7
(7, 7, 1, 24.99, 24.99),
(7, 9, 1, 19.99, 19.99),
(7, 10, 1, 15.99, 15.99),
-- Order 8
(8, 6, 1, 45.99, 45.99),
(8, 8, 1, 39.99, 39.99),
(8, 9, 1, 19.99, 19.99),
-- Order 9
(9, 9, 1, 19.99, 19.99),
(9, 10, 1, 15.99, 15.99),
-- Order 10
(10, 5, 1, 89.99, 89.99),
(10, 8, 1, 39.99, 39.99);
