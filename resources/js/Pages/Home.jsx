

import MainLayout from '@/Layouts/MainLayout'; // Layout yahan se import hoga
import Hero from '@/Components/Sections/Hero';
import Work from '@/Components/Sections/Work';
import Projects from '@/Components/Sections/Projects';
import Services from '@/Components/Sections/Services';
import About from '@/Components/Sections/About';
import Contact from '@/Components/Sections/Contact';
import Footer from '@/Components/Sections/Footer';

export default function Home() {
    return (
        <MainLayout> 
            <Hero />
             <Work/>
             <Projects/>
             <Services/>
             <About/>
             <Contact/>
             <Footer/>
        </MainLayout>
    );
}