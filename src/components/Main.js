import React from 'react';
import editbutton from '../images/edit.svg';
import addbutton from '../images/add-buton.svg';
import Card from './Card';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    function handleCardLike(card) {

        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {

            // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);

            // Обновляем стейт
            setCards(newCards);
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then(() => {
            setCards(cards.filter((c) =>
                c._id !== card._id));
    });
}

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
                    {cards.map((card) => {
                        return (
                            <Card
                                card={card}
                                onCardClick={props.onCardClick}
                                onCardLike={handleCardLike} 
                                onCardDelete={handleCardDelete} />
                        )
                    }
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;
