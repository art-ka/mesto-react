import React from 'react';
import likebutton from '../images/heart.svg';

function Card(card) {
    return (
        <li className="element__cards" key={card.id}>
                    <img className="element__image" src={card.src} />
                    <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
                        <button className="element__like-button" type="button">
                            <img className="element__like-image" src={likebutton} alt="Поставить лайк" />
                        </button>
                        <div className="element__likes">{card.like}</div>
                        <button className="element__delete-button" type="button"></button>
                    </div>
                </li>
    );
}

export default Card;