//NPM packages
import { useHistory } from "react-router";
// Project files
import { useAuth } from "state/AuthProvider";
import Logo from "assets/logo.png";
import Search from "./Search";

export default function NavigationUser() {
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
    <div className="nav-list">
      <ul className="ul-flex">
        <li className="logo">
          <img src={Logo} alt="netflix logo" />
        </li>
        <li>
          <a href="#banner">Home</a>
        </li>
        <li>
          <a href="#movies-carousel">Movies</a>
        </li>
        <li>
          <a href="#scroll">Documentaries</a>
        </li>
        <li>
          <a href="#series">Series</a>
        </li>
        <li>
          <a href="#top10">Top 10 in Sweden</a>
        </li>
        <li>
          <Search />
        </li>
        <li className="logout">
          <button onClick={onLogout}>Sign out</button>
        </li>
      </ul>
    </div>
  );
}
