// NPM Packages
import { useNavigate } from "react-router";

// Project files
import { useAuth } from "state/AuthProvider";

export default function Navigation() {
  // Global state
  const { isLogged, setUser, setIsLogged } = useAuth();
  const navigation = useNavigate();
  // Methods
  function onLogout() {
    localStorage.setItem("uid", "");
    setUser({});
    setIsLogged(false);
    navigation("/");
  }

  return (
    <>
      {isLogged && (
        <nav className="navigation">
          <button onClick={onLogout}>Logout</button>
        </nav>
      )}
    </>
  );
}