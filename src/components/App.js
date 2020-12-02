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
    const [selectedCard, setSelectedCard] = React.useState(false);

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

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

            
        </div>
    );
}

export default App;
