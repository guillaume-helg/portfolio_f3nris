import Navbar from "@/components/sections/Navbar";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Knowledge from "@/components/sections/Knowledge";
import Experience from "@/components/sections/Experience";
import Project from "@/components/sections/Project";
import Recommendations from "@/components/sections/Recommendations";
import Hobbies from "@/components/sections/Hobbies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Knowledge />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Project />
            <SectionDivider />
            <Recommendations />
            <SectionDivider />
            <Hobbies />
            <SectionDivider />
            <Contact />
            <Footer />

        </>
    );
}
