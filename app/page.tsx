import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Josiah Rachmat",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Page Components */}
        <AboutMeSection />
        <ProjectsSection />
        <AchievementsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />

      </div>
    </div>
  );
}


