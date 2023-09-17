import React from "react";
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
	const [isActive, setIsActive] = React.useState(true);

	function handleRedactProfile() {
		setIsActive(!isActive);
	}

	return (
		<section className="profile">
			<div className="profile__container">
				<h1 className="profile__title">Привет, Екатерина!</h1>
				<form className="profile__form">
					<label className="profile__form-label border">
						Имя
						<input
							className="profile__form-input"
							type="text"
							name="name"
							id="name-input"
							placeholder="Имя"
							minLength={2}
							maxLength={30}
							value="Екатерина"
							disabled
						/>
					</label>
					<label className="profile__form-label">
						E-mail
						<input
							className="profile__form-input"
							type="email"
							name="email"
							id="email-input"
							placeholder="E-mail"
							value="kizikovaek@yandex.ru"
							disabled
						/>
					</label>
					{isActive ? (
						<>
							<button
								type="button"
								className="profile__edit-button"
								onClick={handleRedactProfile}
							>
								Редактировать
							</button>
							<Link className="link profile__exit-button" to="/">
								Выйти из аккаунта
							</Link>
						</>
					) : (
						<button
							type="button"
							className="button-hover profile__save-button"
							onClick={handleRedactProfile}
						>
							Сохранить
						</button>
					)}
				</form>
			</div>
		</section>
	)
}

export default Profile;