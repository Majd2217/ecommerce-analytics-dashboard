import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

export const sql = neon(process.env.DATABASE_URL);

// Database query functions
export async function getProducts() {
  return await sql`
    SELECT * FROM products 
    ORDER BY created_at DESC
  `;
}

export async function getProductById(id: number) {
  const result = await sql`
    SELECT * FROM products 
    WHERE id = ${id}
  `;
  return result[0];
}

export async function updateProductStock(id: number, quantity: number) {
  return await sql`
    UPDATE products 
    SET stock_quantity = ${quantity}, updated_at = CURRENT_TIMESTAMP
    WHERE id = ${id}
    RETURNING *
  `;
}

export async function getDashboardStats() {
  const [totalRevenue] = await sql`
    SELECT COALESCE(SUM(total_amount), 0) as total_revenue
    FROM orders 
    WHERE status = 'completed'
  `;

  const [totalOrders] = await sql`
    SELECT COUNT(*) as total_orders
    FROM orders
  `;

  const [totalCustomers] = await sql`
    SELECT COUNT(*) as total_customers
    FROM customers
  `;

  const [lowStockProducts] = await sql`
    SELECT COUNT(*) as low_stock_count
    FROM products 
    WHERE stock_quantity < 20
  `;

  return {
    totalRevenue: Number(totalRevenue.total_revenue),
    totalOrders: Number(totalOrders.total_orders),
    totalCustomers: Number(totalCustomers.total_customers),
    lowStockProducts: Number(lowStockProducts.low_stock_count)
  };
}

export async function getRecentOrders() {
  return await sql`
    SELECT 
      o.id,
      o.total_amount,
      o.status,
      o.order_date,
      c.first_name,
      c.last_name,
      c.email
    FROM orders o
    JOIN customers c ON o.customer_id = c.id
    ORDER BY o.order_date DESC
    LIMIT 10
  `;
}

export async function getSalesData() {
  return await sql`
    SELECT 
      DATE(order_date) as date,
      COUNT(*) as orders,
      SUM(total_amount) as revenue
    FROM orders
    WHERE order_date >= CURRENT_DATE - INTERVAL '30 days'
    GROUP BY DATE(order_date)
    ORDER BY date DESC
  `;
}

export async function getTopProducts() {
  return await sql`
    SELECT 
      p.name,
      p.price,
      SUM(oi.quantity) as total_sold,
      SUM(oi.total_price) as total_revenue
    FROM products p
    JOIN order_items oi ON p.id = oi.product_id
    JOIN orders o ON oi.order_id = o.id
    WHERE o.status = 'completed'
    GROUP BY p.id, p.name, p.price
    ORDER BY total_sold DESC
    LIMIT 5
  `;
}

export async function getLowStockProducts() {
  return await sql`
    SELECT id, name, stock_quantity, category
    FROM products
    WHERE stock_quantity < 20
    ORDER BY stock_quantity ASC
  `;
}
