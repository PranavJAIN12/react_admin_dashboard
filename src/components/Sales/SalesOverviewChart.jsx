import { motion } from "framer-motion";
import { useState } from "react";
import {
 
  CartesianGrid,
 
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area,
} from "recharts";

const salesData = [
    { name: "Jul", sales: 4200 },
    { name: "Aug", sales: 3800 },
    { name: "Sep", sales: 5100 },
    { name: "Oct", sales: 4600 },
    { name: "Nov", sales: 5400 },
    { name: "Dec", sales: 7200 },
    { name: "Jan", sales: 6100 },
    { name: "Feb", sales: 5900 },
    { name: "Mar", sales: 6800 },
    { name: "Apr", sales: 6300 },
    { name: "May", sales: 7100 },
    { name: "Jun", sales: 7500 },
  ];
  

const SalesOverviewChart = () => {

    const[selectedTimeRange] = useState("This Month")
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.2}}>

    <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-100">Sales Overview</h2>
        <select className="bg-gray-800 text-gray-100">

<option value="This Month">{selectedTimeRange}</option>

<option value="This Week">This Week</option>

<option value="This year">This Year</option>

</select>
    </div>

    <div className="w-full h-80 m-3 ">
        <ResponsiveContainer>
            <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray='3 3' stroke="#4B5563"/>
                <XAxis dataKey={"name"} stroke="#9ca3af"/>
                <YAxis stroke="#9ca3af"/>
                <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              fill="#8B5CF6"
              fillOpacity={0.3}
              
            />
            </AreaChart>
        </ResponsiveContainer>
    </div>
      
    </motion.div>
  )
}

export default SalesOverviewChart
