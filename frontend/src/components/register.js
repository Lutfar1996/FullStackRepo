// src/components/Register.js
import { useState } from "react";

const apiUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001"; // default to localhost if undefined
console.log(apiUrl);

if (!apiUrl) {
  console.error("Backend URL is not set.");
  return;
}

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optionally, check if the email is already in use
    if (email === "test@example.com") {
      // Simulated check
      alert("Email is already registered!");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log(data);
      alert(`User registered successfully! ID: ${data.user.id}`);
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
