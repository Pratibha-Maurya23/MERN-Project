import { useState } from "react";
import { FileText, Upload, CheckCircle } from "lucide-react";

export default function AdmissionFormPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    course: "",
    branch:"",
    document: null,
  });
  
  const courses = [
    "BTech","MCA","MBA",
  ]

   const branchs = [
    "Computer Science and Engineering",
    "Computer Science and Engineering AI/ML",
    "Data Science",
    "ECE",
    "Mechenical",
  ];

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
  const file = e.target.files?.[0] || null;

  setFormData({
    ...formData,
    document: file,
  });

  setFileName(file ? file.name : "");
};

  const generateAdmissionNo = () =>
  "ADM" + new Date().getFullYear() + Math.floor(1000 + Math.random() * 9000);

const generatePassword = () =>
  Math.random().toString(36).slice(-8);

const validateForm = () => {
  const newErrors = {};

  if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
  if (!formData.email.trim()) newErrors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    newErrors.email = "Please enter a valid email address";

  if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
  else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone))
    newErrors.phone = "Please enter a valid phone number";

  if (!formData.address.trim()) newErrors.address = "Address is required";
  if (!formData.dateOfBirth)
    newErrors.dateOfBirth = "Date of birth is required";
  if (!formData.course) newErrors.course = "Please select a course";
  if (!formData.document) newErrors.document = "Please upload a document";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async(e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const admissionNo = generateAdmissionNo();
  const password = generatePassword();

  const studentData = {
    admissionNo,
    password,
    name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    dob: formData.dateOfBirth,
    course: formData.course,
    document: formData.document?.name || "",
    year: new Date().getFullYear(),
  };

  try {
    const res = await fetch("http://16.171.22.220:8000/admission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });

    const data = await res.json();

    // backend sends admissionNo + password
    setSubmitted({
      admissionNo: data.admissionNo,
      password: data.password,
    });
  } catch (err) {
    alert("Admission failed ❌");
  }
};



if (submitted) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-4" />

        <h2 className="text-2xl font-bold mb-4">
          Admission Successful ✅
        </h2>

        <p className="text-gray-600 mb-6">
          Save these credentials carefully
        </p>

        <div className="bg-gray-100 p-4 rounded-lg text-left mb-6">
          <p>
            <strong>Admission No:</strong>{" "}
            {submitted.admissionNo}
          </p>
          <p>
            <strong>Password:</strong>{" "}
            {submitted.password}
          </p>
        </div>

        <button
          onClick={() => (window.location.href = "/login")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Admission Application
            </h2>
            <p className="text-gray-600 mt-2">
              Please fill out all required fields
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className={`block w-full px-4 py-3 border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500`}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`block w-full px-4 py-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`block w-full px-4 py-3 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className={`block w-full px-4 py-3 border ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
                placeholder="123 Main Street, City, State"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address}</p>
              )}
            </div>

            {/* DOB + Course */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* DOB */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({ ...formData, dateOfBirth: e.target.value })
                  }
                  className={`block w-full px-4 py-3 border ${
                    errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                />
                {errors.dateOfBirth && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>

              {/* Course */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Selection <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.target.value })
                  }
                  className={`block w-full px-4 py-3 border ${
                    errors.course ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course}>{course}</option>
                  ))}
                </select>
                {errors.course && (
                  <p className="mt-1 text-sm text-red-600">{errors.course}</p>
                )}
              </div>
              {/* branchs */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Branch Selection <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.branch}
                  onChange={(e) =>
                    setFormData({ ...formData, branch: e.target.value })
                  }
                  className={`block w-full px-4 py-3 border ${
                    errors.course ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                >
                  <option value="">Select a Branch</option>
                  {branchs.map((branch) => (
                    <option key={branch}>{branch}</option>
                  ))}
                </select>
                {errors.branch && (
                  <p className="mt-1 text-sm text-red-600">{errors.branch}</p>
                )}
              </div>
            </div>

            {/* Document Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Document <span className="text-red-500">*</span>
              </label>

              <div
                className={`border-2 border-dashed ${
                  errors.document ? "border-red-500" : "border-gray-300"
                } rounded-lg p-6 text-center`}
              >
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />

                <label className="cursor-pointer">
                  <span className="text-blue-600 font-medium">
                    Click to upload
                  </span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>

                {fileName && <p className="mt-2 text-green-600">{fileName}</p>}
              </div>

              {errors.document && (
                <p className="text-sm text-red-600">{errors.document}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Submit Application
              </button>

              <button
                type="button"
                onClick={() => onNavigate("landing")}
                className="flex-1 bg-white text-gray-700 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
