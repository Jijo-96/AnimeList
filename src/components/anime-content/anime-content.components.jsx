import "./anime-content.styles.scss";

import AnimeCard from "../anime-cards/anime-card.components";

const AnimeContent = ({ list, searchQuery }) => {
  return (
    <div>
      <h2>Anime</h2>
      <div className="anime-content">
        {list.map((animeList) => (
          <AnimeCard key={animeList.mal_id} animeList={animeList} />
        ))}
      </div>
    </div>
  );
};

export default AnimeContent;
