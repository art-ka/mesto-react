import React from 'react';
import editbutton from '../images/edit.svg';
import addbutton from '../images/add-buton.svg';

function Main() {
    return (
            <main className="content">
                <section className="profile">
                    <div className="profile__user">
                        <img src="#" alt="Аватарка пользователя" className="profile__avatar" />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title"></h1>
                        <button className="profile__edit-button" type="button">
                            <img className="profile__edit-button-image" src={editbutton} alt="Редактировать" />
                        </button>
                        <p className="profile__subtitle"></p>
                    </div>
                    <button className="profile__add-button" type="button">
                        <img className="profile__add-button-image" src={addbutton} alt="Добавить фото" />
                    </button>
                </section>

                <section className="elements">
                    <ul className="element"></ul>
                </section>
            </main>
    );
}

export default Main;
