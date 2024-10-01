import Header from "../components/Header";
import { motion } from "framer-motion";
import Stats from "../components/Stats";
import { Zap, User, Box, GitGraphIcon, Search } from "lucide-react";
import { useState } from "react";
import SalesTrend from "../components/products/SalesTrend";
import CategoryDistribution from "../components/overview/CategoryDistribution";

const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

const Product = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [tableData, setTableData] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase().trim(); 
    setSearchTerm(term);

    // Filter product data based on the search term
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) || 
        product.category.toLowerCase().includes(term)
    );

    setTableData(filtered); 
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <motion.div
        className="w-full p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row gap-6 m-4 p-3">
          <Stats name="Total Sales" icon={Zap} value="$12222" color="#6366f2" />
          <Stats name="New Sales" icon={User} value="$12222" color="#6366f2" />
          <Stats name="Total Sales" icon={Box} value="$12222" color="#6366f2" />
          <Stats name="Total Sales" icon={GitGraphIcon} value="$12222" color="#6366f2" />
        </div>

        <div className="border-b-2 bg-gray-800 border-gray-700">
        <div className="flex m-3 p-5 flex-row justify-between ">

          <h1 className="text-gray-100 text-2xl font-semibold ">Product List</h1>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
          </div>

          <table className="w-full min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Sales</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {tableData.map((element) => (
                <tr key={element.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                    {element.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {element.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    ${element.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {element.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {element.sales}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="m-5 grid grid-cols-1 gap-6">
          <SalesTrend />
          <CategoryDistribution />
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
