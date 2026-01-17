import { auth } from "../firebase";

export default function Profile() {
  const user = auth.currentUser;

  return (
    <div className="center">
      <div className="card">
        <h2>Profile</h2>
        <p><b>Email:</b> {user.email}</p>
        <p><b>UID:</b> {user.uid}</p>
      </div>
    </div>
  );
}
