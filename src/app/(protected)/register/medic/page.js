"use client";

import ProtectedRoute from "../../../../components/ProtectedRoute";

const MedicRegisterPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Register as a Medic</h1>
      </div>
    </ProtectedRoute>
  );
};

export default MedicRegisterPage;
