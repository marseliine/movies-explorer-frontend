import Header from "../Header/Header";
import Hero from "./Hero/Hero.jsx";
import Project from "./Project/Project.jsx";
import Person from "./Person/Person.jsx";
import Technologies from "./Technologies/Technologies.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import Footer from "../Footer/Footer.jsx";

function Main() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Project />
                <Technologies />
                <Person />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
}

export default Main;