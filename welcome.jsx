import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div className="center">
      <div className="card">
        <h2>Welcome 👋</h2>
        <p>React + Firebase Authentication App</p>

        <button onClick={() => nav("/login")}>Login</button>
        <button style={{ marginTop: "10px" }} onClick={() => nav("/signup")}>
          Create Account
        </button>
      </div>
    </div>
  );
}
