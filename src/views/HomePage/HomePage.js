import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading/PageHeading';
import fetchMovies from '../../components/Services/ApiService';
import styles from '../HomePage/HomePage.module.css';
import defaultImage from '../../components/image/image.png';

function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies
      .fetchPopularMovies()
      .then(results => setMovies(results))
      .catch(error => error);
  }, []);
  return (
    <>
      <PageHeading />
      <ul className={styles.items}>
        {movies &&
          movies.map(({ id, title, poster_path, vote_average }) => (
            <li key={id} className={styles.links}>
              <NavLink
                className={styles.link}
                to={{
                  pathname: `/movies/${id}`,
                  state: { ...location.state },
                }}
              >
                <img
                  className={styles.image}
                  src={
                    poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : defaultImage
                  }
                  alt={title}
                />
                <div className={styles.text}>
                  <span>{title}</span>
                  <span>{vote_average}</span>
                </div>
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}

HomePage.propTypes = {
  id: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  vote_average: PropTypes.string,
};

export default HomePage;
