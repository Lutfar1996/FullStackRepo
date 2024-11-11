import { useState } from "react";
import axios from "axios"; // Import axios

const apiUrl = process.env.REACT_APP_BACKEND_URL;

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
      const response = await axios.post(`${apiUrl}/api/auth/register`, {
        email,
        password,
      });

      if (response.status === 200) {
        // Axios automatically checks status code
        const data = response.data; // Axios parses the response JSON automatically
        if (data.user && data.user.id) {
          console.log(data);
          alert(`User registered successfully! ID: ${data.user.id}`);
        } else {
          alert("Unexpected response from the server.");
        }
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Failed to reach backend.");
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
