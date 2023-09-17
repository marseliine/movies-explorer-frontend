import { Link, useNavigate } from "react-router-dom";
import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="not-found">
		<div className="not-found__block">
			<h1 className="not-found__title">404</h1>
			<p className="not-found__subtitle">Страница не найдена</p>
			<button className="button-hover not-found__link" onClick={handleGoBack}>
			Назад
			</button>
		</div>
    </section>
  );
}

export default NotFoundPage;

