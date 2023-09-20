import React from "react";
import { Link } from 'react-router-dom';
import './Account.css';

function Account() {
	return (
		<div className="account-btn">
			<Link className='link account-btn__link' to="/profile">Аккаунт</Link>
		</div>
	)
}

export default Account;