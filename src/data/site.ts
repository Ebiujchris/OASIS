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
    name: "Valves & system fittings",
    description:
      "Irrigation valves and fittings to help manage water flow through a system.",
    image: "/images/irrigation-fittings.jpg",
    alt: "Irrigation pipe assembly with blue valves and metal fittings",
    detail: "Flow control and pipe fittings",
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
    name: "Drip line control valves",
    description:
      "Valve components used to manage water flow between irrigation lines.",
    image: "/images/drip-valves.jpg",
    alt: "A selection of blue and black drip irrigation valve fittings",
    detail: "Flow control",
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
    image: "/images/drip-lines-on-crops.jpg",
    alt: "Drip irrigation tubing laid around young crops",
    detail: "Drip systems",
  },
  {
    name: "Water delivery equipment",
    description:
      "Discuss water-delivery options for irrigation layouts using a borehole or another source.",
    image: "/images/borehole-water-outlet.jpg",
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
    caption: "Testing a field water point",
    type: "Water systems",
  },
  {
    image: "/images/drip-lines-on-crops.jpg",
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
];

export const projectPhotos = [
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
    image: "/images/borehole-water-outlet.jpg",
    alt: "Water running from an outlet pipe at a rural water source",
    caption: "Water flowing at the outlet",
    type: "Water supply",
  },
];

export const services = [
  {
    number: "01",
    title: "Irrigation planning",
    description:
      "Talk through your farm, water source and crops to explore an irrigation setup suited to your needs.",
  },
  {
    number: "02",
    title: "System installation",
    description:
      "Get help with putting irrigation equipment in place and setting up a practical system on your farm.",
  },
  {
    number: "03",
    title: "Water supply & storage",
    description:
      "Explore water storage, pumping and distribution options for your irrigation project.",
  },
  {
    number: "04",
    title: "Product guidance",
    description:
      "Get guidance on choosing compatible fittings, valves and drip irrigation components.",
  },
];
