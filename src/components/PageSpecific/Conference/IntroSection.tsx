import { CustomSection } from "../../Universal/CustomSection";
import OverprintTitle from "../../Universal/OverprintTitle";
import { SectionContent } from "../../Universal/SectionContent";
import Host from "../../../assets/images/talking-host2.webp";

export const ConferenceIntroSection = () => {
  return (
    <CustomSection
      bg="bg-whiteBG"
      contentClassName="flex flex-col gap-10 md:gap-16"
    >
      <OverprintTitle title="THE CONFERENCE" subtitle="WHAT AWAITS AT" />

      <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* Left Side: Content with Bold Keywords */}
        <SectionContent className="w-full md:w-[60%] text-justify">
          <div className="flex flex-col gap-6 text-darkTxt text-lg leading-relaxed">
            <p>
              <strong>BEST Intercultural Conference</strong> is a premier
              international event exploring how multiculturalism in today's
              society empowers diversity and drives innovation.
            </p>
            <p>
              Taking place on <strong>July 12th, 2026, in Iași, Romania</strong>
              , this event brings together students, academics, mentors, and{" "}
              <strong>NGO</strong> leaders from across Europe to shape the
              future of new generations and better understand how multicultural
              societies function.
            </p>

            <p>
              In a globalized world, education thrives on{" "}
              <strong>cross-cultural</strong> collaboration. We believe that
              international exchange programs and diverse perspectives are
              essential for building <strong>global career</strong> paths and{" "}
              <strong>inclusive professional environments</strong>.
            </p>

            <p>
              <strong>BEST Intercultural Conference</strong> is where
              multicultural ideas turn into action. Whether you want to explore{" "}
              <strong>international opportunities</strong>, connect with
              students from around the world, or be inspired by diverse{" "}
              <strong>keynote speakers</strong>, this is the place to be.
            </p>

            <p className="mt-2">
              Let's reimagine a <strong>multicultural world</strong> together!
            </p>
          </div>
        </SectionContent>

        {/* Right Side: Image with internal zoom effect */}
        <div className="w-full md:w-[40%] self-stretch flex overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
          <img
            src={Host}
            alt="Conference host presenting"
            className="w-full h-full object-cover object-center scale-[1.4]"
          />
        </div>
      </div>
    </CustomSection>
  );
};
