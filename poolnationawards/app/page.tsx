import AfterParty from "@/components/AfterParty";
import { Hero } from "@/components/Hero";
import Intro from "@/components/Intro";
import PictureGallery from "@/components/PictureGallery";
import PreviousYearWinner from "@/components/PreviousYearWinner";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <AfterParty />
      <PreviousYearWinner />
      <PictureGallery />
      <Why />
    </>
  );
}
