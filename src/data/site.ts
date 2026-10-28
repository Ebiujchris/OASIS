export const company = {
  name: "Oasis Irrigation Solutions",
  shortName: "Oasis",
  phoneDisplay: "+256 785 540 023",
  phone: "+256785540023",
  whatsapp: "256785540023",
  locations: ["Kampala", "Gulu"],
};

export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const productCategories = [
  "All products",
  "Drip irrigation",
  "Pumps & water",
  "Pipes & fittings",
  "Water storage",
] as const;

export type ProductCategory = Exclude<
  (typeof productCategories)[number],
  "All products"
>;

export type Product = {
  name: string;
  description: string;
  image: string;
  alt: string;
  detail: string;
  category: ProductCategory;
  featured?: boolean;
};

export const products: Product[] = [
  {
    name: "Drip connectors & fittings",
    description:
      "Connectors, tees, joiners and end pieces for assembling and maintaining a drip irrigation layout.",
    image: "/images/drip-connectors.jpg",
    alt: "Blue irrigation connectors ready to be fitted to a drip system",
    detail: "Connectors, tees, joiners and end pieces",
    category: "Drip irrigation",
  },
  {
    name: "Drip line accessories",
    description:
      "Small fittings and rubber rings that help join and secure compatible irrigation lines.",
    image: "/images/drip-rubber-rings.jpg",
    alt: "Black rubber irrigation rings arranged for product selection",
    detail: "Rings and line accessories",
    category: "Drip irrigation",
  },
  {
    name: "Solar motorized borehole",
    description:
      "A solar-powered motorized borehole pump to provide a dependable water supply for farms, including sites without grid electricity.",
    image: "/images/water-outlet-project.jpg",
    alt: "Water flowing from a borehole outlet pipe",
    detail: "Solar borehole pumping",
    category: "Pumps & water",
  },
  {
    name: "Petrol water pump",
    description:
      "A portable petrol-powered pump for moving water from a farm source to irrigation or storage.",
    image: "/images/farm-water-pumping-team.jpg",
    alt: "A petrol-powered water pump positioned beside a farm water channel",
    detail: "Farm water pumping",
    category: "Pumps & water",
  },
  {
    name: "Water storage solutions",
    description:
      "Water storage and distribution components for farm and irrigation projects.",
    image: "/images/water-storage.jpg",
    alt: "Elevated water tanks on a steel support structure",
    detail: "Storage and distribution",
    category: "Water storage",
  },
  {
    name: "8 LPH PC emitters",
    description:
      "Pressure-compensating emitters for controlled water delivery in drip irrigation systems.",
    image: "/images/drip-valves.jpg",
    alt: "A selection of blue and black 8 LPH pressure-compensating drip emitters",
    detail: "8 LPH | Pressure compensating",
    category: "Drip irrigation",
  },
  {
    name: "Irrigation pipes & coils",
    description:
      "Large-diameter pipe options for water movement around a farm or project site.",
    image: "/images/irrigation-pipe-team.jpg",
    alt: "Workers handling a large coil of irrigation pipe in a field",
    detail: "Pipes and hoses",
    category: "Pipes & fittings",
  },
  {
    name: "Pipe fittings & joints",
    description:
      "A mix of irrigation fittings for building and connecting compatible pipe runs.",
    image: "/images/irrigation-fittings-assorted.jpg",
    alt: "Blue and dark irrigation connectors displayed together",
    detail: "System fittings",
    category: "Pipes & fittings",
  },
  {
    name: "Drip irrigation systems",
    description:
      "Explore drip irrigation options for crops and ask us to help plan a system for your farm.",
    image: "/images/drip-lines-on-crops.webp",
    alt: "Drip irrigation tubing laid around young crops",
    detail: "System planning",
    category: "Drip irrigation",
  },
  {
    name: "Water delivery equipment",
    description:
      "Discuss water-delivery options for irrigation layouts using a borehole or another source.",
    image: "/images/borehole-water-outlet.webp",
    alt: "Water flowing from a borehole outlet pipe at a farm site",
    detail: "Water supply",
    category: "Pumps & water",
  },
];

export const projectCategories = [
  "All projects",
  "Irrigation",
  "Water storage",
  "Solar",
  "Water supply",
] as const;

export type ProjectCategory = Exclude<
  (typeof projectCategories)[number],
  "All projects"
>;

