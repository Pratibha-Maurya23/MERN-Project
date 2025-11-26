import { motion } from 'framer-motion';

export const StatCard = ({ title, value, icon: Icon, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${color}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
        </div>
        <div className={`p-4 rounded-full ${color.replace('border-', 'bg-').replace('500', '100')}`}>
          <Icon className={`h-8 w-8 ${color.replace('border-', 'text-')}`} />
        </div>
      </div>
    </motion.div>
  );
};
