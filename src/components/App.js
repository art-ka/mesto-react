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
    const [selectedCard, setSelectedCard] = React.useState({ isImgPopupOpen: false, name: '', link: '' });
    const [cards, setCards] = React.useState([]);

    const [currentUser, setCurrentUser] = React.useState("");

    React.useEffect(() => {
        api.takeUserInfo()
            .then((userInfo) => {
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
        setSelectedCard({
            name: props.name, 
            link: props.link,
            isImgPopupOpen: true });
    }

    function closeAllPopups() {
        setisEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({ isImgPopupOpen: false, name: '', link: '' });
    }

    function handleUpdateUser(data) {
        api.setUserInfo(data)
            .then((userInfo) => {
                setCurrentUser(userInfo)
            })
            .catch((err) => {
                console.log(err);
            })
        closeAllPopups();
    }

    function handleUpdateAvatar(avatarInput) {
        api.changeAvatar(avatarInput)
            .then((avatar) => {
                setCurrentUser(avatar)
            })
            .catch((err) => {
                console.log(err);
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
        })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then(() => {
            setCards(cards.filter((c) =>
                c._id !== card._id));
        })
            .catch((err) => {
                console.log(err);
            })
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

                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser} />

                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit} />

                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar} />

                {/* <PopupWithForm name="delete" title="Вы уверены?" button="Да" onClose={closeAllPopups} /> */}

                <ImagePopup isOpen={selectedCard.isImgPopupOpen} card={selectedCard} onClose={closeAllPopups} />

            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
