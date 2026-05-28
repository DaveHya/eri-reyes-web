// app/page.jsx — Server Component (fetches data at build/request time)
import { sanityClient } from "../lib/sanity";
import { HOME_QUERY } from "../queries";

import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Services from "../components/Services";
import CTABanner from "../components/CTABanner";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Connect from "../components/Connect";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Revalidar cada 60 segundos (ISR) — quita esto para full SSG
export const revalidate = 60;

export default async function Home() {
  const data = await sanityClient.fetch(HOME_QUERY);
  const { settings, services, featuredProjects, testimonials, clients } = data;

  return (
    <main className="min-h-screen font-sans">
      <Hero settings={settings} />
      <Clients settings={settings} clients={clients} />
      <Services services={services} />
      <CTABanner settings={settings} />
      <Projects projects={featuredProjects} />
      <Testimonials testimonials={testimonials} />
      <Connect settings={settings} />
      <Contact settings={settings} />
      <Footer settings={settings} />
    </main>
  );
}
