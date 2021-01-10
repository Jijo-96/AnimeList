import "./anime-card.styles.scss";

const AnimeCard = ({ animeList }) => {
  return (
    <div className="card">
      <a href={animeList.url} rel="noreferrer">
        <img src={animeList.image_url} alt="Anime" />
        <h3>{animeList.title}</h3>
      </a>
    </div>
  );
};

export default AnimeCard;
