// NPM Packages
import { useState } from "react";
// Project Files
import VideoModal from "components/VideoModal";
import Modal from "components/Modal";
import Play from "assets/Play.png";
import AllMoviesItems from "components/AllMoviesItems";
import RomanticMoviesItems from "components/RomanticMoviesItems";
import DocumentaryMoviesItems from "components/DocumentaryMoviesItems";
import TVShowItems from "components/TVShowItems";
import Search from "components/Search";

export default function UserScreen({ videos, series }) {
  // Local state
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState("");
  const [find, setFind] = useState([]);
  // Methods
  function onProject(item) {
    setModal(<VideoModal video={item} />);
  }
  function onChange(event) {
    setSearch(event.target.value);
    const find = videos.filter((item) => {
      return item.title.includes(search);
    });
    setFind(find);
  }

  // Components
  const homeBackground = videos
    .filter((item) => item.id === "XQKHhb0q6XRHBi8IRGRN")
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
      <Search search={search} onChange={onChange} />
        <div className="all-categories">
          {find && <AllMoviesItems videos={find} onProject={onProject} />}
          <AllMoviesItems videos={videos} onProject={onProject} />
          <RomanticMoviesItems videos={videos} onProject={onProject} />
          <DocumentaryMoviesItems videos={videos} onProject={onProject} />
          <TVShowItems series={series} onProject={onProject} />
        </div>
        
      </div>
      <Modal state={[modal, setModal]} />
    </div>
  );
}
