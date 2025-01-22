import PublicLayout from "@/modules/public/layouts/PublicLayout";
import Hero from "@/modules/public/components/home/hero";
import Highlights from "@/modules/public/components/highlights/Highlights";
import Showcase from "@/modules/public/components/home/showcase";
import HomeTickets from "@/modules/public/components/home/tickets";
import SignUpSection from "@/modules/public/components/signup/SignUpSection";
import SponsorShowcase from "@/modules/public/components/sponsors/SponsorShowcase";

const HomePage = () => {
  return (
    <PublicLayout>
      <Hero 
        title="Fashionistas: A Night of Glamour & Fashion"
        subtitle="Celebrate Valentine's Day with Medellín's most glamorous lingerie fashion show."
      />
      <Highlights items={[
        {
          title: "Runway Collection",
          description: "Experience our exclusive Valentine's collection featuring elegant evening wear and haute couture designs.",
          image: "/lovable-uploads/356fce11-fc3c-49c5-aa17-53b584a0bcf8.png"
        },
        {
          title: "Luxury Lingerie",
          description: "Discover our curated selection of premium silk and satin pieces in romantic blush tones.",
          image: "/lovable-uploads/9d7f93fc-b3ee-4a60-8e66-a7dd53721a75.png"
        },
        {
          title: "Backstage Glamour",
          description: "Get a glimpse of the behind-the-scenes magic and artistic preparation.",
          image: "/lovable-uploads/520b431f-8c25-4a32-bb07-94ff7f89d575.png"
        }
      ]} />
      <Showcase />
      <HomeTickets />
      <SignUpSection />
      <SponsorShowcase />
    </PublicLayout>
  );
};

export default HomePage;