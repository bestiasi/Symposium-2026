import { SPONSOR_LINKS } from "./Links";
import { STRATEGIC_ALT_TEXTS } from "./SPCarouselData";

// 1. Target the partner logos using Vite's glob pattern
const logoModules = import.meta.glob(
  "../assets/logos/partners/pa/*.{png,svg,webp,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
);

// 2. Custom mapping for dynamic dynamic file outliers
const CUSTOM_ALT_TEXTS: Record<string, string> = {
  ...STRATEGIC_ALT_TEXTS, // Spread to reuse keys for exclusion checks
  IULIUS: "IULIUS MALL IASI",
  BURN: "BURN ENERGY DRINK",
  VIVAFM: "VIVA FM",
};

// Keys to filter out of the dynamic processing
const EXCLUDED_KEYS = Object.keys(STRATEGIC_ALT_TEXTS);

// 3. Extract and build the remaining items
export const PA_CAROUSEL_ITEMS = Object.entries(logoModules)
  .filter(([path]) => {
    const isCorrectFolder = path.includes("/partners/pa/");
    const fileName = path.split("/").pop()?.split(".")[0] || "";
    const isExcluded = EXCLUDED_KEYS.includes(fileName.toUpperCase());

    return isCorrectFolder && !isExcluded; // Only include if it's in the folder AND not in the static file
  })
  .map(([path, src], index) => {
    const fileName = path.split("/").pop()?.split(".")[0] || "";
    const nameUpper = fileName.toUpperCase();
    const linkKey = `${nameUpper}_LINK`;

    return {
      id: index + 1,
      imageSrc: src as string,
      altText: CUSTOM_ALT_TEXTS[nameUpper] || nameUpper,
      Url: (SPONSOR_LINKS as any)[linkKey] || "#",
      isRedirect: false,
    };
  });
