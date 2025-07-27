
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import EducationalContent from "@/components/EducationalContent";
import ImageUpload from "@/components/ImageUpload";
import WebinarSection from "@/components/WebinarSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <EducationalContent />
        <ImageUpload />
        <WebinarSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
