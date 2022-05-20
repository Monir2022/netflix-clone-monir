// NPM Packages
import { useState } from "react";
// Project Files
import VideoModal from "components/VideoModal";
import Modal from "components/Modal";
import Play from "assets/Play.png";
import AllMoviesItems from "components/AllMoviesItems";
import MoviesItems from "components/MoviesItems";
import DocumentaryItems from "components/DocumentaryItems";
import SeriesItems from "components/SeriesItems";
import { useSearch } from "state/SearchProvider";

export default function UserScreen({ videos, series }) {
  // Local state
  const [modal, setModal] = useState(null);
  const { find } = useSearch();
  // Methods
  function onProject(item) {
    setModal(<VideoModal video={item} />);
  }

  // Components
  const homeBackground = videos
    .filter((item) => item.id === "ED58BZPTP2REGxjSAsz5")
    .map((item) => (
      <header id="banner">
        <div className="hero">
          <img src={item.imageURL} alt="Video thumbnail" />
        </div>
        <div id="banner-info">
          <h1>{item.title}</h1>
          <h3>#1 in Movies Today</h3>
          <p>{item.description}</p>
          <img src={Play} alt="play button" onClick={() => onProject(item)} />
        </div>
      </header>
    ));
  return (
    <div id="user-home">
      {homeBackground}
      <div className="home-page-content">
        <div className="all-categories">
          {find && <AllMoviesItems videos={find} onProject={onProject} />}
          <MoviesItems videos={videos} onProject={onProject} />
          <DocumentaryItems videos={videos} onProject={onProject} />
          <SeriesItems series={series} onProject={onProject} />
        </div>
      </div>
      <Modal state={[modal, setModal]} />
    </div>
  );
}
