import React from 'react';
import editbutton from '../images/edit.svg';
import addbutton from '../images/add-buton.svg';
import Card from './Card';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {
    const currentUserContext = React.useContext(CurrentUserContext);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                const cards = data.map((item) => {
                    return {
                        src: item.link,
                        id: item._id,
                        name: item.name,
                        like: item.likes.length,
                    }
                })
                setCards(cards);
            })
            .catch((err) => {
                console.log(err); 
            })

    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__user" onClick={props.onEditAvatar}>
                    <img src={currentUserContext.avatar} alt="Аватарка пользователя" className="profile__avatar" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUserContext.name}</h1>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile} >
                        <img className="profile__edit-button-image" src={editbutton} alt="Редактировать" />
                    </button>
                    <p className="profile__subtitle">{currentUserContext.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
                    <img className="profile__add-button-image" src={addbutton} alt="Добавить фото" />
                </button>
            </section>

            <section className="elements">
                <ul className="element">
                    {cards.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                src={item.src}
                                name={item.name}
                                like={item.like} 
                                onCardClick={props.onCardClick}  />
                        )
                    }
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;
