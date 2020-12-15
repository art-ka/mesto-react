import React from 'react';
import editbutton from '../images/edit.svg';
import addbutton from '../images/add-buton.svg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__user" onClick={props.onEditAvatar}>
                    <img src={currentUser.avatar} alt="Аватарка пользователя" className="profile__avatar" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile} >
                        <img className="profile__edit-button-image" src={editbutton} alt="Редактировать" />
                    </button>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
                    <img className="profile__add-button-image" src={addbutton} alt="Добавить фото" />
                </button>
            </section>

            <section className="elements">
                <ul className="element">
                    {props.cards.map((card) => {
                        return (
                            <Card
                                key={card._id}
                                card={card}
                                onCardClick={props.onCardClick}
                                onCardLike={props.onCardLike} 
                                onCardDelete={props.onCardDelete} />
                        )
                    }
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;
