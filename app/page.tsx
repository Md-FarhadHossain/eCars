import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <h1 className="text-5xl font-bold text-blue-400">Hello world</h1>
      <Button className="ml-4">Hello world</Button>
    </>
  );
}
