import Hero from '@/app/components/Hero';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import ContactForm from '@/app/components/ContactForm';
import Footer from '@/app/components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;