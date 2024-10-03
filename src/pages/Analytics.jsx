import Header from "../components/Header"
import { motion } from "framer-motion"
import Stats from "../components/Stats"
import { User2, UserCheck, UsersIcon, UserX } from "lucide-react"

import ChannelPerformance from "../components/Analytics/ChannelPerformance"
import Aipowered from "../components/Analytics/Aipowered"
import Revenuevstarget from "../components/Analytics/Revenuevstarget"


const Analytics = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
    <Header title="Analytics"/>
    <motion.div className="w-full p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <div className="flex gap-5 flex-row">
        <Stats
            name="Total Users"
            icon={UsersIcon}
            value={1234}
            color="#6366F1"
          />
          <Stats
            name="New Users Today"
            icon={User2}
            value={1234}
            color="#10B981"
          />
          <Stats
            name="Active Users"
            icon={UserCheck}
            value={1234}
            color="#F59E0B"
          />
          <Stats
            name="Churn Rate"
            icon={UserX}
            value={1234}
            color="#EF4444"
          />
        </div>
        <div>
            <Revenuevstarget/>
            <ChannelPerformance/>
            <Aipowered/>
        </div>

    </motion.div>
   
      
    </div>
  )
}

export default Analytics
