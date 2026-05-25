import { SPEAKER_LINKS } from "./Links";
import CICIA from "../assets/speakers/cicia.png";
import FFFF from "../assets/speakers/ffff.png";
import ESN from "../assets/speakers/esn.jpg";

export interface Speaker {
  id?: number;
  lastName: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  shouldSplitName: boolean;
}

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: 1,
    lastName: "Tărpescu",
    name: "Cristian",
    role: "President of ESN",
    image: ESN,
    linkedin: SPEAKER_LINKS.ESN,
    shouldSplitName: false,
  },
  {
    id: 2,
    lastName: "Tăușance",
    name: "Vlad",
    role: "Strategy Director at FFFF",
    image: FFFF,
    linkedin: SPEAKER_LINKS.FFFF,
    shouldSplitName: false,
  },
  {
    id: 3,
    lastName: "Andronache",
    name: "Mălina-Georgia",
    role: "Volunteer at CICIA",
    image: CICIA,
    linkedin: SPEAKER_LINKS.CICIA,
    shouldSplitName: true,
  },
];
