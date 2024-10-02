import Header from "../components/Header"
import { motion } from "framer-motion"
import Stats from "../components/Stats"
import { ListOrdered, Search } from "lucide-react"
import DailyOrders from "../components/Orders/DailyOrders"
import { useState } from "react"

const orderData = [
	{ id: "ORD001", customer: "John Doe", total: 235.4, status: "Delivered", date: "2023-07-01" },
	{ id: "ORD002", customer: "Jane Smith", total: 412.0, status: "Processing", date: "2023-07-02" },
	{ id: "ORD003", customer: "Bob Johnson", total: 162.5, status: "Shipped", date: "2023-07-03" },
	{ id: "ORD004", customer: "Alice Brown", total: 750.2, status: "Pending", date: "2023-07-04" },
	{ id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "2023-07-05" },
	{ id: "ORD006", customer: "Eva Martinez", total: 310.75, status: "Processing", date: "2023-07-06" },
	{ id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "2023-07-07" },
	{ id: "ORD008", customer: "Grace Taylor", total: 189.6, status: "Delivered", date: "2023-07-08" },
];


const Orders = () => {

const[searchTerm, setSearchTerm] = useState(" ");
const[tableData, setTableData] = useState(orderData)

const handleSearch=(e)=>{
    const term = e.target.value
    setSearchTerm(term);

    const filterOrder = orderData.filter(
        (order)=>
            order.customer.toLowerCase().includes(term)
    );
    setTableData(filterOrder)


}

  return (
    <div className="flex-1 overflow-auto relative z-10">
    <Header title="Orders"/>
    <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
    <motion.div className="w-full p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>

        <div className="flex w-full gap-6">
            <Stats name="Total Orders" icon={ListOrdered} value={1234} color="#6366f2"/>
            <Stats name="Total Orders" icon={ListOrdered} value={1234} color="#6366f2"/>
            <Stats name="Total Orders" icon={ListOrdered} value={1234} color="#6366f2"/>
            <Stats name="Total Orders" icon={ListOrdered} value={1234} color="#6366f2"/>
        </div>

        <div>
            <DailyOrders/>
        </div>

        <div className=" justify-between items-center mb-6 mt-6 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'">
        <div className="flex justify-between">

            <h2 className="text-2xl font-semibold text-gray-100 my-4">Orders Table</h2>
            <div className='relative my-4'>
					<input
						type='text'
						placeholder='Search orders by Customer name...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
        </div>
        <table className="min-w-full divide-y divide-gray-700">
            <thead>
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                </tr>
            </thead>
            <tbody className='divide divide-gray-700'>
                {tableData.map((element)=>(
                    <motion.tr key={element.id} initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{element.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{element.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{element.total}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{element.status}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{element.date}</td>
                    </motion.tr>
                   
                ))}
            </tbody>
        </table>
        </div>

    </motion.div>

    </main>
      
    </div>
  )
}

export default Orders
