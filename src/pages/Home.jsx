// NPM Packages
import { useCallback, useEffect } from "react";
import { getCollection } from "scripts/fireStore";

// Project files
import { useAuth } from "state/AuthProvider";
import { useStreaming } from "state/StreamingProvider";
import AdminScreen from "screens/AdminScreen";
import UserScreen from "screens/UserScreen";

export default function Home() {
  // Global state
  const { user } = useAuth();
  const { videos } = useStreaming();
  const { dispatch } = useStreaming();

  // Local state
  const path = "videos";

  // Methods
  const fetchData = useCallback(
    async (path) => {
      const videos = await getCollection(path);
      dispatch({ type: "SET_VIDEOS", payload: videos });
    },
    [dispatch]
  );

  useEffect(() => fetchData(path), [fetchData]);

  return (
    <div id="home-page">
      {user.isContentManager && <AdminScreen videos={videos} />}
      {user.isContentManager === false && <UserScreen videos={videos} />}
    </div>
  );
}
