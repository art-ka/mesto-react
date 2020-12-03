import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState("");

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


    return (
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
                <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
                    <>
                        <input type="text" id="name-input" value="" name="fullname" className="popup__field popup__field_input_name" required minLength="2" maxLength="40" />
                        <span id="name-input-error" className="popup__field-error" />
                        <input type="text" id="job-input" value="" name="job" className="popup__field popup__field_input_job"
                            required minLength="2" maxLength="200" />
                        <span id="job-input-error" className="popup__field-error" />
                    </>
                </PopupWithForm >
            ) : ("")
            }

            {isAddPlacePopupOpen ? (
                <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
                    <>
                        <input type="text" id="title-input" placeholder="Название" value="" name="title"
                            className="popup__field popup__field_input_title" required minLength="2" maxLength="30" />
                        <span id="title-input-error" className="popup__field-error" />
                        <input type="url" id="url-input" placeholder="Ссылка на картинку" value="" name="picture"
                            className="popup__field popup__field_input_url" required />
                        <span id="url-input-error" className="popup__field-error" />
                    </>
                </PopupWithForm >
            ) : ("")
            }

            {isEditAvatarPopupOpen ? (
                <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} >
                    <>
                        <input type="url" id="url-input" value="" name="avatar"
                            className="popup__field popup__field_input_avatar" required />
                        <span id="url-input-error" className="popup__field-error" />
                    </>
                </PopupWithForm >
            ) : ("")
            }

            {/* <PopupWithForm name="delete" title="Вы уверены?" button="Да" onClose={closeAllPopups} /> */}

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />


        </div>
    );
}

export default App;
