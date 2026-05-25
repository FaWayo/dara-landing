import Hero from "@/components/Hero";
import BuyerProblem from "@/components/BuyerProblem";
import HowItWorks from "@/components/HowItWorks";
import SellerSection from "@/components/SellerSection";
import WaitlistSignup from "@/components/WaitlistSignup";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <BuyerProblem />
      <HowItWorks />
      <SellerSection />
      <WaitlistSignup />
      {/*<SocialProof />*/}
      {/*<FAQ />*/}
      <Footer />
    </main>
  );
}
