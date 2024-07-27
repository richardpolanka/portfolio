import About from "@/components/about";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
  <main className="">
      <About />
      <SectionDivider />
      <Projects />
      <div className="flex flex-col items-center px-4">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
