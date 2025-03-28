import { useState } from "react";

interface LoginProps {
  onSwitch: () => void;
}

const Login = ({ onSwitch }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login Data:", { email, password });
    alert("Login Successful (Mock)");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <button onClick={onSwitch}>Register</button>
      </p>
    </div>
  );
};

export default Login;
