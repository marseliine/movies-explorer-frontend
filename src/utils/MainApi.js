class MainApi {
  constructor() {
    this.baseUrl = 'https://api.yamovies.nomoredomainsicu.ru/';
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      if (res.status === 400) {
        return Promise.reject("Неверный запрос. Пожалуйста, проверьте данные.");
      } else if (res.status === 401) {
        return Promise.reject("Неверный пароль или пользователь не найден. Пожалуйста, проверьте введенные данные.");
      } else if (res.status === 403) {
        return Promise.reject("Доступ запрещен. У вас нет прав на выполнение этой операции.");
      } else if (res.status === 404) {
        return Promise.reject("Ресурс не найден.");
      } else if (res.status === 409) {
        return Promise.reject("Конфликт данных. Такой пользователь уже существует.");
      } else if (res.status >= 500) {
        return Promise.reject("Произошла внутренняя ошибка сервера.");
      } else {
        return Promise.reject(`Что-то пошло не так! Ошибка: ${res.status}`);
      }
    }
  }

  register({ name, email, password }) {
    return fetch(`${this.baseUrl}signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ name, email, password })
    })
      .then((res) => this._checkResponse(res))
  };

  authorize({ email, password }) {
    return fetch(`${this.baseUrl}signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })
      .then((res) => this._checkResponse(res))
  };

  getContent(token) {
    return fetch(`${this.baseUrl}users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      // credentials: 'include',
    })
      .then((res) => this._checkResponse(res))
      .then(data => data)
  };

  getUserInfo() {
    return fetch(`${this.baseUrl}users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
    })
      .then((res) => this._checkResponse(res))
  };

  async setUserInfo({ name, email }) {
    try {
      const response = await fetch(`${this.baseUrl}users/me`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({ name, email })
      });
      if (!response.ok) {
        const errorMessage = await this._checkResponse(response);
        return Promise.reject(new Error(errorMessage));
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }


  saveMovie(data) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this.baseUrl}movies`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        // owner: data.owner,
      }),
    }).then((res) => this._checkResponse(res))
  };

  deleteMovie(movieId) {
    return fetch(`${this.baseUrl}movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log(`Фильм c id = ${movieId} успешно удален`);
        } else {
          console.error('Ошибка при удалении фильма:', res.status);
        }
        return this._checkResponse(res);
      });
  };

  getSavedMovies() {
    return fetch(`${this.baseUrl}movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((res) => this._checkResponse(res));
  };

  logout() {
    return fetch(`${this.baseUrl}signout`, {
      method: 'GET',
      credentials: 'include',
    }
    )
  }

}


export const api = new MainApi()