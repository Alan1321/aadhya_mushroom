// Small inline icon set — keeps the site free of any icon-font or CDN
// dependency, which matters because the whole thing ships as static files.
const PATHS = {
  spawn: (
    <>
      <path d="M4 11a8 8 0 0 1 16 0z" />
      <path d="M10 11v6a2 2 0 0 0 4 0v-6" />
    </>
  ),
  research: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.5-4.5" />
    </>
  ),
  support: (
    <>
      <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
    </>
  ),
}

export default function Icon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  )
}