export type ProjectPhoto = {
  image: string;
  alt: string;
  caption: string;
  type: string;
  category: ProjectCategory;
};

export const fieldPhotos: ProjectPhoto[] = [
  {
    image: "/images/field-irrigation-in-action.jpg",
    alt: "A farmer waters crops with a hose in an open field",
    caption: "Crops being watered with a hose",
    type: "Field irrigation",
    category: "Irrigation",
  },
  {
    image: "/images/tank-installation-team.jpg",
    alt: "A team at work installing a raised water tank system",
    caption: "Team installing a raised water tank",
    type: "Project activity",
    category: "Water storage",
  },
  {
    image: "/images/water-tank-project.jpg",
    alt: "Large elevated water storage tanks on a support structure",
    caption: "Elevated water tanks on a support structure",
    type: "Water storage",
    category: "Water storage",
  },
  {
    image: "/images/farm-pipe-installation.jpg",
    alt: "Farm workers handle a large pipe during a water system installation",
    caption: "Workers positioning pipework at a farm",
    type: "Installation work",
    category: "Irrigation",
  },
  {
    image: "/images/farm-water-team.jpg",
    alt: "People testing water flowing from a pipe at an open field site",
    caption: "Water flowing from a pipe at a field site",
    type: "Water supply",
    category: "Water supply",
  },
  {
    image: "/images/children-at-rural-water-outlet.webp",
    alt: "Children gathered around water flowing at a rural water point",
    caption: "Children at a rural water point",
    type: "Community water access",
    category: "Water supply",
  },
  {
    image: "/images/farm-irrigation.jpg",
    alt: "A farmer watering crops with a hose in a field",
    caption: "Crops being watered with a hose",
    type: "Farm irrigation",
    category: "Irrigation",
  },
  {
    image: "/images/drip-lines-on-crops.webp",
    alt: "Drip irrigation tubing arranged around a young tree",
    caption: "Drip lines around a young tree",
    type: "Drip irrigation",
    category: "Irrigation",
  },
  {
    image: "/images/irrigation-pipe-team.jpg",
    alt: "Blue irrigation manifold with valves and a pressure gauge mounted on a wall",
    caption: "Installed blue irrigation manifold",
    type: "System installation",
    category: "Irrigation",
  },
  {
    image: "/images/water-outlet-project.jpg",
    alt: "Water flowing from a motorized borehole outlet pipe",
    caption: "Motorized borehole water outlet",
    type: "Borehole water supply",
    category: "Water supply",
  },
];

export const fieldVideos = [
  {
    src: "/videos/field-activity.mp4",
    alt: "Drip lines laid out across a prepared field",
    caption: "Laying out drip lines",
    type: "Field video",
  },
  {
    src: "/videos/water-system-project.mp4",
    alt: "A covered growing area with prepared planting beds",
    caption: "Inside a covered growing area",
    type: "Field video",
  },
];

