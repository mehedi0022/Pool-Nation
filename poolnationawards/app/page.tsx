import { Hero } from "@/components/Hero";
import Intro from "@/components/Intro";
import PreviousYearWinner from "@/components/PreviousYearWinner";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <PreviousYearWinner />
      <Why />
    </>
  );
}
