import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Hero from '@/components/Hero';
import MyProjects from '@/components/MyProjects';
import Summary from '@/components/Summary';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <main>
      <div className="  flex flex-col gap-20 ">
        <Hero />
        <AboutMe />
        <Summary />
        <TechStack />
        <MyProjects />
        <ContactMe />
      </div>
    </main>
  );
}
