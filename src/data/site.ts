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

export const products = [
  {
    name: "Drip irrigation fittings",
    description:
      "Connectors and small components for assembling and maintaining a drip irrigation layout.",
    image: "/images/drip-connectors.jpg",
    alt: "Blue irrigation connectors ready to be fitted to a drip system",
    detail: "Connectors, tees and end pieces",
  },
  {
    name: "Drip line accessories",
    description:
      "Small fittings and rubber rings that help join and secure compatible irrigation lines.",
    image: "/images/drip-rubber-rings.jpg",
    alt: "Black rubber irrigation rings arranged for product selection",
    detail: "Rings and line accessories",
  },
  {
    name: "Solar motorized borehole",
    description:
      "A solar-powered motorized borehole pump to provide a dependable water supply for farms, including sites without grid electricity.",
    image: "/images/water-outlet-project.jpg",
    alt: "Water flowing from a borehole outlet pipe",
    detail: "Solar borehole pumping",
  },
  {
    name: "Water storage solutions",
    description:
      "Water storage and distribution components for farm and irrigation projects.",
    image: "/images/water-storage.jpg",
    alt: "Elevated water tanks on a steel support structure",
    detail: "Storage and distribution",
  },
  {
    name: "8 LPH PC emitters",
    description:
      "Pressure-compensating emitters for controlled water delivery in drip irrigation systems.",
    image: "/images/drip-valves.jpg",
    alt: "A selection of blue and black 8 LPH pressure-compensating drip emitters",
    detail: "8 LPH | Pressure compensating",
  },
  {
    name: "Drip connectors & joiners",
    description:
      "Connector pieces for joining compatible sections of an irrigation line.",
    image: "/images/drip-connectors-assorted.jpg",
    alt: "Blue irrigation line connectors arranged for selection",
    detail: "Line connectors",
  },
  {
    name: "Irrigation pipes & coils",
    description:
      "Large-diameter pipe options for water movement around a farm or project site.",
    image: "/images/irrigation-pipe-team.jpg",
    alt: "Workers handling a large coil of irrigation pipe in a field",
    detail: "Pipes and hoses",
  },
  {
    name: "Pipe fittings & joints",
    description:
      "A mix of irrigation fittings for building and connecting compatible pipe runs.",
    image: "/images/irrigation-fittings-assorted.jpg",
    alt: "Blue and dark irrigation connectors displayed together",
    detail: "System fittings",
  },
  {
    name: "Drip irrigation in the field",
    description:
      "See drip irrigation lines in use around growing crops and ask about options for your farm.",
    image: "/images/drip-lines-on-crops.webp",
    alt: "Drip irrigation tubing laid around young crops",
    detail: "Drip systems",
  },
  {
    name: "Water delivery equipment",
    description:
      "Discuss water-delivery options for irrigation layouts using a borehole or another source.",
    image: "/images/borehole-water-outlet.webp",
    alt: "Water flowing from a borehole outlet pipe at a farm site",
    detail: "Water supply",
  },
];

