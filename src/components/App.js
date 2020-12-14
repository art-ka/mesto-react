import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {

    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState("");

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


    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
            <div className="page__content">
                <Header />
                <div className="main">
                    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
                    <Footer />
                </div>
            </div>

            {isEditProfilePopupOpen ? (
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} 
                onUpdateUser={handleUpdateUser} />
            ) : ("")
            }

            {isAddPlacePopupOpen ? (
                <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
                        <input type="text" id="title-input" placeholder="Название" value="" name="title"
                            className="popup__field popup__field_input_title" required minLength="2" maxLength="30" />
                        <span id="title-input-error" className="popup__field-error" />
                        <input type="url" id="url-input" placeholder="Ссылка на картинку" value="" name="picture"
                            className="popup__field popup__field_input_url" required />
                        <span id="url-input-error" className="popup__field-error" />
                </PopupWithForm >
            ) : ("")
            }

            {isEditAvatarPopupOpen ? (
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            ) : ("")
            }

            {/* <PopupWithForm name="delete" title="Вы уверены?" button="Да" onClose={closeAllPopups} /> */}

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
