import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    return (
        <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={props.isOpen} onClose={props.onClose} >
            <input type="text" id="title-input" placeholder="Название" value="" name="title"
                className="popup__field popup__field_input_title" required minLength="2" maxLength="30" />
            <span id="title-input-error" className="popup__field-error" />
            <input type="url" id="url-input" placeholder="Ссылка на картинку" value="" name="picture"
                className="popup__field popup__field_input_url" required />
            <span id="url-input-error" className="popup__field-error" />
        </PopupWithForm >
    );
}

export default AddPlacePopup;