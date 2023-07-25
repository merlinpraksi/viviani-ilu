import Image from 'next/image';
import hero from '../public/assets/hero.png';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';



export default function Home() {
  return (
<>
<Hero />
<About />
<Services />
<Contact />
</>
  );
}
