import { sql } from '@/lib/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

async function getOrdersWithDetails() {
  return await sql`
    SELECT 
      o.id,
      o.total_amount,
      o.status,
      o.order_date,
      o.payment_method,
      c.first_name,
      c.last_name,
      c.email,
      c.city,
      c.state,
      COUNT(oi.id) as item_count
    FROM orders o
    JOIN customers c ON o.customer_id = c.id
    LEFT JOIN order_items oi ON o.id = oi.order_id
    GROUP BY o.id, c.id
    ORDER BY o.order_date DESC
  `;
}

export default async function OrdersPage() {
  const ordersData = await getOrdersWithDetails();
  
  const orders = ordersData as Array<{
    id: number;
    total_amount: string;
    status: string;
    order_date: string;
    payment_method: string;
    first_name: string;
    last_name: string;
    email: string;
    city: string;
    state: string;
    item_count: string;
  }>;

  const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Number(amount));
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
          <p className="text-gray-600 mt-2">View and manage customer orders</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              All Orders
            </CardTitle>
            <CardDescription>
              Complete list of customer orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium">Order ID</th>
                    <th className="text-left p-4 font-medium">Customer</th>
                    <th className="text-left p-4 font-medium">Items</th>
                    <th className="text-left p-4 font-medium">Total</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Payment</th>
                    <th className="text-left p-4 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-mono">#{order.id}</td>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{order.first_name} {order.last_name}</p>
                          <p className="text-sm text-gray-600">{order.email}</p>
                          <p className="text-sm text-gray-500">{order.city}, {order.state}</p>
                        </div>
                      </td>
                      <td className="p-4">{order.item_count} items</td>
                      <td className="p-4 font-medium">{formatCurrency(order.total_amount)}</td>
                      <td className="p-4">
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </td>
                      <td className="p-4 capitalize">{order.payment_method.replace('_', ' ')}</td>
                      <td className="p-4 text-sm">{formatDate(order.order_date)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
