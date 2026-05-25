import { ConferencePageHeader } from "../components/Headers/ConferenceHeader";
import { ConferenceIntroSection } from "../components/PageSpecific/Conference/IntroSection";
import { ParticipateSection } from "../components/PageSpecific/Conference/ParticipateSection";
import { SpeakerCompaniesSection } from "../components/PageSpecific/Conference/SpeakerCompanies";
import { SpeakersSection } from "../components/PageSpecific/Conference/Speakers";

function Conference() {
  return (
    <>
      <ConferencePageHeader />
      <ConferenceIntroSection />
      <ParticipateSection />
      <SpeakerCompaniesSection />
      <SpeakersSection />
    </>
  );
}

export default Conference;
