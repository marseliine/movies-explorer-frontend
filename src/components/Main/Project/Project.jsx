import SectionTitle from "../SectionTitle/SectionTitle";

function Project() {
    return (
        <section className="project" id="project">
            <SectionTitle title="О проекте"/>
            <ul className="project__info">
                <li>
                    <h3 className="project__title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="project__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
                    </p>
                </li>
                <li>
                    <h3 className="project__title">
                        На&nbsp;выполнение диплома ушло 5 недель
                    </h3>
                    <p className="project__text">
                        У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <div className="project__stages">
                <p className="project__weeks project__weeks-marked">
                    1 неделя
                </p>
                <p className="project__weeks">
                    4 неделя
                </p>
                <p className="project__weeks-description">
                    Back-end
                </p>
                <p className="project__weeks-description">
                    Front-end
                </p>
            </div>
        </section>
    );
}

export default Project;