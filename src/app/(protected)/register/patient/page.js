"use client";

import ProtectedRoute from "../../../../components/ProtectedRoute";

const PatientRegisterPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Register as a Patient</h1>
        {/* Registration form here */}
      </div>
    </ProtectedRoute>
  );
};

export default PatientRegisterPage;
