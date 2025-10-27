import Hero from "../components/hero";
import CtaCards from "../components/CtaCards";
import ImageWithText from "../components/ImageWithText";
import BusinessGuides from "../components/GuideCard";
import BusinessHelpSection from "../components/helpSection";
import StartBusinessCTA from "../components/StartBusinessCTA"
import Footer from "../components/PreFooter";
import FooterBar from "../components/footer";
import CodeModalSection from "../components/CodeModalSection"


export default function Home() {
  return (
    <>
      <Hero />
      <div className="p-1 md:p-4">
        <CtaCards />
        <ImageWithText />
        <CodeModalSection />
        <BusinessGuides />
        <BusinessHelpSection />
        
        <StartBusinessCTA /> 
      
      </div>
      <Footer/>
      <FooterBar/>

    </>
  );
}
