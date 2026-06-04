import { ConferencePageHeader } from "../components/Headers/ConferenceHeader";
import { ConferenceIntroSection } from "../components/PageSpecific/Conference/IntroSection";
import { SpeakerCompaniesSection } from "../components/PageSpecific/Conference/SpeakerCompanies";
import { SpeakersSection } from "../components/PageSpecific/Conference/Speakers";
import { TopicsSection } from "../components/PageSpecific/Conference/TopicsSection";

function Conference() {
  return (
    <>
      <ConferencePageHeader />
      <ConferenceIntroSection />
      <TopicsSection />
      <SpeakersSection />
      <SpeakerCompaniesSection />
    </>
  );
}

export default Conference;
