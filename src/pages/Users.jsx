import { motion } from "framer-motion";
import Header from "../components/Header";
import Stats from "../components/Stats";
import { Search, User2, UserCheck, UsersIcon, UserX } from "lucide-react";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import UserActivityHeatMap from "../components/Users/UserActivityHeatMap";
import { useState, useEffect } from "react";

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Customer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Moderator",
    status: "Active",
  },
];
const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(userData);

  useEffect(() => {
    const filtered = userData.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase().trim());
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <motion.div
        className="w-full p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row gap-6">
          <Stats
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <Stats
            name="New Users Today"
            icon={User2}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <Stats
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <Stats
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </div>

        <div className="border-b-2 bg-gray-800 border-gray-700 my-5">
        <div className="flex flex-row gap-6 mx-8 my-3 pt-5 justify-between">

          <h1 className="text-gray-100 font-semibold text-2xl">Users</h1>

          <div className="relative mb-4 ">
            <input
              type="text"
              placeholder="Search users..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
        </div>
          </div>

          {filteredData.length === 0 ? (
            <p className="text-gray-400">
              No users found matching your search.
            </p>
          ) : (
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700">
	<div className="overflow-x-auto">
		<table className="min-w-full divide-y divide-gray-700">
			<thead>
				<tr>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
						Name
					</th>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
						E-Mail
					</th>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
						Role
					</th>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
						Status
					</th>
				</tr>
			</thead>
			<tbody className="divide-y divide-gray-700">
				{filteredData.map((user) => (
					<tr
						key={user.id}
						className="hover:bg-gray-700 transition duration-300 ease-in-out"
					>
						<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
							{user.name}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
							{user.email}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
							{user.role}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
							{user.status}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
</div>

          )}
        </div>

        <div className="grid grid-cols-1 gap-5">
          <SalesOverviewChart />
          <UserActivityHeatMap />
        </div>
      </motion.div>
    </div>
  );
};

export default Users;
