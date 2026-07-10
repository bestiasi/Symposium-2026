import { SPEAKERS_DATA } from "../../../data/Speakers";
import { CustomSection } from "../../Universal/CustomSection";
import OverprintTitle from "../../Universal/OverprintTitle";
import { PersonCard } from "../../Universal/PersonCard";

export const SpeakersSection = () => {
  const sortedSpeakers = [...SPEAKERS_DATA].sort((a, b) => a.id - b.id);
  return (
    <CustomSection bg="bg-colorBG" id="speakers">
      <OverprintTitle
        title="THE SPEAKERS"
        subtitle="MEET"
        className="mb-12 md:mb-16"
      />

      <div
        className="grid grid-cols-1 md:grid-cols-4 
      gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16 justify-items-center"
      >
        {sortedSpeakers.map((speaker) => (
          <PersonCard
            key={speaker.id}
            lastName={speaker.lastName}
            name={speaker.name}
            role={speaker.role}
            image={speaker.image}
            linkedinUrl={speaker.linkedin}
            splitName={speaker.shouldSplitName}
          />
        ))}
      </div>
    </CustomSection>
  );
};
