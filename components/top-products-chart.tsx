'use client';

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface TopProductsChartProps {
  data: Array<{
    name: string;
    total_sold: string; // Changed from number to string to match database
    total_revenue: string;
  }>;
}

export function TopProductsChart({ data }: TopProductsChartProps) {
  const chartData = data.map(item => ({
    name: item.name.length > 15 ? item.name.substring(0, 15) + '...' : item.name,
    sold: Number(item.total_sold), // Convert to number for chart
    revenue: Number(item.total_revenue)
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} layout="horizontal">
        <XAxis type="number" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis 
          type="category" 
          dataKey="name" 
          fontSize={12}
          tickLine={false}
          axisLine={false}
          width={100}
        />
        <Tooltip 
          formatter={(value, name) => [
            value,
            name === 'sold' ? 'Units Sold' : 'Revenue'
          ]}
        />
        <Bar dataKey="sold" fill="#3b82f6" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
