"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // const handleLogin = () => {
  //   // Mock login logic
  //   if (username === "admin" && password === "password") {
  //     localStorage.setItem("isLoggedIn", "true");
  //     router.push("/");
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/user", {
        username,
        password,
      });
      const { access_token } = response.data;
      localStorage.setItem("token", access_token);
      router.push("/");
    } catch (err) {
      console.log("登录失败：用户名或密码错误", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
