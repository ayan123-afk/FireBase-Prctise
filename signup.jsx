import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    nav("/dashboard");
  };

  return (
    <div className="center">
      <div className="card">
        <h2>Sign Up</h2>

        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

        <button onClick={signup}>Create Account</button>
        <div className="link" onClick={() => nav("/login")}>Already have an account?</div>
      </div>
    </div>
  );
}
