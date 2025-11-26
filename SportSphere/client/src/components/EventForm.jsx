import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { api } from "../lib/api";
import { useAuth } from "../contexts/AuthContext";

const sportTypes = [
  "Football","Cricket","Basketball","Badminton",
  "Tennis","Volleyball","Table Tennis","Swimming",
  "Athletics","Other"
];

export const EventForm = ({ isOpen, onClose, onSuccess, eventToEdit }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: eventToEdit?.title || "",
    sport_type: eventToEdit?.sport_type || "",
    description: eventToEdit?.description || "",
    venue: eventToEdit?.venue || "",
    event_date: eventToEdit?.event_date
      ? new Date(eventToEdit.event_date).toISOString().slice(0, 16)
      : "",
    image_url: eventToEdit?.image_url || "",
    max_participants: eventToEdit?.max_participants || 50,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    try {
      if (eventToEdit) {
        const { error } = await api
          .from("events")
          .update({
            ...formData,
            event_date: new Date(formData.event_date).toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("id", eventToEdit.id);

        if (error) throw error;
      } else {
        const { error } = await api.from("events").insert({
          ...formData,
          organizer_id: user.id,
          event_date: new Date(formData.event_date).toISOString(),
        });

        if (error) throw error;
      }

      onSuccess();
      onClose();
    } catch (err) {
      console.error("Error saving event:", err);
      alert("Failed to save event.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div onClick={onClose} className="absolute inset-0 bg-black bg-opacity-50" />
          <motion.div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6">
            <h2 className="text-2xl font-bold mb-4">
              {eventToEdit ? "Edit Event" : "Create Event"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                placeholder="Event Name"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2 border rounded"
              />
              <select
                value={formData.sport_type}
                onChange={(e) => setFormData({ ...formData, sport_type: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Sport</option>
                {sportTypes.map((s) => <option key={s}>{s}</option>)}
              </select>

              <button className="bg-orange-500 text-white p-2 rounded w-full">
                {loading ? "Saving..." : "Save"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
