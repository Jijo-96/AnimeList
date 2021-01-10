import "./anime-search.styles.scss";

function AnimeSearch({ topList, handleSearch, setSearchQuery, list }) {
  return (
    <div className="anime__search">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search for an anime"
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
      </form>
      <div className="top__anime">
        <h3>Top Anime</h3>
      </div>
      <div className="tags">
        {topList.map((anime) => (
          <a
            key={anime.mal_id}
            target="_blank"
            href={anime.url}
            rel="noreferrer"
          >
            {anime.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default AnimeSearch;
