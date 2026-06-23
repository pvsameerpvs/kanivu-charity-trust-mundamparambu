import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import MissionVision from "@/components/MissionVision";
import ServicesSection from "@/components/ServicesSection";
import HomeEquipmentSection from "@/components/HomeEquipmentSection";
import HomeProjectSection from "@/components/HomeProjectSection";
import EducationSection from "@/components/EducationSection";
import ActivitiesTimeline from "@/components/ActivitiesTimeline";
import DonationSection from "@/components/DonationSection";
import GallerySection from "@/components/GallerySection";
import VolunteerSection from "@/components/VolunteerSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <MissionVision />
      <ServicesSection />
      <HomeEquipmentSection />
      <HomeProjectSection />
      <EducationSection />
      <ActivitiesTimeline />
      <DonationSection />
      <GallerySection />
      <VolunteerSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}
