/* components/PageSpecific/Conference/TopicsSection.tsx */
import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import {
  FaGlobe,
  FaBriefcase,
  FaExchangeAlt,
  FaHandsHelping,
} from "react-icons/fa";

const topics = [
  {
    icon: FaGlobe,
    label: "Multiculturalism & Identity",
    description:
      "Exploring how diverse cultural backgrounds shape our world and drive innovation in modern society.",
    speaker: "Tăușance Vlad",
  },
  {
    icon: FaBriefcase,
    label: "Global Career Paths",
    description:
      "How international experience and cross-cultural skills open doors to opportunities across Europe.",
    speaker: "Andronache Mălina-Georgia",
  },
  {
    icon: FaExchangeAlt,
    label: "International Exchange",
    description:
      "The value of student mobility programs and what they teach us beyond the classroom.",
    speaker: "Târpescu Cristian",
  },
  {
    icon: FaHandsHelping,
    label: "NGO & Civic Leadership",
    description:
      "Building inclusive communities through volunteering, activism, and cross-border collaboration.",
    speaker: "Speaker Name",
  },
];

export const TopicsSection = () => {
  return (
    <CustomSection bg="bg-colorBG" id="topics">
      <SectionContent title="CONFERENCE TOPICS" subtitle="WHAT WE EXPLORE">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {topics.map(({ icon: Icon, label, description, speaker }) => (
            <div
              key={label}
              className="flex flex-col gap-3 bg-whiteBG rounded-2xl px-6 py-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary shrink-0">
                  <Icon size={16} />
                </div>
                <span className="text-darkTxt font-bold text-base leading-snug">
                  {label}
                </span>
              </div>
              <p className="text-sm text-darkTxt/70 leading-relaxed">
                {description}
              </p>
              <div className="flex items-center gap-2 pt-1 border-t border-darkTxt/10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span
                  className="flex items-center gap-1 text-sm font-medium text-primary cursor-pointer hover:underline"
                  onClick={() =>
                    document
                      .getElementById("speakers")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {speaker}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionContent>
    </CustomSection>
  );
};
