import Faq from "@/components/Faq";
import FeaturedItems from "@/components/FeaturedItems";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return ( <>
      <Hero></Hero>
      <FeaturedItems></FeaturedItems>
      <HowItWork></HowItWork>
      <Testimonials></Testimonials>
      <Faq></Faq>
      <WhyChooseUs></WhyChooseUs>

      <Newsletter></Newsletter>
  
  </>

  )
    
  
}
