import ProductFeatures from "@/components/animata/hero/product-features";
import SlackIntro from "@/components/animata/hero/SlackIntro";
import Achievement from "@/components/shared/Achievement";
import Hero from "@/components/shared/Hero";
import Presentation from "@/components/shared/Presentation";
import Testimonial from "@/components/shared/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col p-0 m-0 w-full gap-8">
      <Hero />
      {/* <ProductFeatures /> */}
      <SlackIntro/>
      <Presentation />
      <Achievement />
      <Testimonial />
    </main>
  );
}
