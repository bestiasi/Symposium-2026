import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import SwiperCarousel from "../../Universal/SwiperCarousel";
import { MS_CAROUSEL_ITEMS } from "../../../data/MediaSponsorsCarouselData";

export const MediaSponsorsSection = () => {
  if (!MS_CAROUSEL_ITEMS || MS_CAROUSEL_ITEMS.length === 0) return null;

  return (
    <CustomSection bg="bg-whiteBG" contentClassName="flex flex-col gap-6">
      <SectionContent title="Sponsors" subtitle="Media" className="w-full" />
      <SwiperCarousel
        data={MS_CAROUSEL_ITEMS}
        carouselName="Media Sponsors"
        mobileSlidesPerView={1}
        desktopSlidesPerView={4}
        aspect="aspect-[16/9] md:aspect-square"
      />
    </CustomSection>
  );
};
