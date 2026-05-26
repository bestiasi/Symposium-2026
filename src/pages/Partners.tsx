import { PartnersPageHeader } from "../components/Headers/PartnersHeader";
import { EventPartnersSection } from "../components/PageSpecific/Partners/EventPartnersSection";
import { AnnualPartnersSection } from "../components/PageSpecific/Partners/AnnualPartnersSection";
import { BarterSponsorsSection } from "../components/PageSpecific/Partners/BarterSponsorsSection";
import { MediaSponsorsSection } from "../components/PageSpecific/Partners/MediaSponsorsSection";
import { StrategicPartnersSection } from "../components/PageSpecific/Partners/StrategicPartnersSection";

function Partners() {
  return (
    <>
      <PartnersPageHeader />
      <EventPartnersSection />
      <StrategicPartnersSection />
      <AnnualPartnersSection />
      <BarterSponsorsSection />
      <MediaSponsorsSection />
    </>
  );
}

export default Partners;
