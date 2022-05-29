//NPM packages
import { useHistory } from "react-router";
// Project files
import { useAuth } from "state/AuthProvider";
import Logo from "assets/logo.png";


export default function NavigationContentManager() {
 //Global state
  const { setUser, setIsLogged } = useAuth();
  const history = useHistory();

  // Methods
  function onLogout() {
    localStorage.setItem("uid", "");
    setUser({});
    setIsLogged(false);
    history.push("/");
  }
  return (
    <div className="nav-list_admin">
      <ul className="ul-flex">
        <li className="logo">
          <img src={Logo} alt="netflix logo" />
        </li>
        <li className="logout">
          <button onClick={onLogout}>Sign out</button>
        </li>
      </ul>
    </div>
  );
}
