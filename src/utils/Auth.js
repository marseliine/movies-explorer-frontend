
const configAuth = {
    BASE_URL: 'https://auth.nomoreparties.co',
    headers: {
        'Content-type': 'application/json',
    },
    endpoint: {
        ENDPOINT_REGISTER: '/signup',
        ENDPOINT_AUTH: '/signin',
        ENDPOINT_CHECKJWL: '/users/me',
    }
}

const { BASE_URL, headers, endpoint } = configAuth;
const { ENDPOINT_REGISTER, ENDPOINT_AUTH, ENDPOINT_CHECKJWL } = endpoint;

const _checkForErrors = (res) => {
    if (res.ok) {
        return res.json();
    }
    else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const authorize = (email, password) => {
    return fetch(
        `${BASE_URL}${ENDPOINT_AUTH}`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ email, password })
        })
        .then((res) => {
            return _checkForErrors(res);
        })
};

const checkToken = (token) => {
    return fetch(
        `${BASE_URL}${ENDPOINT_CHECKJWL}`,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        .then((res) => {
            return _checkForErrors(res);
        })
};

const register = (email, password) => {
    return fetch(`${BASE_URL}${ENDPOINT_REGISTER}`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ email, password })
        }
    )
        .then((res) => {
            return _checkForErrors(res);
        })
};

export { authorize, checkToken, register };