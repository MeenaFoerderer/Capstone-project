const data = [
  {
    id: "01",
    title:
      "NO SWIMMING DINOSAURS HERE: NEW INSIGHTS ON MANUS-DOMINATED DINOSAUR TRACKS FROM THE MAYAN DUDE RANCH IN BANDERA, TEXAS",
    authors: ["Adams", "Miller", "Smart", "Funk"],
    session: "01 Romer Prize",
    time: "8:00 AM",
    room: "Great Hall",
  },
  {
    id: "02",
    title:
      "DEVELOPING A SCALING METHOD TO ESTIMATE THE CENTER OF MASS IN DINOSAURS",
    authors: ["Allison", "Cheb", "Tanaka"],
    session: "01 Romer Prize",
    time: "8:20 AM",
    room: "Great Hall",
  },
  {
    id: "03",
    title:
      "DIVERGENT STRATEGIES FOR HIGH-FIBER HERBIVORY AMONG EARLY-DIVERGING ORNITHISCHIAN DINOSAURS",
    authors: ["Barrett"],
    session: "01 Romer Prize",
    time: "8:40 AM",
    room: "Great Hall",
  },
  {
    id: "04",
    title:
      "A PATHOLOGICAL FEMUR OF AN IGUANDONTIAN DINOSAUR WITH MEDULLARY-LIKE BONE INVOLVEMENT IN THE HEALING PROCESS",
    authors: ["Bertozzo", "Caravaggio", "DaVinci"],
    session: "01 Romer Prize",
    time: "9:00 AM",
    room: "Great Hall",
  },
  {
    id: "05",
    title:
      "HORNCORE FRACTURE IN ANCHICERATOPS (ORNITHISCHIA, CERATOPSIDAE), AND THE OCCURRENCE OF PATHOLOGICAL HORN FRACTURES IN CERATOPSIDAE",
    authors: ["Brown", "Schwab"],
    session: "01 Romer Prize",
    time: "09:20 AM",
    room: "Great Hall",
  },
  {
    id: "06",
    title:
      "OSTEOLOGY AND KINEMATICS OF THE PACHYCEPHALOSAURID VERTEBRAL COLUMN PROVIDES FURTHER EVIDENCE REFUTING THE AGONISTIC HEAD-BUTTING HYPOTHESIS",
    authors: ["Woodruff", "Dandy", "Everett", "Chan"],
    session: "01 Romer Prize",
    time: "09:40 AM",
    room: "Great Hall",
  },
  {
    id: "07",
    title:
      "TOOTH REPLACEMENT CYCLES AND THE ENDOCRANIAL ANATOMY OF A NEW ORNITHOPOD DINOSAUR FROM THE LATE CRETACEOUS OF ANTARCTICA",
    authors: ["Brown", "Casey"],
    session: "01 Romer Prize",
    time: "10:20 AM",
    room: "Great Hall",
  },
  {
    id: "08",
    title: "THE CONTRIBUTION OF SOFT TISSUES TO THE NECK OF PTEROSAURS",
    authors: ["Buchmann"],
    session: "01 Romer Prize",
    time: "10:40 AM",
    room: "Great Hall",
  },
  {
    id: "09",
    title:
      "PATTERNS OF MACROWEAR ON IN SITU TYRANNOSAURID DENTITIONS FROM THE UPPER CRETACEOUS OF NORTH AMERICA",
    authors: ["Wyenberg-Henzler", "Stallnick", "Greer", "Thompson"],
    session: "01 Romer Prize",
    time: "11:00 AM",
    room: "Great Hall",
  },
  {
    id: "10",
    title:
      "A NEW SPECIES OF CAENAGNATHIDAE (THEROPODA: DINOSAURIA) FROM THE OLDMAN FORMATION (CAMPANIAN: LATE CRETACEOUS) OF ALBERTA, CANADA",
    authors: ["Wilkinson", "Emery", "Armstrong"],
    session: "01 Romer Prize",
    time: "11:20 AM",
    room: "Great Hall",
  },
  {
    id: "11",
    title:
      "AN UNRECOGNIZED BOUNTY: THE FOURTH DICRAEOSAURID SAUROPOD FROM THE MORRISON FORMATION (LATE JURASSIC) OF NORTH AMERICA",
    authors: ["Whitlock", "Nye", "Swartout", "Gomes", "Greer"],
    session: "01 Romer Prize",
    time: "11:40 AM",
    room: "Great Hall",
  },
  {
    id: "12",
    title:
      "FROM SEA TO SKY: WATER LAUNCH AND SOARING PERFORMANCE IN THE LATE CRETACEOUS PTEROSAUR, NYCTOSAURUS",
    authors: ["Welch"],
    session: "02 Dinosaurs",
    time: "01:00 PM",
    room: "Great Hall",
  },
  {
    id: "13",
    title: "EVOLUTIONARY MODE IN DERIVED TYRANNOSAURINAE",
    authors: ["Warshaw", "Great", "Milligan"],
    session: "02 Dinosaurs",
    time: "01:20 PM",
    room: "Great Hall",
  },
  {
    id: "14",
    title:
      "MAKING A RUN FOR IT: THE IMPACT OF FLIGHTADAPTIVE TRAITS ON NICHE PARTITIONING IN CARNIVOROUS NON-AVIAN THEROPODS",
    authors: ["Van Vranken", "Loeffler"],
    session: "02 Dinosaurs",
    time: "01:40 PM",
    room: "Great Hall",
  },
  {
    id: "15",
    title:
      "EVOLUTION OF THE PROPATAGIUM IN THEROPOD DINOSAURS: ANALYSES OF ARTICULATED FOSSIL SKELETONS AND EXTANT AVIAN EMBRYOS",
    authors: ["Uno", "Rearden", "Limbeck"],
    session: "02 Dinosaurs",
    time: "02:00 PM",
    room: "Great Hall",
  },
  {
    id: "16",
    title:
      "A MYSTERIOUS CLUTCH OF ALTERED DINOSAUR EGGS FROM THE TWO MEDICINE FORMATION OF MONTANA",
    authors: ["Tucker", "Gill", "Martin", "Jaeger"],
    session: "02 Dinosaurs",
    time: "02:20 PM",
    room: "Great Hall",
  },
  {
    id: "17",
    title:
      "GONDWANAN THEROPOD DINOSAURS IN THE CENOMANIAN OF SOUTHWESTERN EUROPE",
    speaker: "TORICES",
    authors: ["Torices", "Goswami"],
    session: "02 Dinosaurs",
    time: "02:40 PM",
    room: "Great Hall",
  },
  {
    id: "18",
    title:
      "A DIVERSE DINOSAUR EGG ASSEMBLAGE FROM THE MID-CRETACEOUS JINHUA FORMATION, ZHEJIANG PROVINCE, CHINA",
    authors: ["Tanaka"],
    session: "02 Dinosaurs",
    time: "03:20 PM",
    room: "Great Hall",
  },
  {
    id: "19",
    title:
      "A NEW LONG-NECKED POLYCOTYLID (PLESIOSAURIA: POLYCOTYLIDAE) FROM THE PIERRE SHALE OF WYOMING, U.S.A.",
    authors: ["Street", "Greer"],
    session: "02 Dinosaurs",
    time: "03:40 PM",
    room: "Great Hall",
  },
  {
    id: "20",
    title:
      "A NEW DREPANOSAUR UNGUAL MORPHOTYPE FROM THE SONSELA MEMBER OF PETRIFIED FOREST NATIONAL PARK",
    authors: ["Sodano", "Swartout", "Gomes"],
    session: "02 Dinosaurs",
    time: "04:00 PM",
    room: "Great Hall",
  },
  {
    id: "21",
    title:
      "CHANGING CLIMATE PREFERENCES AND FUNCTIONAL STASIS IN MAMMALIAN COMMUNITIES ACROSS THE PALEOCENE-EOCENE THERMAL MAXIMUM OF THE BIGHORN BASIN, WYOMING",
    authors: ["Whittingham", "Kent", "Boessenecker"],
    session: "03 Mammal Evolution",
    time: "8:00 AM",
    room: "Metro East",
  },
  {
    id: "22",
    title:
      "BUILDING ECOMETRIC MODELS USING SMALL MAMMAL HYPSODONTY TO OBSERVE NOVEL TRAIT-ENVIRONMENTAL RELATIONSHIPS THROUGH TIME IN AFRICA",
    authors: ["Schap"],
    session: "03 Mammal Evolution",
    time: "8:20 AM",
    room: "Metro East",
  },
  {
    id: "23",
    title:
      "DISRUPTION OF TRAITENVIRONMENT RELATIONSHIPS IN AFRICAN MEGAFAUNA COINCIDENT WITH HOMININ EMERGENCE",
    authors: ["Lauer", "Felice"],
    session: "03 Mammal Evolution",
    time: "8:40 AM",
    room: "Metro East",
  },
  {
    id: "24",
    title:
      "DIETARY PALEOECOLOGY OF UNGULATES IN RELATION TO ENVIRONMENTAL CHANGE IN THE MIOCENE DOVE SPRING FORMATION, CALIFORNIA",
    authors: ["Hardy", "Fox", "Daeschler"],
    session: "03 Mammal Evolution",
    time: "9:00 AM",
    room: "Metro East",
  },
  {
    id: "25",
    title:
      "DIFFERENT MACROECOLOGICAL HISTORIES FOR SMALL AND LARGE MAMMALS IN THE MIOCENE SIWALIK RECORD OF PAKISTAN",
    authors: ["Badgley"],
    session: "03 Mammal Evolution",
    time: "09:20 AM",
    room: "Metro East",
  },
  {
    id: "26",
    title:
      "THE EARLY CRETACEOUS PAJA FORMATION BIOTA IN COLOMBIA REVEALS A COMPLEX ECOLOGICAL NETWORK WITH HIGH PREDATOR DIVERSITY SUPPORTED BY MULTIPLE MID-TROPHIC LEVELS",
    authors: ["Cortés", "Nunez"],
    session: "03 Mammal Evolution",
    time: "09:40 AM",
    room: "Metro East",
  },
  {
    id: "27",
    title: "POST-EOCENE RHINOCEROTID DISPERSAL VIA THE NORTH ATLANTIC",
    authors: ["Fraser", "Goodchild", "Campbell", "Hatcher"],
    session: "03 Mammal Evolution",
    time: "10:20 AM",
    room: "Metro East",
  },
  {
    id: "28",
    title:
      "THERE AND BACK AGAIN? PREDICTING MARSUPIAL DISPERSAL ACROSS PALAEOGENE GONDWANA USING THE NICHES OF EXTANT TAXA",
    authors: ["McMinn", "Brink"],
    session: "03 Mammal Evolution",
    time: "10:40 AM",
    room: "Metro East",
  },
  {
    id: "29",
    title:
      "NEW NEOTROPICAL FOSSIL TURTLES FROM COLOMBIA, VENEZUELA, AND PANAMA; PALEOBIOGEOGRAPHICAL AND EVOLUTIONARY HISTORY IMPLICATIONS",
    authors: ["Cadena", "Kozu", "Isaji"],
    session: "03 Mammal Evolution",
    time: "11:00 AM",
    room: "Metro East",
  },
  {
    id: "30",
    title:
      "CLOSE AND YET SO FAR: COMPARING THE PRIMATE FAUNAS IN THE LATE MIOCENE OF YUNNAN, CHINA",
    authors: ["Kelley"],
    session: "03 Mammal Evolution",
    time: "11:20 AM",
    room: "Metro East",
  },
  {
    id: "31",
    title:
      "SHUITANGBA PRESENTS A REMARKABLE SNAPSHOT OF LATE MIOCENE VERTEBRATE EVOLUTION IN EAST ASIA",
    authors: ["Jablonsi", "Langer"],
    session: "03 Mammal Evolution",
    time: "11:40 AM",
    room: "Metro East",
  },
  {
    id: "32",
    title:
      "WILD, WONDERFUL, AND UNINFECTED: LESSONS LEARNED RUNNING IN-PERSON STEM DAY CAMPS DURING A GLOBAL PANDEMIC IN UBAN AND RURAL WEST VIRGINIA",
    authors: ["Haupt", "Schneider", "Maus-Schmeling"],
    session: "04 Education and Outreach",
    time: "01:00 PM",
    room: "Metro East",
  },
  {
    id: "33",
    title:
      "FOSSIL FEVER: PALEONTOLOGY AND PARTNERSHIP IN GRASSLANDS NATIONAL PARK, SASKATCHEWAN, CANADA",
    authors: ["Bamforth"],
    session: "04 Education and Outreach",
    time: "01:20 PM",
    room: "Metro East",
  },
  {
    id: "34",
    title:
      "WHERE THE WILD THINGS WERE: AN ONLINE INTERACTIVE ATLAS OF CHARISMATIC ANIMAL LOSSES FROM THE PLEISTOCENE THROUGH TODAY",
    authors: ["Spano", "Maho"],
    session: "04 Education and Outreach",
    time: "01:40 PM",
    room: "Metro East",
  },
  {
    id: "35",
    title:
      "TACKLING COMPLEX TOPICS IN THE CLASSROOM USING GAMIFICATION WITH CLIMATE CHANGE: THE BOARD GAME",
    authors: ["Drumheller", "Ferguson", "Goldblatt", "Gignac"],
    session: "04 Education and Outreach",
    time: "02:00 PM",
    room: "Metro East",
  },
  {
    id: "36",
    title:
      "PALAEOPOEMS: HIGHLIGHTING POETRY AS SCIENCE COMMUNICATION IN A FREE ONLINE ARCHIVE",
    authors: ["Christison", "Greer"],
    session: "04 Education and Outreach",
    time: "02:20 PM",
    room: "Metro East",
  },
  {
    id: "37",
    title:
      "HANDS-ON WITH 3D - BUILDING MORE THAN STATIC DISPLAYS WITH 3D PRINTING TECHNOLOGY",
    speaker: "GAY",
    authors: ["Gay", "Matthews"],
    session: "04 Education and Outreach",
    time: "02:40 PM",
    room: "Metro East",
  },
  {
    id: "38",
    title: "ESTABLISHING A STATE FOSSIL FOR MINNESOTA (USA)",
    authors: ["Hastings"],
    session: "04 Education and Outreach",
    time: "03:20 PM",
    room: "Metro East",
  },
  {
    id: "39",
    title:
      "FOSSILS AND FIFTH GRADE: PROFESSIONAL DEVELOPMENT TO IMPROVE TEACHING AND LEARNING",
    authors: ["Kirchner-Smith", "Clark"],
    session: "04 Education and Outreach",
    time: "03:40 PM",
    room: "Metro East",
  },
  {
    id: "40",
    title:
      "TRENDING ON TIKTOK - THE POTENTIAL FOR PALEONTOLOGY EDUCATION AND OUTREACH ON THE WORLD’S FASTEST GROWING SOCIAL MEDIA PLATFORM",
    authors: ["Northover", "D'Angelo", "Newman"],
    session: "04 Education and Outreach",
    time: "04:00 PM",
    room: "Metro East",
  },
  {
    id: "41",
    title:
      "AN UNRECOGNIZED BOUNTY: THE FOURTH DICRAEOSAURID SAUROPOD FROM THE MORRISON FORMATION (LATE JURASSIC) OF NORTH AMERICA",
    authors: ["Whitlock", "Nye", "Swartout", "Gomes", "Greer"],
    session: "05 Dinosaur Macroevolution",
    time: "8:00 AM",
    room: "Metro West",
  },
  {
    id: "42",
    title:
      "FROM SEA TO SKY: WATER LAUNCH AND SOARING PERFORMANCE IN THE LATE CRETACEOUS PTEROSAUR, NYCTOSAURUS",
    authors: ["Welch"],
    session: "05 Dinosaur Macroevolution",
    time: "8:20 AM",
    room: "Metro West",
  },
  {
    id: "43",
    title: "EVOLUTIONARY MODE IN DERIVED TYRANNOSAURINAE",
    authors: ["Warshaw", "Great", "Milligan"],
    session: "05 Dinosaur Macroevolution",
    time: "09:00 AM",
    room: "Metro West",
  },
  {
    id: "44",
    title:
      "MAKING A RUN FOR IT: THE IMPACT OF FLIGHTADAPTIVE TRAITS ON NICHE PARTITIONING IN CARNIVOROUS NON-AVIAN THEROPODS",
    authors: ["Van Vranken", "Loeffler"],
    session: "05 Dinosaur Macroevolution",
    time: "09:20 AM",
    room: "Metro West",
  },
  {
    id: "45",
    title:
      "EVOLUTION OF THE PROPATAGIUM IN THEROPOD DINOSAURS: ANALYSES OF ARTICULATED FOSSIL SKELETONS AND EXTANT AVIAN EMBRYOS",
    authors: ["Uno", "Rearden", "Limbeck"],
    session: "05 Dinosaur Macroevolution",
    time: "09:40 AM",
    room: "Metro West",
  },
  {
    id: "46",
    title:
      "A MYSTERIOUS CLUTCH OF ALTERED DINOSAUR EGGS FROM THE TWO MEDICINE FORMATION OF MONTANA",
    authors: ["Tucker", "Gill", "Martin", "Jaeger"],
    session: "05 Dinosaur Macroevolution",
    time: "10:20 AM",
    room: "Metro West",
  },
  {
    id: "47",
    title:
      "GONDWANAN THEROPOD DINOSAURS IN THE CENOMANIAN OF SOUTHWESTERN EUROPE",
    speaker: "TORICES",
    authors: ["Torices", "Goswami"],
    session: "05 Dinosaur Macroevolution",
    time: "10:40 AM",
    room: "Metro West",
  },
  {
    id: "48",
    title:
      "A DIVERSE DINOSAUR EGG ASSEMBLAGE FROM THE MID-CRETACEOUS JINHUA FORMATION, ZHEJIANG PROVINCE, CHINA",
    authors: ["Tanaka"],
    session: "05 Dinosaur Macroevolution",
    time: "11:00 AM",
    room: "Metro West",
  },
  {
    id: "49",
    title:
      "A NEW LONG-NECKED POLYCOTYLID (PLESIOSAURIA: POLYCOTYLIDAE) FROM THE PIERRE SHALE OF WYOMING, U.S.A.",
    authors: ["Street", "Greer"],
    session: "05 Dinosaur Macroevolution",
    time: "11:20 AM",
    room: "Metro West",
  },
  {
    id: "50",
    title:
      "A NEW DREPANOSAUR UNGUAL MORPHOTYPE FROM THE SONSELA MEMBER OF PETRIFIED FOREST NATIONAL PARK",
    authors: ["Sodano", "Swartout", "Gomes"],
    session: "05 Dinosaur Macroevolution",
    time: "11:40 AM",
    room: "Metro West",
  },
  {
    id: "51",
    title:
      "NO SWIMMING DINOSAURS HERE: NEW INSIGHTS ON MANUS-DOMINATED DINOSAUR TRACKS FROM THE MAYAN DUDE RANCH IN BANDERA, TEXAS",
    authors: ["Adams", "Miller", "Smart", "Funk"],
    session: "06 Synapsida",
    time: "01:00 PM",
    room: "Frontenac Hall",
  },
  {
    id: "52",
    title:
      "DEVELOPING A SCALING METHOD TO ESTIMATE THE CENTER OF MASS IN DINOSAURS",
    authors: ["Allison", "Cheb", "Tanaka"],
    session: "06 Synapsida",
    time: "01:20 PM",
    room: "Frontenac Hall",
  },
  {
    id: "53",
    title:
      "DIVERGENT STRATEGIES FOR HIGH-FIBER HERBIVORY AMONG EARLY-DIVERGING ORNITHISCHIAN DINOSAURS",
    authors: ["Barrett"],
    session: "06 Synapsida",
    time: "01:40 PM",
    room: "Frontenac Hall",
  },
  {
    id: "54",
    title:
      "A PATHOLOGICAL FEMUR OF AN IGUANDONTIAN DINOSAUR WITH MEDULLARY-LIKE BONE INVOLVEMENT IN THE HEALING PROCESS",
    authors: ["Bertozzo", "Caravaggio", "DaVinci"],
    session: "06 Synapsida",
    time: "02:00 PM",
    room: "Frontenac Hall",
  },
  {
    id: "55",
    title:
      "HORNCORE FRACTURE IN ANCHICERATOPS (ORNITHISCHIA, CERATOPSIDAE), AND THE OCCURRENCE OF PATHOLOGICAL HORN FRACTURES IN CERATOPSIDAE",
    authors: ["Brown", "Schwab"],
    session: "06 Synapsida",
    time: "02:20 PM",
    room: "Frontenac Hall",
  },
  {
    id: "56",
    title:
      "OSTEOLOGY AND KINEMATICS OF THE PACHYCEPHALOSAURID VERTEBRAL COLUMN PROVIDES FURTHER EVIDENCE REFUTING THE AGONISTIC HEAD-BUTTING HYPOTHESIS",
    authors: ["Woodruff", "Dandy", "Everett", "Chan"],
    session: "06 Synapsida",
    time: "02:40 PM",
    room: "Frontenac Hall",
  },
  {
    id: "57",
    title:
      "TOOTH REPLACEMENT CYCLES AND THE ENDOCRANIAL ANATOMY OF A NEW ORNITHOPOD DINOSAUR FROM THE LATE CRETACEOUS OF ANTARCTICA",
    authors: ["Brown", "Casey"],
    session: "06 Synapsida",
    time: "03:00 PM",
    room: "Frontenac Hall",
  },
  {
    id: "58",
    title: "THE CONTRIBUTION OF SOFT TISSUES TO THE NECK OF PTEROSAURS",
    authors: ["Buchmann"],
    session: "06 Synapsida",
    time: "03:20 PM",
    room: "Frontenac Hall",
  },
  {
    id: "59",
    title:
      "PATTERNS OF MACROWEAR ON IN SITU TYRANNOSAURID DENTITIONS FROM THE UPPER CRETACEOUS OF NORTH AMERICA",
    authors: ["Wyenberg-Henzler", "Stallnick", "Greer", "Thompson"],
    session: "06 Synapsida",
    time: "03:40 PM",
    room: "Frontenac Hall",
  },
  {
    id: "60",
    title:
      "A NEW SPECIES OF CAENAGNATHIDAE (THEROPODA: DINOSAURIA) FROM THE OLDMAN FORMATION (CAMPANIAN: LATE CRETACEOUS) OF ALBERTA, CANADA",
    authors: ["Wilkinson", "Emery", "Armstrong"],
    session: "06 Synapsida",
    time: "04:00 PM",
    room: "Frontenac Hall",
  },
];

export { data };
