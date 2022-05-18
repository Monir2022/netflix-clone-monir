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
import SearchView from "components/SearchView";

export default function UserScreen({ videos, series }) {
  // Local state
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState("");
  const [searchVid, setSearchVid] = useState([]);
  // Methods
  function onProject(item) { 
    setModal(<VideoModal video={item} />);
  }
  function onChange(event){
    setSearch(event.target.value)
    const searchVideo=videos.filter(item=>{
      return item.title.includes(search)
    })
    setSearchVid(searchVideo)
  }
  

  // Components
  const banner = videos
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
      {banner}
      <div className="home-page-content">
        <div className="all-categories">

          { searchVid && <AllMoviesItems videos={searchVid} onProject={onProject} /> }
          <AllMoviesItems videos={videos} onProject={onProject} />
          <RomanticMoviesItems videos={videos} onProject={onProject} />
          <DocumentaryMoviesItems videos={videos} onProject={onProject} />
          <TVShowItems series={series} onProject={onProject} />
        </div>
        <SearchView search= {search} onChange= {onChange}/>
        
        <input value={search} onChange= {onChange} />
        <button>Search</button>
        
        
      </div>
      <Modal state={[modal, setModal]} />
    </div>
  );
}
