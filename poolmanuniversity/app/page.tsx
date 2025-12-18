import Hero from "@/components/Hero";
import MembershipTiers from "@/components/MembershipTiers";
import Sponsors from "@/components/Sponsors";
import WhyJoinUs from "@/components/WhyJoinUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsors />
      <MembershipTiers />
      <WhyJoinUs />
    </>
  );
}
