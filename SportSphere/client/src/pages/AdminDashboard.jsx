import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, TrendingUp } from 'lucide-react';
import { StatCard } from '../components/DashboardStats';
import { useAuth } from '../contexts/AuthContext';

export const AdminDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalEvents: 0,
    activeEvents: 0,
    totalEnrollments: 0,
    recentEnrollments: 0,
  });

  return (<div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Organizer Dashboard</h1>
          <p className="text-gray-600">Manage your events and track participation</p>
        </motion.div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading dashboard...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Events"
                value={stats.totalEvents}
                icon={Trophy}
                color="border-orange-500"
                index={0}
              />
              <StatCard
                title="Active Events"
                value={stats.activeEvents}
                icon={Calendar}
                color="border-blue-500"
                index={1}
              />
              <StatCard
                title="Total Enrollments"
                value={stats.totalEnrollments}
                icon={Users}
                color="border-green-500"
                index={2}
              />
              <StatCard
                title="Recent (7 days)"
                value={stats.recentEnrollments}
                icon={TrendingUp}
                color="border-purple-500"
                index={3}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <a
                    href="/admin/events"
                    className="block w-full px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-center font-semibold"
                  >
                    Manage Events
                  </a>
                  <a
                    href="/admin/enrollments"
                    className="block w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-center font-semibold"
                  >
                    View Enrollments
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Platform Overview</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Enrollment Rate</span>
                    <span className="font-semibold text-gray-800">
                      {stats.totalEvents > 0
                        ? Math.round((stats.totalEnrollments / stats.totalEvents) * 10) / 10
                        : 0}{' '}
                      per event
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Recent Activity</span>
                    <span className="font-semibold text-green-600">
                      {stats.recentEnrollments > 0 ? 'Active' : 'Low'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status</span>
                    <span className="font-semibold text-blue-600">
                      {stats.activeEvents > 0 ? 'Events Live' : 'No Active Events'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>);
};
