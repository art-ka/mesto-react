import React from 'react';
import popupclose from '../images/Close Icon.svg';

function ImagePopup(props) {
    return (
        <section className={`popup popup_type_img ${props.card && "popup_opened"}`}>
                <div className="popup__container-img">
                    <button className="popup__close popup__close_type_img" type="button" onClick={props.onClose}>
                        <img className="popup__close-image" src={popupclose}
                            alt="Закрыть окно просмотра изображения" />
                    </button>
                    <img className="popup__image" src={props.card.src} />
                    <h3 className="popup__caption">{props.card.name}</h3>
                </div>
            </section>
    );
}

export default ImagePopup;
