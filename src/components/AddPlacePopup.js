import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name,
            link,
        });
    }

    return (
        <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={props.isOpen} onClose={props.onClose} 
        onSubmit={handleSubmit} >
            <input type="text" id="title-input" placeholder="Название" name="name"
                className="popup__field popup__field_input_title" required minLength="2" maxLength="30" 
                value={name} onChange={handleChangeName} />
            <span id="title-input-error" className="popup__field-error" />
            <input type="url" id="url-input" placeholder="Ссылка на картинку" name="link"
                className="popup__field popup__field_input_url" required value={link} onChange={handleChangeLink} />
            <span id="url-input-error" className="popup__field-error" />
        </PopupWithForm >
    );
}

export default AddPlacePopup;