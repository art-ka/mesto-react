import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    const avatarRef = React.useRef('');

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" isOpen={props.isOpen}
            onClose={props.onClose} onSubmit={handleSubmit} >
            <input type="url" id="url-input" name="avatar" placeholder="Вставьте ссылку"
                className="popup__field popup__field_input_avatar" required ref={avatarRef} />
            <span id="url-input-error" className="popup__field-error" />
        </PopupWithForm >
    );
}

export default EditAvatarPopup;