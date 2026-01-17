import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    nav("/dashboard");
  };

  return (
    <div className="center">
      <div className="card">
        <h2>Login</h2>

        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

        <button onClick={login}>Login</button>
        <div className="link" onClick={() => nav("/signup")}>Create account</div>
      </div>
    </div>
  );
}
