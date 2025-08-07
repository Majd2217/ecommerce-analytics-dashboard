import { getProducts, getLowStockProducts } from '@/lib/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Package, Plus } from 'lucide-react';
import Link from 'next/link';
import { ProductTable } from '@/components/product-table';

export default async function InventoryPage() {
  const [products, lowStockProducts] = await Promise.all([
    getProducts(),
    getLowStockProducts()
  ]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStockStatus = (quantity: number) => {
    if (quantity === 0) return { label: 'Out of Stock', color: 'bg-red-100 text-red-800' };
    if (quantity < 20) return { label: 'Low Stock', color: 'bg-yellow-100 text-yellow-800' };
    return { label: 'In Stock', color: 'bg-green-100 text-green-800' };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
            <p className="text-gray-600 mt-2">Manage your product inventory and stock levels</p>
          </div>
          <Button asChild>
            <Link href="/inventory/add">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Link>
          </Button>
        </div>

        {/* Low Stock Alert */}
        {lowStockProducts.length > 0 && (
          <Card className="mb-6 border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-800">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Low Stock Alert
              </CardTitle>
              <CardDescription className="text-yellow-700">
                {lowStockProducts.length} products are running low on stock
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lowStockProducts.map((product: any) => (
                  <div key={product.id} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                    <Badge variant="outline" className="text-red-600 border-red-200">
                      {product.stock_quantity} left
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="h-5 w-5 mr-2" />
              All Products
            </CardTitle>
            <CardDescription>
              Complete list of products in your inventory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProductTable products={products} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
