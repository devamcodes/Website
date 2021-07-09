import React from "react";
import { Link } from "react-router-dom";

function CardItems(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure
            className="cards__item__pic_-wrap"
            data-category={props.label}
          >
            <img className="cards__item__img" src={props.src} alt={props.alt} />
          </figure>
          <div className="cards__item__info">
            <h5 className="card__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItems;