import path from '../../images/soccer-ball.svg';
import { Link } from 'react-router-dom';
import { TEAMS } from '../../utils/routesMap';
import './Card.css';

function Card({ id, title, country, image }) {
  return (
    <li className="card cards__item ">
      <Link to={TEAMS} className="card__link">
        <>
          <div className="card__info">
            <h2 className="card__title">{title}</h2>
            <span className="card__subtitle">{country.name}</span>
          </div>
          <div
            className="card__image"
            style={{
              backgroundImage: image ? `url(${image}` : `url(${path})`,
            }}
          ></div>
        </>
      </Link>
    </li>
  );
}

export default Card;
