import React from 'react';
import popupClose from '../images/CloseIcon.svg';

function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name}${props.isOpen && " popup_opened"}`}>
            <div className="popup__container">
                <button className="popup__close popup__close_type_editform" type="button" onClick={props.onClose}>
                    <img className="popup__close-image" src={popupClose} alt="Закрыть форму" />
                </button>
                <div className="popup__content">
                    <h3 className="popup__title">{props.title}</h3>
                    <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
                        {props.children}
                        <button className="popup__submit-button" type="submit" value="Сохранить" >
                            {props.button}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default PopupWithForm;