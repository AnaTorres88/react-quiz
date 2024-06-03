import { Outlet, useNavigate } from "react-router-dom";
import { doSignOut } from "./firebase/auth";
import { useAuth } from './auth/authContext';

import classes from "./Root.module.css";

export default function RootLayout() {
  const navigate = useNavigate();
  const {userLoggedIn} = useAuth();

  function handleSignOut() {
      doSignOut().then(() => {
        return navigate("/");
      }).catch(error => console.log(error));
  }

  return (
    <>
      <main className={classes.content}>
        {userLoggedIn && <a className = "logout" onClick={handleSignOut}>Logout</a>}
        {import.meta.env.VITE_API_KEY}
        <Outlet />
      </main>
    </>
  );
}
