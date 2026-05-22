import { SPONSOR_LINKS } from "./Links";

// 1. Target the partner logos using Vite's glob pattern
const logoModules = import.meta.glob(
  "../assets/logos/partners/pa/*.{png,svg,webp,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
);

// 2. Custom mapping for outliers where filenames don't cleanly match the alt text
const CUSTOM_ALT_TEXTS: Record<string, string> = {
  FFF: "Friends For Friends Foundation",
  FDSC: "Civil Society Development Foundation",
  IULIUS: "IULIUS MALL IASI",
  BURN: "BURN ENERGY DRINK",
  VIVAFM: "VIVA FM",
};

// 3. Extract and build only the items from the 'pa' subfolder
export const PA_CAROUSEL_ITEMS = Object.entries(logoModules)
  // Filter to only include images coming from the /partners/pa/ directory
  .filter(([path]) => path.includes("/partners/pa/"))
  .map(([path, src], index) => {
    // Extract filename (e.g., 'fff' from '../assets/logos/partners/pa/fff.png')
    const fileName = path.split("/").pop()?.split(".")[0] || "";
    const nameUpper = fileName.toUpperCase();

    // Look up link inside our clean SPONSOR_LINKS object
    const linkKey = `${nameUpper}_LINK`;
    const targetUrl = (SPONSOR_LINKS as any)[linkKey];

    return {
      id: index + 1,
      imageSrc: src as string,
      altText: CUSTOM_ALT_TEXTS[nameUpper] || nameUpper,
      Url: targetUrl || "#",
      isRedirect: false, // Matches your original static data setting
    };
  });
