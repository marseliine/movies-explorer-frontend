import Header from "../Header/Header";
import Hero from "./Hero/Hero.jsx";
import Project from "./Project/Project.jsx";
import Student from "./Student/Student.jsx";
import Technologies from "./Technologies/Technologies.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import Footer from "../Footer/Footer.jsx";

function Main({ loggedIn }) {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <Hero />
                <Project />
                <Technologies />
                <Student />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
}

export default Main;