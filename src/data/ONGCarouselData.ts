import { NGO_LINKS } from "./Links";

// 1. Manually import the images (change the extensions if yours are .svg or .jpg)
import ffff from "../assets/logos/partners/sponsors/ong/ffff.png";
import cicia from "../assets/logos/partners/sponsors/ong/cicia.webp";
import esn from "../assets/logos/partners/sponsors/ong/esn.png";
import prime from "../assets/logos/partners/sponsors/ong/prime.webp";

// 2. Build the array exactly how you want it to appear
export const OS_CAROUSEL_ITEMS = [
  {
    id: 1,
    imageSrc: ffff,
    altText: "FFFF logo",
    Url: NGO_LINKS.FFFF,
    isRedirect: false,
  },
  {
    id: 2,
    imageSrc: cicia,
    altText: "CICIA logo",
    Url: NGO_LINKS.CICIA,
    isRedirect: false,
  },
  {
    id: 4,
    imageSrc: esn,
    altText: "ESN logo",
    Url: NGO_LINKS.ESN,
    isRedirect: false,
  },
  {
    id: 3,
    imageSrc: prime,
    altText: "PRIME Iași logo",
    Url: NGO_LINKS.PRIME,
    isRedirect: false,
  },
];
