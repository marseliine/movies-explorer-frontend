import SectionTitle from "../SectionTitle/SectionTitle";
import student from "../../../images/photo.png";

function Person() {
    return (
        <section className="person" id="person">
            <SectionTitle title="Студент" />
            <div className="person__container">
                <div className="person__description">
                    <h3 className="person__name">Виталий</h3>
                    <p className="person__occupation">Фронтенд-разработчик, 30 лет</p>
                    <p className="person__info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a href='https://github.com/marseliine' target='_blank' rel="noopener noreferrer" className="person__github">
                        Github
                    </a>
                </div>
                <img className="person__photo" src={student} alt="фотография студента" />
            </div>
        </section>
    );
}

export default Person;
