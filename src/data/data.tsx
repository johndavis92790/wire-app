export const InsulationTypes = [
  "FEB",
  "FEPB",
  "MI",
  "PFA",
  "RHH",
  "RHW",
  "RHW-2",
  "SA",
  "SIS",
  "TBS",
  "THHN",
  "THHW",
  "THW",
  "THW-2",
  "THWN",
  "THWN-2",
  "TW",
  "UF",
  "USE",
  "USE-2",
  "XHH",
  "XHHN",
  "XHHW",
  "XHHW-2",
  "XHWN",
  "XHWN-2",
  "Z",
  "ZW",
  "ZW-2",
];

export const AmbientTemps = [
  { label: "10° or less C (50° or less F)", lowValue: 0, highValue: 10 },
  { label: "11–15° C (51–59° F)", lowValue: 11, highValue: 15 },
  { label: "16–20° C (60–68° F)", lowValue: 16, highValue: 20 },
  { label: "21–25° C (69–77° F)", lowValue: 21, highValue: 25 },
  { label: "26–30° C (78–86° F)", lowValue: 26, highValue: 30 },
  { label: "31–35° C (87–95° F)", lowValue: 31, highValue: 35 },
  { label: "36–40° C (96–104° F)", lowValue: 36, highValue: 40 },
  { label: "41–45° C (105–113° F)", lowValue: 41, highValue: 45 },
  { label: "46–50° C (114–122° F)", lowValue: 46, highValue: 50 },
  { label: "51–55° C (123–131° F)", lowValue: 51, highValue: 55 },
  { label: "56–60° C (132–140° F)", lowValue: 56, highValue: 60 },
  { label: "61–65° C (141–149° F)", lowValue: 61, highValue: 65 },
  { label: "66–70° C (150–158° F)", lowValue: 66, highValue: 70 },
  { label: "71–75° C (159–167° F)", lowValue: 71, highValue: 75 },
  { label: "76–80° C (168–176° F)", lowValue: 76, highValue: 80 },
  { label: "81–85° C (177–185° F)", lowValue: 81, highValue: 85 },
];

export const Table31015C1 = [
  { label: "1-3", lowValue: 1, highValue: 3, percentage: 1 },
  { label: "4-6", lowValue: 4, highValue: 6, percentage: 0.8 },
  { label: "7-9", lowValue: 7, highValue: 9, percentage: 0.7 },
  { label: "10-20", lowValue: 10, highValue: 20, percentage: 0.5 },
  { label: "21-30", lowValue: 21, highValue: 30, percentage: 0.45 },
  { label: "31-40", lowValue: 31, highValue: 40, percentage: 0.4 },
  { label: "41 & above", lowValue: 41, highValue: 100, percentage: 0.35 },
];

export const ConductorSizes = [
  "18 AWG",
  "16 AWG",
  "14 AWG",
  "12 AWG",
  "10 AWG",
  "8 AWG",
  "6 AWG",
  "4 AWG",
  "3 AWG",
  "2 AWG",
  "1 AWG",
  "1/0 AWG",
  "2/0 AWG",
  "3/0 AWG",
  "4/0 AWG",
];

export const Types31016 = [
  ["TW", "UF"],
  ["RHW", "THHW", "THW", "THWN", "XHHW", "XHWN", "USE", "ZW"],
  [
    "TBS",
    "SA",
    "SIS",
    "FEP",
    "FEPB",
    "MI",
    "PFA",
    "RHH",
    "RHW-2",
    "THHN",
    "THHW",
    "THW-2",
    "THWN-2",
    "USE-2",
    "XHH",
    "XHHW",
    "XHHW-2",
    "XHWN",
    "XHWN-2",
    "XHHN",
    "Z",
    "ZW-2",
  ],
  ["TW", "UF"],
  ["RHW", "THHW", "THW", "THWN", "XHHW", "XHWN", "USE"],
  [
    "TBS",
    "SA",
    "SIS",
    "THHN",
    "THHW",
    "THW-2",
    "THWN-2",
    "RHH",
    "RHW-2",
    "USE-2",
    "XHH",
    "XHHW",
    "XHHW-2",
    "XHWN",
    "XHWN-2",
    "XHHN",
  ],
];

export const conductorData = [
  { material: "Copper", rating: "60°C (140°F)" },
  { material: "Copper", rating: "75°C (167°F)" },
  { material: "Copper", rating: "90°C (194°F)" },
  { material: "Aluminum", rating: "60°C (140°F)" },
  { material: "Aluminum", rating: "75°C (167°F)" },
  { material: "Aluminum", rating: "90°C (194°F)" },
];

