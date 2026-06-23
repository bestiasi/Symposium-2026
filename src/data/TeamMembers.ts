import { TEAM_LINKEDINS } from "./Links";

const teamImages = import.meta.glob("../assets/team/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const getTeamImage = (fileName: string) => {
  const match = Object.entries(teamImages).find(([path]) =>
    path.toLowerCase().endsWith(`/${fileName.toLowerCase()}.jpg`),
  );
  return match ? (match[1] as string) : "";
};

// 2. Clean static data list without any boilerplate imports
export const TEAM_MEMBERS = [
  {
    id: 1,
    lastName: "Ifrim",
    name: "Simina-Ana",
    role: "HR Organiser",
    image: getTeamImage("simina"),
    linkedin: TEAM_LINKEDINS.SIMINA_LINKEDIN,
    shouldSplitName: true,
  },
  {
    id: 2,
    lastName: "Ciobanu",
    name: "Ana-Maria",
    role: "Main Organizer",
    image: getTeamImage("ana"),
    linkedin: TEAM_LINKEDINS.ANA_LINKEDIN,
    shouldSplitName: true,
  },
  {
    id: 3,
    lastName: "Petrișor",
    name: "Eduard-Gabriel",
    role: "IT & Logistics",
    image: getTeamImage("edi"),
    linkedin: TEAM_LINKEDINS.EDI_LINKEDIN,
    shouldSplitName: true,
  },
  {
    id: 4,
    lastName: "Ciobotaru",
    name: "Diana",
    role: "Design",
    image: getTeamImage("diana"),
    linkedin: TEAM_LINKEDINS.DIANA_LINKEDIN,
    shouldSplitName: false,
  },
  {
    id: 6,
    lastName: "Chelea",
    name: "Diana",
    role: "Official Open Day",
    image: getTeamImage("diana_ch"),
    linkedin: TEAM_LINKEDINS.DIANA_CH_LINKEDIN,
    shouldSplitName: false,
  },
  {
    id: 8,
    lastName: "Eftimie",
    name: "Elisabetta Valentina",
    role: "FR Products",
    image: getTeamImage("valentina"),
    linkedin: TEAM_LINKEDINS.VALENTINA_LINKEDIN,
    shouldSplitName: true,
  },
  {
    id: 9,
    lastName: "Flutur",
    name: "Ancuta Ana-Maria",
    role: "Location, Transport & Accommodation",
    image: getTeamImage("ancuta"),
    linkedin: TEAM_LINKEDINS.ANCUTA_LINKEDIN,
    shouldSplitName: true,
  },
  {
    id: 10,
    lastName: "Buhati",
    name: "Dana",
    role: "Food",
    image: getTeamImage("dana"),
    linkedin: TEAM_LINKEDINS.DANA_LINKEDIN,
    shouldSplitName: false,
  },
  {
    id: 11,
    lastName: "Moldovanu",
    name: "Ioana",
    role: "HR Participants",
    image: getTeamImage("ioana"),
    linkedin: TEAM_LINKEDINS.IOANA_LINKEDIN,
    shouldSplitName: false,
  },
  {
    id: 12,
    lastName: "Brebu",
    name: "Teodor",
    role: "Activities",
    image: getTeamImage("teob"),
    linkedin: TEAM_LINKEDINS.TEODOR_LINKEDIN,
    shouldSplitName: false,
  },
];
