import { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/header/header.component";
import AnimeSearch from "./components/anime-search/anime-search.components";
import AnimeContent from "./components/anime-content/anime-content.components";

// https://jikan.docs.apiary.io/#

function App() {
  const [list, setList] = useState([]);
  const [topList, setTopList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const TopAnimeList = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());
    // console.log(data.top.slice(0, 5));
    setTopList(data.top.slice(0, 5));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(searchQuery);
    AnimeList(searchQuery);
  };

  const AnimeList = async (query) => {
    const data = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=16`
    ).then((res) => res.json());
    console.log(data.results);
    setList(data.results);
  };

  useEffect(() => {
    TopAnimeList();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AnimeSearch
          key={Math.floor(Math.random)}
          topList={topList}
          handleSearch={handleSearch}
          setSearchQuery={setSearchQuery}
        />
        <AnimeContent list={list} searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default App;
