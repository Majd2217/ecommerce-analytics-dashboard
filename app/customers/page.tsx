import { sql } from '@/lib/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

async function getCustomersWithStats() {
  return await sql`
    SELECT 
      c.*,
      COUNT(o.id) as total_orders,
      COALESCE(SUM(o.total_amount), 0) as total_spent,
      MAX(o.order_date) as last_order_date
    FROM customers c
    LEFT JOIN orders o ON c.id = o.customer_id
    GROUP BY c.id
    ORDER BY total_spent DESC
  `;
}

export default async function CustomersPage() {
  const customers = await getCustomersWithStats();

  const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Number(amount));
  };

  const formatDate = (date: string | null) => {
    if (!date) return 'Never';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Customer Management</h1>
          <p className="text-gray-600 mt-2">View and manage your customer base</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              All Customers
            </CardTitle>
            <CardDescription>
              Complete list of customers with purchase history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium">Customer</th>
                    <th className="text-left p-4 font-medium">Contact</th>
                    <th className="text-left p-4 font-medium">Location</th>
                    <th className="text-left p-4 font-medium">Orders</th>
                    <th className="text-left p-4 font-medium">Total Spent</th>
                    <th className="text-left p-4 font-medium">Last Order</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer: any) => (
                    <tr key={customer.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{customer.first_name} {customer.last_name}</p>
                          <p className="text-sm text-gray-600">ID: {customer.id}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="text-sm">{customer.email}</p>
                          <p className="text-sm text-gray-600">{customer.phone}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="text-sm">{customer.city}, {customer.state}</p>
                          <p className="text-sm text-gray-600">{customer.zip_code}</p>
                        </div>
                      </td>
                      <td className="p-4">{customer.total_orders}</td>
                      <td className="p-4 font-medium">{formatCurrency(customer.total_spent)}</td>
                      <td className="p-4 text-sm">{formatDate(customer.last_order_date)}</td>
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
