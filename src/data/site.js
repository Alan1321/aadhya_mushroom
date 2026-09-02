// ---------------------------------------------------------------------------
// Single source of truth for every piece of business content on the site.
// Edit this file to change the site — components read from it, nothing is
// hardcoded in JSX.
//
// Only VERIFIED facts belong here. Anything unknown is left empty with a TODO
// so it is obvious what still needs confirming, rather than being guessed at.
// ---------------------------------------------------------------------------

// Served straight from public/ rather than imported through the bundler, so the
// same file backs both the <img> tags and the absolute og:image URL in
// index.html — one copy in the repo instead of two. BASE_URL keeps it correct
// under the /aadhya_mushroom/ Pages subpath.
export const logoUrl = `${import.meta.env.BASE_URL}logo.jpg`

export const business = {
  name: 'Aadhya Mushroom Seeds',
  fullName: 'Aadhya Mushroom Seeds & Research Center',
  tagline: 'Mushroom spawn and cultivation research in Bhaktapur, Nepal',
  city: 'Bhaktapur',
  country: 'Nepal',
  email: 'aadhyamushroomseeds@gmail.com',

  // TODO(confirm with owner): public phone / WhatsApp number. Left empty on
  // purpose — the Contact section hides the row while this is blank.
  phone: '',

  // TODO(confirm with owner): street address / landmark for the shop or farm.
  address: '',

  // TODO(confirm with owner): opening hours.
  hours: '',

  links: {
    facebook: 'https://www.facebook.com/people/Aadhya-Mushroom-Seeds/61576620662425/',
    maps: 'https://www.google.com/maps/place/Aadhya+mushroom+seeds/@27.6642407,85.3731124,55m/data=!3m1!1e3!4m6!3m5!1s0x39eb1b00327cc473:0x7cb80df2c482f2b6!8m2!3d27.6642843!4d85.3732005!16s%2Fg%2F11n9l2h08n',
  },
}

// What the business does. Written from the business's own name and page —
// no capacity, pricing, or certification claims.
export const services = [
  {
    icon: 'spawn',
    title: 'Mushroom spawn',
    body: 'Cultivation-ready mushroom seed (spawn) for growers across the Kathmandu Valley and beyond.',
  },
  {
    icon: 'research',
    title: 'Research center',
    body: 'Ongoing work on strains and growing methods suited to local climate and locally available substrate.',
  },
  {
    icon: 'support',
    title: 'Grower support',
    body: 'Guidance for new and established farmers on substrate, spawning, and managing a growing room.',
  },
]

// -------------------------------------------------------------------------
// Product catalogue.
//
// EMPTY ON PURPOSE. The owner has not yet supplied the list of spawn types
// sold, so nothing is invented here — the Products section renders a
// "contact us for current availability" card while this array is empty, and
// switches to a product grid as soon as entries are added.
//
// Add entries in this shape:
//   { name: 'Oyster (Pleurotus ostreatus)', nepali: '', note: 'Substrate: straw', price: '' }
// -------------------------------------------------------------------------
export const products = []

// General mushroom-cultivation information — not claims about this business.
// Review and adjust the wording with the owner.
export const growingNotes = [
  {
    step: '01',
    title: 'Prepare substrate',
    body: 'Most cultivated mushrooms grow on pasteurised agricultural waste — straw, sawdust, or husk — which makes the crop cheap to start.',
  },
  {
    step: '02',
    title: 'Spawn the bags',
    body: 'Clean spawn is mixed through the cooled substrate and packed into bags, then kept dark and humid while the mycelium colonises.',
  },
  {
    step: '03',
    title: 'Fruit and harvest',
    body: 'Once colonised, bags are moved into fresh air and light. Fruiting comes in flushes, so one batch is harvested several times.',
  },
]
