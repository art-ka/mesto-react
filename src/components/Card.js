import React from 'react';
import likebutton from '../images/heart.svg';

function Card(props) {

    function handleClick() {
        props.onCardClick(props);
    }

    return (
        <li className="element__cards" key={props.id}>
                    <img className="element__image" src={props.src} onClick={handleClick} />
                    <div className="element__info">
        <h2 className="element__title">{props.name}</h2>
                        <button className="element__like-button" type="button">
                            <img className="element__like-image" src={likebutton} alt="Поставить лайк" />
                        </button>
                        <div className="element__likes">{props.like}</div>
                        <button className="element__delete-button" type="button"></button>
                    </div>
                </li>
    );
}

export default Card;