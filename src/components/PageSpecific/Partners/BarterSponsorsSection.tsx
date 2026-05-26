import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import SwiperCarousel from "../../Universal/SwiperCarousel";
import { BS_CAROUSEL_ITEMS } from "../../../data/BarterSponsorsCarouselData";

export const BarterSponsorsSection = () => {
  if (!BS_CAROUSEL_ITEMS || BS_CAROUSEL_ITEMS.length === 0) return null;

  return (
    <CustomSection bg="bg-colorBG" contentClassName="flex flex-col gap-6">
      <SectionContent title="Sponsors" subtitle="Event" className="w-full" />
      <SwiperCarousel
        data={BS_CAROUSEL_ITEMS}
        carouselName="Event Sponsors"
        mobileSlidesPerView={1}
        desktopSlidesPerView={4}
        aspect="aspect-[16/9] md:aspect-square"
      />
    </CustomSection>
  );
};
