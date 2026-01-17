import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();

  return (
    <div className="center">
      <div className="card">
        <div className="dashboard-title">Dashboard 🚀</div>
        <p>{auth.currentUser.email}</p>

        <button className="small-btn" onClick={() => nav("/profile")}>
          View Profile
        </button>

        <button className="logout" onClick={() => {
          signOut(auth);
          nav("/login");
        }}>
          Logout
        </button>
      </div>
    </div>
  );
}
