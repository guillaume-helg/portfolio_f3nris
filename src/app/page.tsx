import Navbar from "@/components/sections/Navbar";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Knowledge from "@/components/sections/Knowledge";
import Experience from "@/components/sections/Experience";
import Project from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Knowledge />
            <Experience />
            <Project />
            <Contact />
            <Footer />
        </>
    );
}
