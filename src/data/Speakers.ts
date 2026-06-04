import { NGO_LINKS } from "./Links";
import CICIA from "../assets/speakers/cicia.webp";
import FFFF from "../assets/speakers/ffff.webp";
import ESN from "../assets/speakers/esn.webp";
import PRIME from "../assets/speakers/prime.webp";

export interface Speaker {
  id: number;
  lastName: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  shouldSplitName: boolean;
}

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: 4,
    lastName: "Tărpescu",
    name: "Cristian",
    role: "President of ESN",
    image: ESN,
    linkedin: NGO_LINKS.ESN,
    shouldSplitName: false,
  },
  {
    id: 1,
    lastName: "Tăușance",
    name: "Vlad",
    role: "Strategy Director at FFFF",
    image: FFFF,
    linkedin: NGO_LINKS.FFFF,
    shouldSplitName: false,
  },
  {
    id: 2,
    lastName: "Andronache",
    name: "Mălina-Georgia",
    role: "Volunteer at CICIA",
    image: CICIA,
    linkedin: NGO_LINKS.CICIA,
    shouldSplitName: true,
  },
  {
    id: 3,
    lastName: "Spătărescu",
    name: "Bianca Teodora",
    role: "Volunteer at PRIME Iași",
    image: PRIME,
    linkedin: NGO_LINKS.PRIME,
    shouldSplitName: true,
  },
];
