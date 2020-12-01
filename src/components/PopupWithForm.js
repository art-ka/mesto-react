import React from 'react';
import popupclose from '../images/Close Icon.svg';

function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button className="popup__close popup__close_type_editform" type="button">
                    <img className="popup__close-image" src={popupclose} alt="Закрыть форму" />
                </button>
                <div className="popup__content">
                    <h3 className="popup__title">{props.title}</h3>
                    <form className="popup__form" name={props.name}>
                        {props.name === "edit" && 
                            <>
                            <input type="text" id="name-input" value="" name="fullname" className="popup__field popup__field_input_name" required minlength="2" maxlength="40" />
                            <span id="name-input-error" className="popup__field-error" />
                            <input type="text" id="job-input" value="" name="job" className="popup__field popup__field_input_job"
                                required minlength="2" maxlength="200" />
                            <span id="job-input-error" className="popup__field-error" />
                            </>
                        }

                        {props.name === "add" &&
                            <>
<input type="text" id="title-input" placeholder="Название" value="" name="title"
                                className="popup__field popup__field_input_title" required minlength="2" maxlength="30" />
                            <span id="title-input-error" className="popup__field-error" />
                        <input type="url" id="url-input" placeholder="Ссылка на картинку" value="" name="picture"
                            className="popup__field popup__field_input_url" required />
                        <span id="url-input-error" className="popup__field-error" />
                        </>
}

                        {props.name === "avatar" &&
                            <>
<input type="url" id="url-input" value="" name="avatar"
                                className="popup__field popup__field_input_avatar" required />
                            <span id="url-input-error" className="popup__field-error" />
                            </>
}

                            <button className="popup__submit-button" type="submit" value="Сохранить">
                            {props.button}
                        </button>
                    </form>
                </div>
            </div>
            </section>
    );
}

export default PopupWithForm;