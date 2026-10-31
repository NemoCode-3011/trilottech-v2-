import { Hero } from "../components/Hero";
import { Process } from "../components/Process";
import { Services } from "../components/Services";
import { Work } from "../components/Work";
import { Pricing } from "../components/Pricing";
import { Faq } from "../components/Faq";
import { ContactCta } from "../components/ContactCta";
import { Seo } from "../components/Seo";
import { organizationSchema } from "../data/site";

export default function Home() {
  return (
    <main id="main">
      <Seo
        title="Trilot | Custom websites and web systems"
        description="Trilot designs and hand-codes fast, custom websites and web systems for businesses in Nigeria and beyond. Ask for a clear, fixed-price quote."
        path="/"
        jsonLd={organizationSchema}
      />
      <Hero />
      <Services />
      <Process />
      <Work />
      <Pricing />
      <Faq />
      <ContactCta />
    </main>
  );
}
