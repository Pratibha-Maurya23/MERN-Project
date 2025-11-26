import { Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

export const EventCard = ({ event, onClick, enrollmentCount = 0 }) => {
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border border-gray-100"
    >
      <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 relative">
        {event.image_url ? (
          <img src={event.image_url} alt={event.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-4xl font-bold">{event.sport_type}</span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-orange-600">
          {event.sport_type}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formatDate(event.event_date)}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Users className="h-4 w-4 mr-2" />
            <span>{enrollmentCount} / {event.max_participants} enrolled</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};
