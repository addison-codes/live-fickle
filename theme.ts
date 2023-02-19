import { buildLegacyTheme  } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#000",
  "--my-red": "#ff5f69",
  "--my-violet": "#be64ff",
  "--my-yellow": "#f5ff2d",
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  /* Brand */
  '--brand-primary': props['--my-white'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-red'],
  '--default-button-success-color': props['--my-violet'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-red'],
  '--state-success-color': props['--my-violet'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-red'],
})
