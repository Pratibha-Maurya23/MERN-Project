import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Target } from 'lucide-react';

export const Home = () => {

  const sports = ['Football', 'Cricket', 'Basketball', 'Badminton', 'Tennis', 'Volleyball'];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Revolution', 'Community', 'Excellence', 'Passion'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (<div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Krida Kaushal
            </h1>
            <div className="h-20 mb-8">
              <motion.p
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-light"
              >
                Connecting players and organizers for a sporting{' '}
                <span className="font-bold">{words[currentWordIndex]}</span>
              </motion.p>
            </div>
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition"
              >
                View Upcoming Events
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg">
              Your gateway to organized sports events and competitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Quality Events',
                description: 'Access professionally organized sports events across multiple disciplines',
                color: 'orange',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Connect with fellow athletes and sports enthusiasts in your area',
                color: 'blue',
              },
              {
                icon: Calendar,
                title: 'Easy Management',
                description: 'Simple enrollment process and event tracking for players and organizers',
                color: 'green',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-md p-8 text-center"
              >
                <div className={`inline-block p-4 rounded-full bg-${feature.color}-100 mb-4`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Sports</h2>
            <p className="text-gray-600 text-lg">
              Discover events in your favorite sports
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sports.map((sport, index) => (
              <motion.div
                key={sport}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-6 text-center text-white font-semibold cursor-pointer shadow-md hover:shadow-xl transition"
              >
                <Target className="h-8 w-8 mx-auto mb-2" />
                {sport}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Join thousands of players and organizers in creating memorable sporting experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
                >
                  Sign Up Now
                </motion.button>
              </Link>
              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
                >
                  Browse Events
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);
};
