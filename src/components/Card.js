import React from 'react';
import likebutton from '../images/heart.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `element__delete-button ${isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `element__like-image ${isLiked ? 'element__like-image-active' : 'element__like-image'}`
    );
    
    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        <li className="element__cards" key={props.card._id}>
            <img className="element__image" src={props.card.link} onClick={handleClick} alt={props.card.name} />
            <div className="element__info">
                <h2 className="element__title">{props.card.name}</h2>
                <button className="element__like-button" type="button" onClick={handleLikeClick}>
                    <img className={cardLikeButtonClassName} src={likebutton} alt="Поставить лайк" />
                </button>
                <div className="element__likes">{props.card.likes.length}</div>
                <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
            </div>
        </li>
    );
}

export default Card;