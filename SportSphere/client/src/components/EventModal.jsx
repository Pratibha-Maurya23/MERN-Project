import { X, Calendar, MapPin, Users, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const EventModal = ({
  event,
  isOpen,
  onClose,
  onEnroll,
  isEnrolled = false,
  enrollmentCount = 0,
  isLoading = false,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
        <motion.div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6">
          <button onClick={onClose} className="absolute top-4 right-4">
            <X />
          </button>
          <h2 className="text-3xl font-bold">{event.title}</h2>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
