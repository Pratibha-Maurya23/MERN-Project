import { BookOpen, Users, Award, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            ABC College Admission Portal
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Your gateway to excellence. Join a community of learners dedicated
            to shaping the future through knowledge and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate("admission")}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Apply for Admission
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={() => onNavigate("login")}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all border-2 border-blue-600"
            >
              Login to Portal
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Choose ABC College?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Academic Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              World-class faculty and cutting-edge curriculum designed to
              prepare you for success in your chosen field.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Vibrant Community
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Join a diverse community of passionate learners and build lifelong
              connections beyond the classroom.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-7 w-7 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Career Success
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Industry partnerships and dedicated placement support to help you
              launch a successful career.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards a brighter future. Apply now!
          </p>

          <button
            onClick={() => onNavigate("admission")}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
          >
            Submit Application
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
