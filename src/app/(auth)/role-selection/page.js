"use client";

import { useRouter } from "next/navigation";

const RoleSelectionPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <h1>Select Your Role</h1>
      <button onClick={() => router.push("/auth/signup?role=medic")}>Sign Up as Medic</button>
      <button onClick={() => router.push("/auth/signup?role=patient")}>Sign Up as Patient</button>
    </div>
  );
};

export default RoleSelectionPage;
