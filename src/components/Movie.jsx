export const Movie = (props) => {
  const {
    Title: title,
    Year: year,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div className='card movie'>
      <div className='card-image'>
        {poster === 'N/A' ? (
          <img
            src={`https://via.placeholder.com/300x400?text=${title}`}
            alt={title}
          />
        ) : (
          <img
            className='card-img'
            src={poster}
            alt={title}
          />
        )}
        <span className='card-title'>{title}</span>
      </div>
      <div className='card-content'>
        <p>{type}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};