export const projectPhotos: ProjectPhoto[] = [
  {
    image: "/images/irrigation-trench-installation.jpg",
    alt: "Workers connecting irrigation pipes in an open trench",
    caption: "Workers connecting irrigation pipes in a trench",
    type: "Irrigation installation",
    category: "Irrigation",
  },
  {
    image: "/images/irrigation-trench-preparation.jpg",
    alt: "A worker preparing a trench for buried farm pipework",
    caption: "Worker preparing a trench for farm pipework",
    type: "Installation preparation",
    category: "Irrigation",
  },
  {
    image: "/images/irrigation-mainline-connections.jpg",
    alt: "Blue connectors fitted into large irrigation pipes",
    caption: "Mainline pipe connections",
    type: "Irrigation pipework",
    category: "Irrigation",
  },
  {
    image: "/images/solar-installation-team.jpg",
    alt: "A team carrying a solar panel at a farm site",
    caption: "Team carrying a solar panel at a farm",
    type: "Solar equipment",
    category: "Solar",
  },
  {
    image: "/images/solar-panels-farm.jpg",
    alt: "Solar panels installed at a farm site",
    caption: "Solar panels at a farm site",
    type: "Solar water systems",
    category: "Solar",
  },
  {
    image: "/images/farm-water-pumping.jpg",
    alt: "A worker welding a blue steel support frame for a farm water tank",
    caption: "Worker welding a steel tank support frame",
    type: "Water storage",
    category: "Water storage",
  },
  {
    image: "/images/farm-water-pumping-team.webp",
    alt: "A petrol-powered water pump positioned beside a farm water channel",
    caption: "Petrol pump at a farm water source",
    type: "Water pumping",
    category: "Water supply",
  },
  {
    image: "/images/water-tank-frame-project.jpg",
    alt: "Steel support frame being assembled for a farm water tank",
    caption: "Steel frame assembly for a farm water tank",
    type: "Water storage",
    category: "Water storage",
  },
  {
    image: "/images/tank-installation-team.jpg",
    alt: "Workers and lifting equipment at a raised tank installation",
    caption: "Workers and lifting equipment at a tank installation",
    type: "Installation",
    category: "Water storage",
  },
  {
    image: "/images/water-tank-project.jpg",
    alt: "Large water tanks installed on an elevated support structure",
    caption: "Elevated farm water storage",
    type: "Storage systems",
    category: "Water storage",
  },
  {
    image: "/images/water-project-construction.jpg",
    alt: "Construction work at a water system project site",
    caption: "Water-system base under construction",
    type: "Water supply construction",
    category: "Water supply",
  },
  {
    image: "/images/farm-water-system.jpg",
    alt: "A steel tank support frame installed beside a farm field",
    caption: "Steel support frame for a farm water tank",
    type: "Water storage",
    category: "Water storage",
  },
  {
    image: "/images/community-water-point.jpg",
    alt: "Solar panels sheltering water-pumping equipment beside a farm pond",
    caption: "Solar-powered water system beside a farm pond",
    type: "Solar water systems",
    category: "Solar",
  },
  {
    image: "/images/solar-water-system.jpg",
    alt: "Solar panels installed at a farm water site",
    caption: "Solar equipment at a farm site",
    type: "Solar water systems",
    category: "Solar",
  },
  {
    image: "/images/farm-water-outlet-flow.jpg",
    alt: "Water running from a large borehole outlet pipe",
    caption: "Water discharging from a borehole outlet",
    type: "Water supply",
    category: "Water supply",
  },
  {
    image: "/images/solar-farm-panel-array.webp",
    alt: "Rows of solar panels installed on a farm",
    caption: "Solar panels at a farm site",
    type: "Solar equipment",
    category: "Solar",
  },
  {
    image: "/images/greenhouse-farm-project.jpg",
    alt: "A greenhouse structure under construction at sunset",
    caption: "Greenhouse structure under construction",
    type: "Farm infrastructure",
    category: "Irrigation",
  },
  {
    image: "/images/bolted-water-storage-tank.jpg",
    alt: "Large bolted water storage tank inside a fenced compound",
    caption: "Large-scale water storage",
    type: "Water storage",
    category: "Water storage",
  },
  {
    image: "/images/elevated-water-tank-building.jpg",
    alt: "Several water tanks installed on an elevated building structure",
    caption: "Elevated water storage tanks",
    type: "Water storage",
    category: "Water storage",
  },
  {
    image: "/images/farm-water-source-pond.jpg",
    alt: "A farm water pond beside planted trees",
    caption: "Water source at a farm",
    type: "Water supply",
    category: "Water supply",
  },
  {
    image: "/images/drip-irrigation-tree-line.jpg",
    alt: "Drip irrigation tubing arranged around a young tree",
    caption: "Drip irrigation around a young tree",
    type: "Drip irrigation",
    category: "Irrigation",
  },
  {
    image: "/images/solar-water-pump-installation.jpg",
    alt: "Solar panels sheltering water-pumping equipment at a farm",
    caption: "Solar-powered water pumping",
    type: "Solar water systems",
    category: "Solar",
  },
  {
    image: "/images/solar-farm-lighting.jpg",
    alt: "A solar-powered light installed beside a rural field",
    caption: "Solar lighting at a farm site",
    type: "Solar equipment",
    category: "Solar",
  },
];

export const projectGalleryPhotos = [...fieldPhotos.slice(5), ...projectPhotos];

export const serviceCategories = [
  "All services",
  "Irrigation",
  "Water supply",
  "Pumps & solar",
  "Maintenance",
] as const;

export type ServiceCategory = Exclude<
  (typeof serviceCategories)[number],
  "All services"
>;

