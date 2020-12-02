import React from 'react';
import '../index.css';
import popupclose from '../images/Close Icon.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
//import api from '../utils/api';


function App() {

    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    function handleEditProfileClick() {
        setisEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setisEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
    }


    return (
        <div className="page">
            <div className="page__content">
                <Header />
                <div className="main">
                    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick} />
                    <Footer />
                </div>
            </div>

            {isEditProfilePopupOpen ? (
                <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
            ) : ("")
            }

            {isAddPlacePopupOpen ? (
                <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
            ) : ("")
            }

            {isEditAvatarPopupOpen ? (
                <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
            ) : ("")
            }

            {/* <PopupWithForm name="delete" title="Вы уверены?" button="Да" onClose={closeAllPopups} /> */}

            <ImagePopup />

            <template id="elements">
                <li className="element__cards">
                    <img className="element__image" src="#" />
                    <div className="element__info">
                        <h2 className="element__title"></h2>
                        <button className="element__like-button" type="button">
                            <img className="element__like-image" src={popupclose} alt="Поставить лайк" />
                        </button>
                        <div className="element__likes"></div>
                        <button className="element__delete-button" type="button"></button>
                    </div>
                </li>
            </template>
        </div>
    );
}

export default App;
