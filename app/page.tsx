import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import PracticeAreas from '@/components/practice-areas';
import Insights from '@/components/insights';
import Consultation from '@/components/consultation';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <Insights />
      <Consultation />
      <Footer />
    </main>
  );
}
