import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MembershipTiers from "@/components/MembershipTiers";
import PricingPlans from "@/components/PricingPlans";
import Sponsors from "@/components/Sponsors";
import WhyJoinUs from "@/components/WhyJoinUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsors />
      <MembershipTiers />
      <WhyJoinUs />
      <PricingPlans />
      <HowItWorks />
      <Faq />
    </>
  );
}
