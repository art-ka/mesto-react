import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {

    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState("");
    const [cards, setCards] = React.useState([]);

    const [currentUser, setCurrentUser] = React.useState("");

    React.useEffect(() => {
        Promise.all([api.takeUserInfo()])
            .then(([userInfo]) => {
                setCurrentUser(userInfo);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    function handleEditProfileClick() {
        setisEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleCardClick(props) {
        setSelectedCard(props);
    }

    function closeAllPopups() {
        setisEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(false);
    }

    function handleUpdateUser(data) {
        api.setUserInfo(data)
            .then((userInfo) => {
                setCurrentUser(userInfo)
            })
        closeAllPopups();
    }

    function handleUpdateAvatar(avatarInput) {
        api.changeAvatar(avatarInput)
            .then((avatar) => {
                setCurrentUser(avatar)
            })
        closeAllPopups();
    }

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
        const isLiked = card.likes.some(i => i._id === currentUser._id);

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

    function handleAddPlaceSubmit(dataCard) {
        api.addCard(dataCard)
            .then((newCard) => {
                setCards([newCard, ...cards]);
            })
            .catch((err) => {
                console.log(err);
            })
        closeAllPopups();
    }



    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__content">
                    <Header />
                    <div className="main">
                        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                            onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} 
                            onCardDelete={handleCardDelete} onCardLike={handleCardLike} 
                            cards={cards} />
                        <Footer />
                    </div>
                </div>

                {isEditProfilePopupOpen ? (
                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser} />
                ) : ("")
                }

                {isAddPlacePopupOpen ? (
                    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit} />
                ) : ("")
                }

                {isEditAvatarPopupOpen ? (
                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar} />
                ) : ("")
                }

                {/* <PopupWithForm name="delete" title="Вы уверены?" button="Да" onClose={closeAllPopups} /> */}

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />

            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
