class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    takeUserInfo() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-17/users/me', {
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-17/cards', {
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    addCard(dataCard) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-17/cards', {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                name: dataCard.name,
                link: dataCard.link
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    changeAvatar(avatarInput) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-17/users/me/avatar', {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                avatar: avatarInput.avatar
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    setUserInfo(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-17/users/me', {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    likeCard(_id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-17/cards/likes/${_id}`, {
            method: "PUT",
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deleteLikeCard(_id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-17/cards/likes/${_id}`, {
            method: "DELETE",
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    changeLikeCardStatus(_id, isLiked) {
        if (isLiked) {
            return this.likeCard(_id);
        }
        return this.deleteLikeCard(_id);
    }


    deleteCard(_id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-17/cards/${_id}`, {
        method: "DELETE",
        headers: this.headers
    })
        .then(res => {
            if (res.ok) {
                return res;
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        })
}
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
    headers: {
        authorization: 'ef890c66-d7a0-4a1d-a482-7b78f3f64350',
        'Content-Type': 'application/json'
    }
});

export default api;