import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить" 
        onClose={props.onClose} isOpen={props.isOpen} onSubmit={handleSubmit} >
            <input type="text" id="name-input" value={name} name="name"
                className="popup__field popup__field_input_name"
                required minLength="2" maxLength="40" onChange={handleChangeName} />
            <span id="name-input-error" className="popup__field-error" />
            <input type="text" id="job-input" value={description} name="job" className="popup__field popup__field_input_job"
                required minLength="2" maxLength="200" onChange={handleChangeDescription} />
            <span id="job-input-error" className="popup__field-error" />
        </PopupWithForm >
    );
}

export default EditProfilePopup;