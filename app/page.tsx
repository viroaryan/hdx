import Hero from "@/components/Hero";
import DownBad from "@/components/DownBad";
import SecretSauce from "@/components/SecretSauce";
import CaseStudies from "@/components/CaseStudies";
import FooterContact from "@/components/FooterContact";

export default function Page() {
  return (
    <>
      <main id="main">
        <Hero />
        <DownBad />
        <SecretSauce />
        <CaseStudies />
      </main>
      <FooterContact />
    </>
  );
}
