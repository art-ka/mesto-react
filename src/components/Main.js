import React from 'react';
import editbutton from '../images/edit.svg';
import addbutton from '../images/add-buton.svg';
import popupclose from '../images/Close Icon.svg';
import api from '../utils/api';

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

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
                        console.log(err); // выведем ошибку в консоль
                    })
                    
            }, [])
        

        React.useEffect(() => {
            api.takeUserInfo()
                .then((data) => {
                    setUserName(data.name)
                    setUserDescription(data.about);
                    setUserAvatar(data.avatar);
                })
                .catch((err) => {
                    console.log(err); // выведем ошибку в консоль
                })
        });

        return (
            <main className="content">
                <section className="profile">
                    <div className="profile__user" onClick={props.onEditAvatar}>
                        <img src={userAvatar} alt="Аватарка пользователя" className="profile__avatar" />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile} >
                            <img className="profile__edit-button-image" src={editbutton} alt="Редактировать" />
                        </button>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
                        <img className="profile__add-button-image" src={addbutton} alt="Добавить фото" />
                    </button>
                </section>

                <section className="elements">
                    <ul className="element">
                    {cards.map((item) => {
                    return (
                <li className="element__cards" key={item.id}>
                    <img className="element__image" src={item.src} />
                    <div className="element__info">
        <h2 className="element__title">{item.name}</h2>
                        <button className="element__like-button" type="button">
                            <img className="element__like-image" src={popupclose} alt="Поставить лайк" />
                        </button>
                        <div className="element__likes">{item.like}</div>
                        <button className="element__delete-button" type="button"></button>
                    </div>
                </li>
            )
}
                )}
                    </ul>
                </section>

                
            </main>
        );
    }

export default Main;
