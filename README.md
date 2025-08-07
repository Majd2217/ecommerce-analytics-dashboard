# E-Commerce Analytics Dashboard

A full-stack web application built with Next.js, React, TypeScript, and PostgreSQL that provides comprehensive analytics and management tools for e-commerce businesses.

## 🚀 Live Demo
[View Live Application](https://your-app-url.vercel.app) *(Add this link after deployment)*

## 📊 Features

### Analytics Dashboard
- Real-time sales metrics and KPIs
- Interactive charts showing sales trends (last 30 days)
- Top-selling products visualization
- Revenue tracking and order analytics

### Inventory Management
- Complete product catalog with search and filtering
- Low stock alerts and notifications
- Stock status indicators (In Stock, Low Stock, Out of Stock)
- Product categorization and SKU tracking

### Order Management
- Comprehensive order tracking system
- Customer information integration
- Payment method tracking
- Order status management (pending, processing, shipped, completed)

### Customer Management
- Customer database with purchase history
- Total spent and order count per customer
- Contact information and location tracking
- Customer lifetime value analysis

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Recharts for data visualization

**Backend:**
- Next.js API Routes
- Server Actions
- PostgreSQL with Neon
- SQL queries for data analysis

**Deployment:**
- Vercel (Frontend)
- Neon (Database)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (or Neon account)

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/ecommerce-analytics-dashboard.git
cd ecommerce-analytics-dashboard
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables
\`\`\`bash
cp .env.example .env.local
\`\`\`
Add your database URL to \`.env.local\`:
\`\`\`
DATABASE_URL=your_postgresql_connection_string
\`\`\`

4. Set up the database
Run the SQL scripts in the scripts/ folder to create tables and seed data

5. Run the development server
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📈 Key Metrics Tracked

- **Revenue Analytics**: Total revenue, daily/monthly trends
- **Order Analytics**: Order count, average order value, status distribution
- **Customer Analytics**: Customer acquisition, retention, lifetime value
- **Inventory Analytics**: Stock levels, low stock alerts, product performance

## 🎯 Business Value

This dashboard provides e-commerce businesses with:
- **Real-time insights** into sales performance
- **Inventory optimization** through stock level monitoring
- **Customer relationship management** with purchase history tracking
- **Data-driven decision making** through comprehensive analytics

## 🔧 Technical Highlights

- **Server-Side Rendering** with Next.js for optimal performance
- **Type Safety** with TypeScript throughout the application
- **Responsive Design** that works on desktop and mobile
- **Database Optimization** with indexed queries and efficient joins
- **Modern UI/UX** with shadcn/ui component library
- **Data Visualization** with interactive charts and graphs

## 📊 Database Schema

The application uses a normalized PostgreSQL database with tables for:
- Products (inventory management)
- Customers (user information)
- Orders (transaction records)
- Order Items (detailed purchase data)

## 👨‍💻 About

Built as part of a comprehensive portfolio demonstrating full-stack development skills, data analysis capabilities, and modern web technologies.

---

⭐ **Star this repository if you found it helpful!**
\`\`\`

Now you can:

1. **Click "Download Code"** at the top right of this chat
2. **Extract the ZIP** - this will have ALL the files including the config files
3. **Run `npm install`** - it should work perfectly now!
4. **Upload to GitHub** using the steps I gave you earlier

This complete version includes all the missing configuration files, dependencies, and proper setup. You're ready to go! 🚀
