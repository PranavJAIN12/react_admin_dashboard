import Header from "../components/Header"
import { motion } from "framer-motion"
import Stats from "../components/Stats"
import { Box, GitGraphIcon, User, Zap } from "lucide-react"
import SalesOverviewChart from "../components/Sales/SalesOverviewChart"
import SalesByCategory from "../components/Sales/SalesByCategory"
import DailySalesTrend from "../components/Sales/DailySalesTrend"


const Sales = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
    <Header title = "Sales"/>
    <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div className="w-full p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>

<div className="flex flex-row gap-6 m-1 p-1">
          <Stats name="Total Sales" icon={Zap} value="$12222" color="#6366f2" />
          <Stats name="New Sales" icon={User} value="$12222" color="#6366f2" />
          <Stats name="Total Sales" icon={Box} value="$12222" color="#6366f2" />
          <Stats name="Total Sales" icon={GitGraphIcon} value="$12222" color="#6366f2" />
        </div>
        <SalesOverviewChart/>
        <div className="flex mt-5 gap-8">
            <SalesByCategory/>
            <DailySalesTrend/>
        </div>

        </motion.div>
    </main>
      
    </div>
  )
}

export default Sales
