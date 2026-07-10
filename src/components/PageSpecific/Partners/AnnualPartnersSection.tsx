import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import SwiperCarousel from "../../Universal/SwiperCarousel";
import { PA_CAROUSEL_ITEMS } from "../../../data/PACarouselData";

export const AnnualPartnersSection = () => {

  return (
    <CustomSection
      bg="bg-whiteBG"
      contentClassName="flex flex-col gap-2 md:gap-6"
    >
      <SectionContent title="Partners" subtitle="Annual" className="w-full" />

      
      {/* The rest of the Annual Partners */}
      <div className="w-full pt-4 md:pt-8 border-t border-gray-200">
        <SwiperCarousel
          data={PA_CAROUSEL_ITEMS}
          carouselName="Annual Partners"
          mobileSlidesPerView={1}
          desktopSlidesPerView={4}
          aspect="aspect-[16/9] md:aspect-square"
        />
      </div>
    </CustomSection>
  );
};
