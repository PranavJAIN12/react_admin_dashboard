import Header from "../components/Header"
import { motion } from "framer-motion"
import Stats from "../components/Stats"
import { Box, GitGraphIcon, User, Zap } from "lucide-react"
import SalesOverviewChart from "../components/overview/SalesOverviewChart"
import CategoryDistribution from "../components/overview/CategoryDistribution"
import SalesByChannel from "../components/overview/SalesByChannel"


const Overview = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview"/>
      <main className="max max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
        <motion.div
        className="flex flex-row w-max p-6 gap-8 mb-8"
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}>
        <Stats name="Total Sales" icon={Zap} value="$12222" color='#6366f2'/>
        <Stats name="New Sales" icon={User} value="$12222" color='#6366f2'/>
        <Stats name="Total Sales" icon={Box} value="$12222" color='#6366f2'/>
        <Stats name="Total Sales" icon={GitGraphIcon} value="$12222" color='#6366f2'/>

        </motion.div>


      {/* CHARTS*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <SalesOverviewChart />
      <CategoryDistribution />
      <SalesByChannel />


      </div>
      </main>
    </div>
  )
}

export default Overview
