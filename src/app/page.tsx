import { Hero } from "@/features/hero/Hero";
import { Service } from "@/features/tom-ship-service/Service";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col pb-20">

      <Hero />
      <Service />
      {/* Sections akan ditambahkan di sini satu per satu:
          <About />
          <Team />
          <Certificates />
          <Ports />
          <Contact />
      */}
    </main>
  );
}