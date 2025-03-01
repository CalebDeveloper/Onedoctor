"use client";

import { useState } from "react";
import { registerWithEmail } from "../../lib/auth";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    await registerWithEmail(email, password);
    router.push("/protected/register");
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
