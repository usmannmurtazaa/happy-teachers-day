/**
 * Creator configuration for the "Presented With Respect & Gratitude" card.
 *
 * ▸ The photo file lives at `public/usman-murtaza.jpg`.
 * ▸ Anything in `public/` is served from the site root - reference it as
 *   `/usman-murtaza.jpg` (NOT `./public/...`).
 * ▸ Replace the file with the same name, or change `photoUrl` below.
 */
export const creator = {
  /** 👇 Path to the photo served from the site root */
  photoUrl: '/Usman Murtaza.jpg',

  /** Alt text - describe the photo for screen readers & SEO */
  photoAlt: 'Portrait of Usman Murtaza, President of NextGen Tech Club, ISAC',

  name: 'Usman Murtaza',
  role: 'President, NextGen Tech Club, ISAC',

  eyebrow: 'Presented With Respect & Gratitude',
  headline: 'Wishing every teacher a very Happy Teacher’s Day.',
  message:
    'Created as a small gesture of appreciation for the teachers who guide, support, and inspire us.',
} as const