export const fieldPhotos = [
  {
    image: "/images/field-irrigation-in-action.jpg",
    alt: "A farmer waters crops with a hose in an open field",
    caption: "Watering crops in the field",
    type: "Field irrigation",
  },
  {
    image: "/images/tank-installation-team.jpg",
    alt: "A team at work installing a raised water tank system",
    caption: "Water storage installation",
    type: "Project activity",
  },
  {
    image: "/images/water-tank-project.jpg",
    alt: "Large elevated water storage tanks on a support structure",
    caption: "Elevated storage tanks",
    type: "Water storage",
  },
  {
    image: "/images/farm-pipe-installation.jpg",
    alt: "Farm workers handle a large pipe during a water system installation",
    caption: "Pipework at a farm site",
    type: "Installation work",
  },
  {
    image: "/images/farm-water-team.jpg",
    alt: "People testing water flowing from a pipe at an open field site",
    caption: "Farm drainage",
    type: "Farm drainage",
  },
  {
    image: "/images/drip-lines-on-crops.webp",
    alt: "Drip lines placed alongside young leafy crops",
    caption: "Drip lines alongside crops",
    type: "Drip irrigation",
  },
  {
    image: "/images/irrigation-pipe-team.jpg",
    alt: "Workers handling coiled irrigation pipe at a farm site",
    caption: "Preparing pipe for a project",
    type: "Pipework",
  },
  {
    image: "/images/irrigation-manifold-project.jpg",
    alt: "Blue valves and pipework installed along a wall",
    caption: "Installed irrigation pipework",
    type: "System installation",
  },
  {
    image: "/images/water-outlet-project.jpg",
    alt: "Water flowing from a pipe outlet at a project site",
    caption: "Testing a water outlet",
    type: "Water supply",
  },
  {
    image: "/images/irrigation-pipe-team-project.jpg",
    alt: "A team moving a large coil of irrigation pipe across a field",
    caption: "Moving pipe at a farm site",
    type: "Pipework",
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

export const projectPhotos = [
  {
    image: "/images/irrigation-trench-installation.jpg",
    alt: "Workers connecting irrigation pipes in an open trench",
    caption: "Connecting pipework during installation",
    type: "Irrigation installation",
  },
  {
    image: "/images/irrigation-trench-preparation.jpg",
    alt: "A worker preparing a trench for buried farm pipework",
    caption: "Preparing a route for pipework",
    type: "Installation preparation",
  },
  {
    image: "/images/irrigation-mainline-connections.jpg",
    alt: "Blue connectors fitted into large irrigation pipes",
    caption: "Mainline pipe connections",
    type: "Irrigation pipework",
  },
  {
    image: "/images/solar-installation-team.jpg",
    alt: "A team carrying a solar panel at a farm site",
    caption: "Moving solar equipment into position",
    type: "Solar equipment",
  },
  {
    image: "/images/solar-panels-farm.jpg",
    alt: "Solar panels installed at a farm site",
    caption: "Solar panels at a farm site",
    type: "Solar water systems",
  },
  {
    image: "/images/farm-water-pumping.jpg",
    alt: "A petrol-powered pump beside a farm water source",
    caption: "Water pump at a farm source",
    type: "Water pumping",
  },
  {
    image: "/images/farm-water-pumping-team.webp",
    alt: "A team operating a water point and filling containers",
    caption: "Water point in use",
    type: "Water supply",
  },
  {
    image: "/images/water-tank-frame-project.jpg",
    alt: "Steel support frame being assembled for a farm water tank",
    caption: "Assembling a tank support frame",
    type: "Water storage",
  },
  {
    image: "/images/tank-installation-team.jpg",
    alt: "Workers and lifting equipment at a raised tank installation",
    caption: "Working on raised water storage",
    type: "Installation",
  },
  {
    image: "/images/water-tank-project.jpg",
    alt: "Large water tanks installed on an elevated support structure",
    caption: "Elevated farm water storage",
    type: "Storage systems",
  },
  {
    image: "/images/water-project-construction.jpg",
    alt: "Construction work at a water system project site",
    caption: "Building a water-system base",
    type: "Project activity",
  },
  {
    image: "/images/concrete-water-reservoir.jpg",
    alt: "Concrete reservoir structure under construction at a farm site",
    caption: "Concrete water reservoir",
    type: "Water infrastructure",
  },
  {
    image: "/images/farm-water-system.jpg",
    alt: "Water infrastructure beside a planted field",
    caption: "Water infrastructure by the field",
    type: "Farm water systems",
  },
  {
    image: "/images/community-water-point.jpg",
    alt: "People gathering at a water point in an open rural area",
    caption: "A water point in use",
    type: "Water access",
  },
  {
    image: "/images/borehole-water-outlet.webp",
    alt: "Water running from an outlet pipe at a rural water source",
    caption: "Water flowing at the outlet",
    type: "Water supply",
  },
  {
    image: "/images/solar-water-system.jpg",
    alt: "Solar panels installed at a farm water site",
    caption: "Solar equipment at a farm site",
    type: "Solar water systems",
  },
  {
    image: "/images/farm-water-outlet-flow.jpg",
    alt: "Water flowing from a large outlet pipe at a farm water source",
    caption: "Water flowing from an outlet pipe",
    type: "Water supply",
  },
  {
    image: "/images/solar-farm-panel-array.webp",
    alt: "Rows of solar panels installed on a farm",
    caption: "Solar panels at a farm site",
    type: "Solar equipment",
  },
  {
    image: "/images/greenhouse-farm-project.jpg",
    alt: "A greenhouse structure under construction at sunset",
    caption: "Greenhouse construction",
    type: "Farm infrastructure",
  },
  {
    image: "/images/bolted-water-storage-tank.jpg",
    alt: "Large bolted water storage tank inside a fenced compound",
    caption: "Large-scale water storage",
    type: "Water storage",
  },
  {
    image: "/images/elevated-water-tank-building.jpg",
    alt: "Several water tanks installed on an elevated building structure",
    caption: "Elevated water storage tanks",
    type: "Water storage",
  },
  {
    image: "/images/farm-water-source-pond.jpg",
    alt: "A farm water pond beside planted trees",
    caption: "Water source at a farm",
    type: "Water supply",
  },
  {
    image: "/images/drip-irrigation-tree-line.jpg",
    alt: "Drip irrigation tubing arranged around a young tree",
    caption: "Drip irrigation around a young tree",
    type: "Drip irrigation",
  },
  {
    image: "/images/solar-water-pump-installation.jpg",
    alt: "Solar panels sheltering water-pumping equipment at a farm",
    caption: "Solar-powered water pumping",
    type: "Solar water systems",
  },
  {
    image: "/images/solar-farm-lighting.jpg",
    alt: "A solar-powered light installed beside a rural field",
    caption: "Solar lighting at a farm site",
    type: "Solar equipment",
  },
];

export const projectGalleryPhotos = [...fieldPhotos.slice(5), ...projectPhotos];

export const services = [
  {
    number: "01",
    slug: "irrigation",
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
    image: "/images/drip-lines-on-crops.webp",
    alt: "Drip irrigation lines laid beside crops in a cultivated field",
  },
  {
    number: "02",
    slug: "boreholes",
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
    image: "/images/borehole-water-outlet.webp",
    alt: "Water discharging from a large borehole outlet pipe",
  },
  {
    number: "03",
    slug: "water-pumps",
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
    image: "/images/farm-water-pumping-team.webp",
    alt: "A petrol water pump positioned beside a farm water channel",
  },
  {
    number: "04",
    slug: "solar-equipment",
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
    image: "/images/solar-farm-panel-array.webp",
    alt: "A ground-mounted solar panel array installed at a farm",
  },
  {
    number: "05",
    slug: "repairs-maintenance",
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
    image: "/images/irrigation-manifold-project.webp",
    alt: "Installed irrigation manifold with blue valves and connected pipework",
  },
  {
    number: "06",
    slug: "product-guidance",
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
    image: "/images/irrigation-fittings.webp",
    alt: "Irrigation pipe assembly with blue valves and connected fittings",
  },
];
