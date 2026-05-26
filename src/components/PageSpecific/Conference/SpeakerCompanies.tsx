import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import SwiperCarousel from "../../Universal/SwiperCarousel";
import { OS_CAROUSEL_ITEMS } from "../../../data/ONGCarouselData";

export const SpeakerCompaniesSection = () => {
  if (!OS_CAROUSEL_ITEMS || OS_CAROUSEL_ITEMS.length === 0) return null;

  // Kept your sorting logic in case you are still using the dynamic import method!
  const sortedCarouselItems = [...OS_CAROUSEL_ITEMS].sort(
    (a, b) => a.id - b.id,
  );

  return (
    <CustomSection bg="bg-whiteBG">
      <SectionContent title="PARTNERS" subtitle="NGO" className="w-full" />

      <div className="flex flex-col gap-6 md:max-w-[54rem] mx-auto">
        <SwiperCarousel
          data={sortedCarouselItems}
          carouselName="NGO Partners"
          mobileSlidesPerView={1}
          desktopSlidesPerView={3}
          aspect="aspect-[16/9] md:aspect-square"
        />
      </div>
    </CustomSection>
  );
};
