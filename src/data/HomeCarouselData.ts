import { SPONSOR_LINKS } from "./Links";

// 1. Fetch all partner logos recursively (covers 'pa', 'event', etc.)
const logoModules = import.meta.glob(
  "../assets/logos/partners/**/*.{png,svg,webp,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
);

// 2. Custom mapping for foundations/alt text exceptions
const CUSTOM_ALT_TEXTS: Record<string, string> = {
  FFF: "Friends For Friends Foundation",
  FDSC: "Civil Society Development Foundation",
  IULIUS: "IULIUS MALL IASI",
  BURN: "BURN ENERGY DRINK",
  VIVAFM: "VIVA FM",
};

// 3. Filter down to only the files we need for this specific general carousel
const TARGET_LOGOS = [
  "INGENIUM",
  "WINK",
  "NAGARRO",
  "IULIUS",
  "BURN",
  "MAGNA",
  "MIGDALIN",
  "BRD",
  "FDSC",
  "FFF",
  "JUMPY",
  "VIVAFM",
];

export const CAROUSEL_ITEMS = Object.entries(logoModules)
  .map(([path, src]) => {
    const fileName = path.split("/").pop()?.split(".")[0] || "";
    const nameUpper = fileName.toUpperCase();
    return { nameUpper, src: src as string };
  })
  // Only include items defined in our array above
  .filter((item) => TARGET_LOGOS.includes(item.nameUpper))
  // Sort them to strictly match the exact order of TARGET_LOGOS
  .sort(
    (a, b) =>
      TARGET_LOGOS.indexOf(a.nameUpper) - TARGET_LOGOS.indexOf(b.nameUpper),
  )
  .map((item, index) => {
    const isIngenium = item.nameUpper === "INGENIUM";
    const linkKey = `${item.nameUpper}_LINK`;

    // Dynamic link lookup from your clean links config file
    const externalUrl = (SPONSOR_LINKS as any)[linkKey];

    return {
      id: index + 1,
      imageSrc: item.src,
      altText: CUSTOM_ALT_TEXTS[item.nameUpper] || item.nameUpper,
      // If it's Ingenium, route locally. Otherwise, grab external link.
      Url: isIngenium ? "/partners" : externalUrl || "#",
      isRedirect: isIngenium, // true for local routes, false for external links in your config
    };
  });
