import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Methods from '../components/Methods';
import Schedule from '../components/Schedule';
import Booking from '../components/Booking';
import SocialProof from '../components/SocialProof';
import InstagramFeed from '../components/InstagramFeed';
import Location from '../components/Location';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Introduction />
      <Methods />
      <Schedule />
      <Booking />
      <SocialProof />
      <InstagramFeed />
      <Location />
      <Footer />
    </main>
  );
}