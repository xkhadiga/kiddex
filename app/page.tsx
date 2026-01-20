import Categories from "./components/home/Categories";
import Hero from "./components/home/Hero";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Nav />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
}
