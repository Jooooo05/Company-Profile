import { Hero } from "@/features/hero/Hero";
import { Service } from "@/features/tom-ship-service/Service";
import { About } from "@/features/about/About";
import { Offer } from "@/features/our-offer/Offer";
import { Team } from "@/features/team/Team";
import { Contact } from "@/features/contact/Contact";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col pb-20">

      <Hero />
      <Service />
      <About />
      <Offer />
      <Team />
      <Contact />
      {/* Sections akan ditambahkan di sini satu per satu:
          <Certificates />
          <Ports />
      */}
    </main>
  );
}