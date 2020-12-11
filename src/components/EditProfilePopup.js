import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    return (
        <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить" onClose={props.onClose} isOpen={props.isOpen}>
            <input type="text" id="name-input" value="" name="fullname" className="popup__field popup__field_input_name" required minLength="2" maxLength="40" />
            <span id="name-input-error" className="popup__field-error" />
            <input type="text" id="job-input" value="" name="job" className="popup__field popup__field_input_job"
                required minLength="2" maxLength="200" />
            <span id="job-input-error" className="popup__field-error" />
        </PopupWithForm >
    );
}

export default EditProfilePopup;