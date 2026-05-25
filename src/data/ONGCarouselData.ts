import { NGO_LINKS } from "./Links";

// 1. Manually import the images (change the extensions if yours are .svg or .jpg)
import ffff from "../assets/logos/partners/sponsors/ong/ffff.png";
import cicia from "../assets/logos/partners/sponsors/ong/cicia.jpg";
import esn from "../assets/logos/partners/sponsors/ong/esn.png";

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
    id: 3,
    imageSrc: esn,
    altText: "ESN logo",
    Url: NGO_LINKS.ESN,
    isRedirect: false,
  },
];
