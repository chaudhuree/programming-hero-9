import BooksSection from "../components/BooksSection";
import Hero from "../components/Hero";

export default function HomePage() {
  
  return (
    <div className="max-md:px-5">
      <Hero />
      <BooksSection />
    </div>
  );
}
