import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import SwiperCarousel from "../../Universal/SwiperCarousel";
import { PA_CAROUSEL_ITEMS } from "../../../data/PACarouselData";
import { SPONSOR_LINKS } from "../../../data/Links";
// Import the specific logo for the featured partner
import FEATURED_LOGO from "../../../assets/logos/partners/pa/magna.svg";

export const AnnualPartnersSection = () => {
  // Optional: Filter the featured partner out of the carousel array
  // so they don't appear twice. Assuming they have an id of 1.
  // const carouselPartners = PA_CAROUSEL_ITEMS.filter(
  //   (partner) => partner.altText !== "MAGNA",
  // );

  return (
    <CustomSection
      bg="bg-whiteBG"
      contentClassName="flex flex-col gap-2 md:gap-6"
    >
      <SectionContent title="Partners" subtitle="Annual" className="w-full" />

      {/* Featured Annual Partner Block - Reusing your existing pattern */}
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12 lg:gap-24">
        <SectionContent
          buttonText="Learn More"
          analyticsLabel="Partner: [Partner Name]"
          onButtonClick={() => window.open(SPONSOR_LINKS.MAGNA_LINK, "_blank")}
          className="w-full md:w-1/2 text-justify"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tincidunt dignissim lectus vel congue. Nullam facilisis neque nec
            hendrerit finibus. Nullam ac metus dui. Nunc pharetra semper
            pretium. Integer nec turpis mi. Praesent rutrum posuere elit.
            Vivamus sit amet tortor nulla. Pellentesque eleifend enim ut mauris
            feugiat interdum. Morbi gravida mollis aliquam. Aenean id ipsum
            posuere, ultrices massa quis, scelerisque ex. Fusce mauris est,
            malesuada eu tellus vel, eleifend consectetur turpis. Nunc efficitur
            luctus tempus. Ut fringilla pellentesque feugiat.
          </p>
        </SectionContent>

        <div className="w-full md:w-1/2 self-stretch flex">
          <img
            src={FEATURED_LOGO}
            alt="Featured Annual Partner logo"
            className="w-full h-full object-contain object-top md:object-right-top"
          />
        </div>
      </div>

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
