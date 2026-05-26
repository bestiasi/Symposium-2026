import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import SwiperCarousel from "../../Universal/SwiperCarousel";
import { STRATEGIC_PARTNERS_CAROUSEL_ITEMS } from "../../../data/SPCarouselData";

export const StrategicPartnersSection = () => {
  if (
    !STRATEGIC_PARTNERS_CAROUSEL_ITEMS ||
    STRATEGIC_PARTNERS_CAROUSEL_ITEMS.length === 0
  )
    return null;

  const sortedCarouselItems = [...STRATEGIC_PARTNERS_CAROUSEL_ITEMS].sort(
    (a, b) => a.id - b.id,
  );
  return (
    <CustomSection bg="bg-colorBG" contentClassName="flex flex-col gap-6">
      <SectionContent
        title="Partners"
        subtitle="Strategic"
        className="w-full"
      />
      <div className="w-full flex flex-col gap-6 md:max-w-[54rem] mx-auto">
        <SwiperCarousel
          data={sortedCarouselItems}
          carouselName="Strategic Partners"
          mobileSlidesPerView={1}
          desktopSlidesPerView={3}
          aspect="aspect-[16/9] md:aspect-square"
        />
      </div>
    </CustomSection>
  );
};
