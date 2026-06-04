/* components/PageSpecific/Conference/TopicsSection.tsx */
import { CustomSection } from "../../Universal/CustomSection";
import { SectionContent } from "../../Universal/SectionContent";
import {
  FaUsers,
  FaFlask,
  FaMobileAlt,
  FaPlane,
  FaArrowDown,
} from "react-icons/fa";

const topics = [
  {
    icon: FaUsers,
    label: "Youth, Identity and Belonging in a Multicultural World",
    description:
      "How do young people build identity in a globalized world? From personal values and social media influence to community belonging and career decisions in multicultural contexts.",
    speaker: "Tăușance Vlad",
    org: "FFFF",
  },
  {
    icon: FaFlask,
    label: "Power, Inequality and Opportunity in STEM",
    description:
      "Are opportunities in STEM truly equal? Exploring access to education, the role of globalization, and how technology and communities can bridge the gap for underrepresented youth.",
    speaker: "Andronache Mălina-Georgia",
    org: "CICIA",
  },
  {
    icon: FaMobileAlt,
    label: "How Online Media Shapes Cultural Perception and Inclusion",
    description:
      "From viral stereotypes to digital activism. How algorithms, social media, and online communities shape the way we perceive cultures and what a more inclusive digital space looks like.",
    speaker: "Spătărescu Bianca Teodora",
    org: "PRIME Iași",
  },
  {
    icon: FaPlane,
    label: "Studying & Working Abroad: Global Mobility and Cultural Adaptation",
    description:
      "What really happens when you leave home? Navigating cultural shock, building belonging in new environments, and how international experience shapes identity and future opportunities.",
    speaker: "Târpescu Cristian",
    org: "ESN",
  },
];

export const TopicsSection = () => {
  return (
    <CustomSection bg="bg-colorBG" id="topics">
      <SectionContent title="CONFERENCE TOPICS" subtitle="WHAT WE EXPLORE">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {topics.map(({ icon: Icon, label, description, speaker, org }) => (
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
              <div className="flex items-center justify-between pt-1 border-t border-darkTxt/10">
                <span
                  className="flex items-center gap-1 text-sm font-medium text-primary cursor-pointer hover:underline"
                  onClick={() =>
                    document
                      .getElementById("speakers")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  <FaArrowDown size={10} />
                  {speaker}
                </span>
                <span
                  className="text-xs font-bold text-primary 
    bg-primary/20 hover:bg-primary/30 rounded-full px-3 py-1 
    tracking-wide cursor-pointer transition-colors duration-200"
                  onClick={() =>
                    document
                      .getElementById("speaker-ngos")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {org}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionContent>
    </CustomSection>
  );
};
