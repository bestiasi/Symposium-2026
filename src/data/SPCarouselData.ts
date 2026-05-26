import { SPONSOR_LINKS } from "./Links";

import brdLogo from "../assets/logos/partners/pa/brd.svg";
import fdscLogo from "../assets/logos/partners/pa/fdsc.png";
import ffffLogo from "../assets/logos/partners/pa/ffff.png";

export const STRATEGIC_ALT_TEXTS = {
  FFFF: "Friends For Friends Foundation",
  FDSC: "Civil Society Development Foundation",
  BRD: "BRD Groupe Societe Generale",
};

export const STRATEGIC_PARTNERS_CAROUSEL_ITEMS = [
  {
    id: 1,
    imageSrc: brdLogo,
    altText: STRATEGIC_ALT_TEXTS.BRD,
    Url: (SPONSOR_LINKS as any).BRD_LINK || "#",
    isRedirect: false,
  },
  {
    id: 2,
    imageSrc: fdscLogo,
    altText: STRATEGIC_ALT_TEXTS.FDSC,
    Url: (SPONSOR_LINKS as any).FDSC_LINK || "#",
    isRedirect: false,
  },
  {
    id: 3,
    imageSrc: ffffLogo,
    altText: STRATEGIC_ALT_TEXTS.FFFF,
    Url: (SPONSOR_LINKS as any).FFFF_LINK || "#",
    isRedirect: false,
  },
];
