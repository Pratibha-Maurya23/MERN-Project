
export default function UserDashboard({ student }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {student.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold">Admission Details</h3>
          <p>Admission No: {student.admissionNo}</p>
          <p>Course: {student.course}</p>
          <p>DOB: {student.dob}</p>
          <p>Year: {student.year}</p>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold">Profile</h3>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Address: {student.address}</p>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded">
        <h3 className="font-semibold">Next Year Admission</h3>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
          Apply for Next Year
        </button>
      </div>
    </div>
  );
}
