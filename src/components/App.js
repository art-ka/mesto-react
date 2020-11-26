import React from 'react';
import popupclose from '../images/Close Icon.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


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

            <section className="popup popup_type_edit">
                <div className="popup__container">
                    <button className="popup__close popup__close_type_editform" type="button">
                        <img className="popup__close-image" src={popupclose} alt="Закрыть форму редактирования" />
                    </button>
                    <div className="popup__content">
                        <h3 className="popup__title">Редактировать профиль</h3>
                        <form className="popup__form" name="edit-form">
                            <input type="text" id="name-input" value="" name="fullname"
                                className="popup__field popup__field_input_name" required minlength="2" maxlength="40" />
                            <span id="name-input-error" className="popup__field-error" />
                            <input type="text" id="job-input" value="" name="job" className="popup__field popup__field_input_job"
                                required minlength="2" maxlength="200" />
                            <span id="job-input-error" className="popup__field-error" />
                            <button className="popup__submit-button" type="submit" value="Сохранить">
                                Сохранить
                    </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="popup popup_type_add">
                <div className="popup__container">
                    <button className="popup__close popup__close_type_addform" type="button">
                        <img className="popup__close-image" src={popupclose} alt="Закрыть окно добавления" />
                    </button>
                    <div className="popup__content">
                        <h3 className="popup__title">Новое место</h3>
                        <form className="popup__form popup__form_add_js" name="add-form">
                            <input type="text" id="title-input" placeholder="Название" value="" name="title"
                                className="popup__field popup__field_input_title" required minlength="2" maxlength="30" />
                            <span id="title-input-error" className="popup__field-error" />
                            <input type="url" id="url-input" placeholder="Ссылка на картинку" value="" name="picture"
                                className="popup__field popup__field_input_url" required />
                            <span id="url-input-error" className="popup__field-error" />
                            <button className="popup__submit-button" type="submit" value="Создать">
                                Создать
                    </button>
                        </form>
                    </div>
                </div>
            </section>

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

            <section className="popup popup_type_avatar">
                <div className="popup__container">
                    <button className="popup__close popup__close_type_img" type="button">
                        <img className="popup__close-image" src={popupclose} alt="Закрыть окно обновления аватара" />
                    </button>
                    <div className="popup__content">
                        <h3 className="popup__title">Обновить аватар</h3>
                        <form className="popup__form" name="avatar-form">
                            <input type="url" id="url-input" value="" name="avatar"
                                className="popup__field popup__field_input_avatar" required />
                            <span id="url-input-error" className="popup__field-error" />
                            <button className="popup__submit-button" type="submit" value="Сохранить">
                                Сохранить
                    </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="popup popup_type_delete">
                <div className="popup__container popup__container-delete">
                    <button className="popup__close popup__close_type_img" type="button">
                        <img className="popup__close-image" src={popupclose} alt="Закрыть окно обновления аватара" />
                    </button>
                    <div className="popup__content">
                        <h3 className="popup__title popup__title-delete">Вы уверены?</h3>
                        <form className="popup__form" name="delete-form">
                            <button className="popup__submit-button popup__submit-button-delete" type="button" value="Да">
                                Да
                    </button>
                        </form>
                    </div>
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
