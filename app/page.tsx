import { Hero } from "@/components/hero";
import { About } from "@/components/about";

import { Services } from "@/components/services";
import { benefitOne, services} from "@/components/data";
import { SectionTitle } from "@/components/sectionTitle";
import { Benefits } from "@/components/benefits";

import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <About />
      <Services data={services} />
      <SectionTitle
        preTitle="Proč si vybrat zrovna nás?"
      >
      </SectionTitle>
      <Benefits data={benefitOne} />
      <div className="flex flex-col items-center px-4">
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
