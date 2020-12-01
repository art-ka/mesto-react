import React from 'react';
import '../index.css';
import popupclose from '../images/Close Icon.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';


function App() {
    return (
        <div className="page">
            <div className="page__content">
                <Header />
                <div className="main">
                    <Main />
                    <Footer />
                </div>
            </div>

            <>
                <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить" />
                <PopupWithForm name="add" title="Новое место" button="Создать" />
                <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" />
                <PopupWithForm name="delete" title="Вы уверены?" button="Да" />
            </>

            <section className="popup popup_type_img">
                <div className="popup__container-img">
                    <button className="popup__close popup__close_type_img" type="button">
                        <img className="popup__close-image" src={popupclose}
                            alt="Закрыть окно просмотра изображения" />
                    </button>
                    <img className="popup__image" src="#" />
                    <h3 className="popup__caption"></h3>
                </div>
            </section>

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
