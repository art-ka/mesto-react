import React from 'react';
import popupClose from '../images/CloseIcon.svg';

function ImagePopup(props) {
    return (
        <section className={`popup popup_type_img ${props.isOpen && "popup_opened"}`}>
            <div className="popup__container-img">
                <button className="popup__close popup__close_type_img" type="button" onClick={props.onClose}>
                    <img className="popup__close-image" src={popupClose}
                        alt="Закрыть окно просмотра изображения" />
                </button>
                <img className="popup__image" src={props.card.link} alt={props.card.name} />
                <h3 className="popup__caption">{props.card.name}</h3>
            </div>
        </section>
    );
}

export default ImagePopup;