export const Table31015B1 = [
  [
    "Ambient Temperature",
    conductorData[0].rating,
    conductorData[1].rating,
    conductorData[2].rating,
  ],
  [AmbientTemps[0], 1.29, 1.2, 1.15],
  [AmbientTemps[1], 1.22, 1.15, 1.12],
  [AmbientTemps[2], 1.15, 1.11, 1.08],
  [AmbientTemps[3], 1.08, 1.05, 1.04],
  [AmbientTemps[4], 1, 1, 1],
  [AmbientTemps[5], 0.91, 0.94, 0.96],
  [AmbientTemps[6], 0.82, 0.88, 0.91],
  [AmbientTemps[7], 0.71, 0.82, 0.87],
  [AmbientTemps[8], 0.58, 0.75, 0.82],
  [AmbientTemps[9], 0.41, 0.67, 0.76],
  [AmbientTemps[10], null, 0.58, 0.71],
  [AmbientTemps[11], null, 0.47, 0.65],
  [AmbientTemps[12], null, 0.33, 0.58],
  [AmbientTemps[13], null, null, 0.5],
  [AmbientTemps[14], null, null, 0.41],
  [AmbientTemps[15], null, null, 0.29],
];

export const Table31016 = [
  [
    {
      ConductorMaterial: "",
      ConductorTempRating: "",
      Types: [""],
    },
    {
      ConductorMaterial: conductorData[0].material,
      ConductorTempRating: conductorData[0].rating,
      Types: Types31016[0],
    },
    {
      ConductorMaterial: conductorData[1].material,
      ConductorTempRating: conductorData[1].rating,
      Types: Types31016[1],
    },
    {
      ConductorMaterial: conductorData[2].material,
      ConductorTempRating: conductorData[2].rating,
      Types: Types31016[2],
    },
    {
      ConductorMaterial: conductorData[3].material,
      ConductorTempRating: conductorData[3].rating,
      Types: Types31016[3],
    },
    {
      ConductorMaterial: conductorData[4].material,
      ConductorTempRating: conductorData[4].rating,
      Types: Types31016[4],
    },
    {
      ConductorMaterial: conductorData[5].material,
      ConductorTempRating: conductorData[5].rating,
      Types: Types31016[5],
    },
  ],
  ["18 AWG", null, null, 14, null, null, null],
  ["16 AWG", null, null, 18, null, null, null],
  ["14 AWG", 15, 20, 25, null, null, null],
  ["12 AWG", 20, 25, 30, 15, 20, 25],
  ["10 AWG", 30, 35, 40, 25, 30, 35],
  ["8 AWG", 40, 50, 55, 35, 40, 45],
  ["6 AWG", 55, 65, 75, 40, 50, 55],
  ["4 AWG", 70, 85, 95, 55, 65, 75],
  ["3 AWG", 85, 100, 115, 65, 75, 85],
  ["2 AWG", 95, 115, 130, 75, 90, 100],
  ["1 AWG", 110, 130, 145, 85, 100, 115],
  ["1/0 AWG", 125, 150, 170, 100, 120, 135],
  ["2/0 AWG", 145, 175, 195, 115, 135, 150],
  ["3/0 AWG", 165, 200, 225, 130, 155, 175],
  ["4/0 AWG", 195, 230, 260, 150, 180, 205],
];

export const testTable = [
  ["Size", "Copper", "Aluminum"],
  ["size1", null, null],
  ["size2", null, null],
  ["size3", 15, null],
  ["size4", 20, 15],
  ["size5", 30, 25],
];

