//Project files
import { useAuth } from "state/AuthProvider";
import NavigationContentManager from "./NavigationContentManager";
import NavigationUser from "./NavigationUser";

export default function Navigation() {
  // Global state
  const { isLogged, user } = useAuth();

  return (
    <div>
      {isLogged && (
        <div id="nav">
          <nav className="navigation">
            {user.isContentManager ? (
              <NavigationContentManager />
            ) : (
              <NavigationUser />
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