export const services = [
  {
    number: "01",
    slug: "irrigation",
    category: "Irrigation",
    title: "Irrigation planning & installation",
    description:
      "Plan an irrigation layout around your crops, available water and field conditions. Discuss the equipment, pipe routes and installation support that may suit your farm.",
    detailIntro:
      "Plan how water will move from its source through the field to the crop. The layout depends on the crop arrangement, field size, water supply and how the farm will be operated.",
    detailPoints: [
      "Discuss drip or other irrigation layouts for the crops and planting pattern.",
      "Consider water source, field levels, pipe routes and the areas to be covered.",
      "Review suitable components and what installation support the project may need.",
    ],
    detailChecklist: [
      "Crop type and spacing",
      "Approximate area and field layout",
      "Water source and any existing equipment",
    ],
    detailPhotos: [
      {
        image: "/images/irrigation-trench-preparation.jpg",
        alt: "Workers preparing a trench through a cultivated field",
        caption: "Preparing a route for irrigation pipework",
      },
      {
        image: "/images/irrigation-trench-installation.jpg",
        alt: "A technician assembling blue irrigation pipes and valves in a trench",
        caption: "Connecting irrigation lines in the field",
      },
      {
        image: "/images/drip-irrigation-tree-line.jpg",
        alt: "Drip tubing arranged around a young tree",
        caption: "Drip irrigation around young crops",
      },
    ],
    image: "/images/drip-lines-on-crops.webp",
    alt: "Drip irrigation lines laid beside crops in a cultivated field",
  },
  {
    number: "02",
    slug: "boreholes",
    category: "Water supply",
    title: "Boreholes & water supply",
    description:
      "Explore how water can be supplied from a borehole or another source to storage or irrigation. Share the source, location and intended use so the options can be discussed.",
    detailIntro:
      "Discuss how a borehole or other available source could connect to storage, a pump and the farm’s water distribution. Source yield, location and intended use all matter when planning a supply.",
    detailPoints: [
      "Describe the source and any known information about its output.",
      "Plan the route from the source to a storage tank, outlet or irrigation system.",
      "Consider how water demand and storage needs relate to the proposed setup.",
    ],
    detailChecklist: [
      "Source type and location",
      "Any known yield or existing pump details",
      "Where the water needs to go and how it will be used",
    ],
    detailPhotos: [
      {
        image: "/images/farm-water-point-team.webp",
        alt: "People collecting water from an outlet at a rural water point",
        caption: "Water supply at a rural outlet",
      },
      {
        image: "/images/farm-water-source-pond.jpg",
        alt: "A farm pond serving as an available water source",
        caption: "An alternative farm water source",
      },
      {
        image: "/images/tank-installation-team.jpg",
        alt: "A team installing elevated water storage tanks at a farm",
        caption: "Connecting water supply with storage",
      },
    ],
    image: "/images/borehole-water-outlet.webp",
    alt: "Water discharging from a large borehole outlet pipe",
  },
  {
    number: "03",
    slug: "water-pumps",
    category: "Pumps & solar",
    title: "Water pumps",
    description:
      "Discuss moving water from its source to a tank, outlet or irrigation network. The right pump depends on the water source, delivery route and the demands of the setup.",
    detailIntro:
      "A pump must suit the source and the work it needs to do. Discuss the lift, delivery distance, pipework and required flow before deciding what pump configuration to consider.",
    detailPoints: [
      "Identify whether water is being drawn from a borehole, pond, tank or another source.",
      "Consider the vertical lift, delivery distance and pipe size.",
      "Match the intended use—such as filling storage or feeding irrigation—to pump requirements.",
    ],
    detailChecklist: [
      "Water source and approximate lift height",
      "Distance and route to the delivery point",
      "Required use, flow and available power source",
    ],
    detailPhotos: [
      {
        image: "/images/farm-water-source-pond.jpg",
        alt: "A farm pond serving as an available water source",
        caption: "A source for farm water pumping",
      },
      {
        image: "/images/farm-water-point-team.webp",
        alt: "Water being drawn from an outlet at a farm water point",
        caption: "Moving water from a supply point",
      },
      {
        image: "/images/water-outlet-project.jpg",
        alt: "Water flowing from a motorized borehole outlet pipe",
        caption: "Water delivered from a borehole",
      },
    ],
    image: "/images/farm-water-pumping-team.webp",
    alt: "A petrol water pump positioned beside a farm water channel",
  },
  {
    number: "04",
    slug: "solar-equipment",
    category: "Pumps & solar",
    title: "Solar equipment",
    description:
      "Consider solar-powered equipment for water pumping and farm use. Discuss the site, water requirements and equipment already in place before choosing a system.",
    detailIntro:
      "Explore whether solar power could support water pumping or other farm equipment at your site. A useful discussion starts with the equipment’s power needs, when it will run and the available sunlight.",
    detailPoints: [
      "Review the pump or equipment specifications and expected operating hours.",
      "Consider the site, panel placement and the route between panels and equipment.",
      "Discuss whether storage or another power source is part of the planned setup.",
    ],
    detailChecklist: [
      "Equipment model or power rating, if known",
      "Daily usage and water-pumping requirements",
      "Site photos and existing solar or electrical equipment",
    ],
    detailPhotos: [
      {
        image: "/images/solar-installation-team.webp",
        alt: "Workers positioning a solar panel array at a farm",
        caption: "Positioning solar panels on site",
      },
      {
        image: "/images/solar-panels-farm.jpg",
        alt: "Solar panels installed beside a cultivated farm",
        caption: "Solar panels at a farm",
      },
      {
        image: "/images/solar-water-system.jpg",
        alt: "A raised solar-powered water system structure at a farm",
        caption: "Solar equipment for farm water supply",
      },
    ],
    image: "/images/solar-farm-panel-array.webp",
    alt: "A ground-mounted solar panel array installed at a farm",
  },
  {
    number: "05",
    slug: "repairs-maintenance",
    category: "Maintenance",
    title: "Repairs & maintenance",
    description:
      "Get support to describe an issue with irrigation lines, fittings or water equipment and discuss practical next steps. Photos and details about the setup help explain the problem.",
    detailIntro:
      "When part of a water system is not working as expected, clear details help identify what to inspect. Share the affected equipment, symptoms and any recent changes so possible next steps can be discussed.",
    detailPoints: [
      "Describe leaks, blocked lines, low flow or components that are not operating as expected.",
      "Check which section, valve, filter or connection is affected.",
      "Discuss inspection and suitable repair or maintenance options for the existing setup.",
    ],
    detailChecklist: [
      "Photos or a short video of the affected area",
      "System type and affected section",
      "When the issue began and what has already been checked",
    ],
    detailPhotos: [
      {
        image: "/images/irrigation-mainline-connections.webp",
        alt: "Blue connectors fitted to two irrigation mainline pipes",
        caption: "Checking mainline connections",
      },
      {
        image: "/images/irrigation-installation-team.webp",
        alt: "A technician assembling pipe connections in a field trench",
        caption: "Working on buried pipe connections",
      },
      {
        image: "/images/irrigation-trench-installation.jpg",
        alt: "A technician fitting valves to irrigation pipes in a trench",
        caption: "Inspecting valves and pipework",
      },
    ],
    image: "/images/irrigation-manifold-project.webp",
    alt: "Installed irrigation manifold with blue valves and connected pipework",
  },
  {
    number: "06",
    slug: "product-guidance",
    category: "Irrigation",
    title: "Irrigation product guidance",
    description:
      "Compare fittings, valves, emitters and other drip-system components for your setup. Share pipe sizes or product photos so compatibility and availability can be checked.",
    detailIntro:
      "Choose components with the pipework and operating needs of your system in mind. Share measurements, product photos or an existing layout to discuss which fittings, valves or emitters may be suitable.",
    detailPoints: [
      "Compare connectors, tees, end pieces, valves and drip emitters.",
      "Check product dimensions against the pipe or tubing already in use.",
      "Ask about product options and confirm current availability before purchasing.",
    ],
    detailChecklist: [
      "Pipe or tubing diameter and type",
      "Photos of the connection point or existing component",
      "Quantity needed and intended use",
    ],
    detailPhotos: [
      {
        image: "/images/drip-connectors.jpg",
        alt: "Blue drip-line connectors arranged for selection",
        caption: "Connectors for drip-line assemblies",
      },
      {
        image: "/images/irrigation-fittings-assorted.jpg",
        alt: "A selection of blue and dark irrigation pipe fittings",
        caption: "Comparing pipe fittings",
      },
      {
        image: "/images/drip-rubber-rings.jpg",
        alt: "Black rubber rings used with drip irrigation components",
        caption: "Small parts for drip systems",
      },
    ],
    image: "/images/irrigation-fittings.webp",
    alt: "Irrigation pipe assembly with blue valves and connected fittings",
  },
];

export type Service = (typeof services)[number];
