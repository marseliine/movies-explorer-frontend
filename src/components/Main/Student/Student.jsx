import SectionTitle from "../SectionTitle/SectionTitle";
import photo from "../../../images/student-photo.png";

function Student() {
    return (
        <section className="student" id="student">
            <SectionTitle title="Студент" />
            <div className="student__container">
                <div className="student__description">
                    <h3 className="student__name">Виталий</h3>
                    <p className="student__occupation">Фронтенд-разработчик, 30 лет</p>
                    <p className="student__info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a href='https://github.com/marseliine' target='_blank' rel="noopener noreferrer" className="student__github">
                        Github
                    </a>
                </div>
                <img className="student__photo" src={photo} alt="фото студента" />
            </div>
        </section>
    );
}

export default Student;