import { HeroHeader } from "./HeroHeader";
import { PrimaryButton } from "../Universal/PrimaryButton";
import conferenceHeader from "../../assets/images/conferenceHeader.webp";
import {
  TimerDisplay,
  CONFERENCE_DATE,
} from "../PageSpecific/Conference/TimerDisplay";
import { useNavigate } from "react-router";
import { FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import { GENERAL_URLS } from "../../data/Links";
import { useCountdown } from "../../hooks/useCountdown";

export const ConferencePageHeader = () => {
  const navigate = useNavigate();

  // Single source of truth for the countdown data
  const countdown = useCountdown(CONFERENCE_DATE);
  const { isFinished } = countdown;

  return (
    <HeroHeader
      backgroundImageSrc={conferenceHeader}
      alignContent="left"
      overlayColorClass="bg-[#0077b6]"
      overlayOpacityClass="opacity-80 md:opacity-85 mix-blend-multiply"
      heightClass="min-h-[70vh] md:min-h-[80vh]"
    >
      <div className="flex flex-col gap-6 md:gap-[3vh] text-white h-full justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-[4vw] font-extrabold tracking-tight leading-[1.1]">
          BEST Intercultural <br />
          Conference
        </h1>

        <div className="flex flex-col gap-6 w-fit md:w-auto">
          {/* Countdown */}
          <div className="flex flex-col gap-2">
            <p className="text-md md:text-[1.5vw] font-medium text-gray-100">
              Time left to join the conference:
            </p>
            {/* Pass all countdown props down to the display */}
            <TimerDisplay {...countdown} />
          </div>

          {/* CTAs */}
          {!isFinished && (
            <div className="flex flex-row gap-3">
              <PrimaryButton
                size="large"
                analyticsLabel="Join OOD Now"
                onClick={() =>
                  window.open(GENERAL_URLS.OOD_JOIN_FORM_URL, "_blank")
                }
                className="flex items-center gap-2 bg-primary hover:bg-primary-dark
        text-white rounded-full px-6 py-3
        md:px-[2vw] md:py-[2vh] font-bold text-sm
        md:text-[1.1vw] transition-colors duration-300"
              >
                <FaCalendarAlt size={14} /> Join Now
              </PrimaryButton>
              <PrimaryButton
                size="normal"
                analyticsLabel="Learn More"
                onClick={() => {
                  navigate("/conference#topics");
                  setTimeout(
                    () => navigate("/conference", { replace: true }),
                    200,
                  );
                }}
                className="flex items-center gap-2 bg-transparent hover:bg-white/10
        text-white border-2 border-white/70 rounded-full px-6 py-3
        md:px-[2vw] md:py-[2vh] font-bold text-sm
        md:text-[1.1vw] transition-colors duration-300"
              >
                Learn More <FaChevronDown size={12} />
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>
    </HeroHeader>
  );
};
