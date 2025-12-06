import { User as UserIcon, Mail, FileText, Home } from "lucide-react";

export default function UserPage({ onNavigate, user }) {
  const defaultUser = {
    name: "XYZ",
    email: "xyz.xy@example.com",
  };

  const displayUser = user || defaultUser;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12">
            <div className="flex items-center gap-4">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center">
                <UserIcon className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-white">
                <h1 className="text-3xl font-bold">{displayUser.name}</h1>
                <p className="text-blue-100 mt-1">Student Portal</p>
              </div>
            </div>
          </div>

          {/* Body Section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Profile Information
            </h2>

            <div className="space-y-4 mb-8">
              {/* Name */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <UserIcon className="h-5 w-5 text-gray-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Full Name</p>
                  <p className="text-base text-gray-900 mt-1">
                    {displayUser.name}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Mail className="h-5 w-5 text-gray-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Email Address
                  </p>
                  <p className="text-base text-gray-900 mt-1">
                    {displayUser.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Admission Form */}
                <button
                  onClick={() => onNavigate("admission")}
                  className="flex items-center gap-3 p-4 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      Admission Form
                    </p>
                    <p className="text-sm text-gray-600">Apply for admission</p>
                  </div>
                </button>

                {/* Back to Home */}
                <button
                  onClick={() => onNavigate("landing")}
                  className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-gray-200 transition-colors">
                    <Home className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Back to Home</p>
                    <p className="text-sm text-gray-600">Return to homepage</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
