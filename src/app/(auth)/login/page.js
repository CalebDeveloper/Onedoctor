"use client";

import { useState } from "react";
import { loginWithEmail, loginWithGoogle, loginWithGithub } from "../../lib/auth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginWithEmail(email, password);
    router.push("/protected/register");
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <button onClick={loginWithGoogle}>Login with Google</button>
      <button onClick={loginWithGithub}>Login with GitHub</button>
    </div>
  );
};

export default LoginPage;