export const Prompts = [
  {
    type: "Decision",
    code: "D1",
    prompt: "Set the insulation type",
    yes: "P2",
    no: "P1",
  },
  // {
  //   type: "Decision",
  //   code: "D2",
  //   prompt:
  //     "Do installation conditions, such as location type, affect temperature rating of insulation?",
  //   yes: "P2",
  //   no: "D3",
  // },
  {
    type: "Decision",
    code: "D3",
    prompt: "Is the conductor size known?",
    yes: "P3",
    no: "D6",
  },
  {
    type: "Decision",
    code: "D4",
    prompt:
      "Is the ambient temperature of the installation different than 30⁰C (86⁰F) for greater than 10 feet or 10% of total circuit length, whichever is smaller?",
    yes: "P4",
    no: "D5",
  },
  {
    type: "Decision",
    code: "D5",
    prompt:
      "Are there more than three current-carrying conductors in the raceway or cable, or are individual conductors or cables installed without spacing for greater than 24 inches?",
    yes: "P5",
    no: "D9",
  },
  {
    type: "Decision",
    code: "D6",
    prompt:
      "If conductor size is not known, is the amount of current to be carried by the conductor known?",
    yes: "D7",
    no: "P6",
  },
  {
    type: "Decision",
    code: "D7",
    prompt:
      "Is the ambient temperature of the installation different than 30⁰C (86⁰F) for greater than 10 feet or 10% of total circuit length, whichever is smaller?",
    yes: "P7",
    no: "D8",
  },
  {
    type: "Decision",
    code: "D8",
    prompt:
      "Are there more than three current-carrying conductors in the raceway or cable, or are individual conductors or cables installed without spacing for greater than 24 inches?",
    yes: "P8",
    no: "P9",
  },
  {
    type: "Decision",
    code: "D9",
    prompt:
      "Is the load above 100A or are the terminations marked for a conductor size larger than 1 AWG? [See 110.14(C)(1).]",
    yes: "D10",
    no: "D13",
  },
  {
    type: "Decision",
    code: "D10",
    prompt:
      "Is the conductor insulation rated at 75⁰C? (Note: 60⁰C insulation is not permitted here.)",
    yes: "ANSWER1",
    no: "D11",
  },
  {
    type: "Decision",
    code: "D11",
    prompt:
      "Are the terminations marked with a temperature rating equal to or higher than the rating of the conductor insulation?",
    yes: "ANSWER1",
    no: "D12",
  },
  {
    type: "Decision",
    code: "D12",
    prompt:
      "Does the ampacity of selected conductor, after the application of adjustment and correction factors, exceed that of the 75⁰C column for the same size and material?",
    yes: "ANSWER2",
    no: "ANSWER1",
  },
  {
    type: "Decision",
    code: "D13",
    prompt: "Is the conductor insulation rated at 60⁰C?",
    yes: "ANSWER4",
    no: "D14",
  },
  {
    type: "Decision",
    code: "D14",
    prompt:
      "Are the terminations marked with a temperature rating equal to or higher than the rating of the conductor insulation?",
    yes: "ANSWER4",
    no: "D15",
  },
  {
    type: "Decision",
    code: "D15",
    prompt:
      "Does the ampacity of selected conductor, after the application of adjustment and correction factors, exceed that of the 60⁰C column for the same size and material?",
    yes: "ANSWER3",
    no: "ANSWER4",
  },
  {
    type: "Process",
    code: "P1",
    prompt:
      "Determine the insulation type by consulting the conductor marking info or the manufacturer's information.",
    nextDecision: "P2",
  },
  {
    type: "Process",
    code: "P2",
    prompt:
      "Using Table 310.4, determine applicable temperature rating of insulation based on installation parameters, such as wet, damp, or dry location",
    nextDecision: "D3",
  },
  {
    type: "Process",
    code: "P3",
    prompt:
      "Determine ampacity for given size from applicable column of Table 310.16 for insulation temperature rating and conductor material.",
    nextDecision: "D4",
  },
  {
    type: "Process",
    code: "P4",
    prompt:
      "Determine temperature correction factor from Table 310.15(B)(1) based on conductor insulation rating and actual ambient temperature of installation. Multiply ampacity from Table 310.16 (P3) by this factor.",
    nextDecision: "D5",
  },
  {
    type: "Process",
    code: "P5",
    prompt: `Determine ampacity adjustment factor based on total number of conductors in raceway, cable, or installed without maintaining spacing as specified in 310.15(C)(1). Multiply ampacity (P4 if "Yes" for D4; P3 if "No" for D4) by this factor`,
    nextDecision: "D9",
  },
  {
    type: "Process",
    code: "P6",
    prompt: "Determine load current in accordance with Article 220.",
    nextDecision: "D7",
  },
  {
    type: "Process",
    code: "P7",
    prompt:
      "Determine temperature correction factor in Table 310.15(B)(1) based on temperature rating of conductor insulation that will be used and actual ambient temperature of installation. Divide load current by this factor.",
    nextDecision: "D8",
  },
  {
    type: "Process",
    code: "P8",
    prompt: `Determine ampacity adjustment factor based on total number of conductors in raceway, cable, or installed without maintaining spacing as specified in 310.15(C)(1). Divide load current (Step P7 if "Yes" for D7; Step P6 or circuit current if "NO" for D7) by this factor.`,
    nextDecision: "P9",
  },
  {
    type: "Process",
    code: "P9",
    prompt:
      "Using the applicable column in Table 310.16 based on temperature rating and conductor material, determine conductor size with sufficient ampacity to serve the load current, as modified by P7 and P8, if applicable.",
    nextDecision: "D9",
  },
  {
    type: "Answer",
    code: "ANSWER1",
    prompt: "The conductor size determined on the previous page is sufficient.",
  },
  {
    type: "Answer",
    code: "ANSWER2",
    prompt: "ANSWER2 Prompt",
  },
  {
    type: "Answer",
    code: "ANSWER3",
    prompt: "ANSWER3 Prompt",
  },
  {
    type: "Answer",
    code: "ANSWER4",
    prompt: "The conductor size determined on the previous page is sufficient.",
  },
];
