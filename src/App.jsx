// NPM Packages
import { useCallback, useEffect, useState } from "react";
import { getDocument } from "scripts/fireStore";
import {Route, Routes} from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import Browser from "components/Browser";

export default function App() {
  // Global state
  const { isLogged, setUser, setIsLogged } = useAuth();

  // Local state
  const [status, setStatus] = useState(0);

  // Methods
  const fetchUser = (path)=>{
    const uid = localStorage.getItem("uid");
      if (uid) {
        const user = getDocument(path, uid);
        setUser(user);
        setIsLogged(true);
      }
      setStatus(1);
      
  }
   
      
  
  useEffect(() => fetchUser("users"), [fetchUser]);

  return (
    <div className="App">
      {status === 0 && <p>Loading</p>}
      {status === 1 && <Browser isLogged={isLogged} />}
    </div>
  );
}