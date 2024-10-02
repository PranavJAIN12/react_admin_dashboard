import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const channelData = [
	{ name: "Organic Search", value: 4000 },
	{ name: "Paid Search", value: 3000 },
	{ name: "Direct", value: 2000 },
	{ name: "Social Media", value: 2780 },
	{ name: "Referral", value: 1890 },
	{ name: "Email", value: 2390 },
];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F"];

const ChannelPerformance = () => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>

<h2 className="text-2xl text-gray-100 font-semibold mb-4">Sales By Category</h2>
    <div className="h-80">

    <ResponsiveContainer height={"100%"} width={"100%"}>
    <PieChart >
    <Pie data={channelData}
    dataKey={"value"}
    cx={"50%"}
    cy={"50%"}
    labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }>
              {channelData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              
              </Pie>
              <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend/>

    </PieChart>

    </ResponsiveContainer>

    </div>
      
    </motion.div>
  )
}

export default ChannelPerformance
