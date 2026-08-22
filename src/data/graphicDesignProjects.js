import { uiDesignProjects } from './uiDesignProjects';

export const graphicDesignTags = [
  'Branding',
  'UI Design',
  'Marketing Design',
  'Covers',
  'Social Media Design',
  'Logo Design',
  'Posters',
  'Email Template',
  'Web Design'
];

// Same project as on the UI Design page, reused rather than copied so the
// images and case-study copy stay in one place — only the carousel's own id
// and section tag differ.
const youngMoney = uiDesignProjects.find((project) => project.slug === 'youngmoney-app');

export const graphicDesignProjects = [
  {
    ...youngMoney,
    id: 14,
    tag: 'UI Design'
  },
  {
    id: 11,
    slug: 'marsaga',
    title: 'Marsaga - Brand Identity',
    tag: 'Branding',
    year: 2026,
    role: 'Lead Brand Designer',
    client: 'Marsaga Print & Design Studio',
    aspectRatio: '4 / 3',
    image: '/pictures/marsaga-cover.webp',
    images: [
      '/pictures/marsaga-2.webp',
      '/pictures/marsaga-3.webp',
      '/pictures/marsaga-4.webp',
      '/pictures/marsaga-5.webp',
      '/pictures/marsaga-6.webp',
      '/pictures/marsaga-7.webp',
      '/pictures/marsaga-8.webp',
      '/pictures/marsaga-9.webp'
    ],
    description: 'A bold identity for a print-and-design studio, built around a confident sunburst mark and a saturated orange-on-black palette carried through signage, packaging, stationery and retail environments.',
    galleryCount: 8
  },
  {
    id: 12,
    slug: 'miredent',
    title: 'Miredent - Brand Identity',
    tag: 'Branding',
    year: 2025,
    role: 'Lead Brand Designer',
    client: 'Miredent Dental Clinic',
    aspectRatio: '4 / 3',
    image: '/pictures/miredent-cover.webp',
    images: [
      '/pictures/miredent-2.webp',
      '/pictures/miredent-3.webp',
      '/pictures/miredent-4.webp',
      '/pictures/miredent-5.webp'
    ],
    description: 'A calm, elevated identity for a dental clinic, built around a hand-lettered tooth-shaped monogram in navy and gold, carried from signage and interiors through stationery and a patient care kit.',
    galleryCount: 5
  },
  {
    id: 13,
    slug: 'raven-consulting',
    title: 'Raven Consulting - Brand Identity',
    tag: 'Branding',
    year: 2025,
    role: 'Lead Brand Designer',
    client: 'Raven Consulting',
    aspectRatio: '4 / 3',
    image: '/pictures/raven-cover.webp',
    images: [
      '/pictures/raven-8.webp',
      '/pictures/raven-7.webp',
      '/pictures/raven-9.webp',
      '/pictures/raven-2.webp',
      '/pictures/raven-3.webp',
      '/pictures/raven-4.webp',
      '/pictures/raven-5.webp',
      '/pictures/raven-6.webp'
    ],
    description: 'A sharp, human-centered identity for a recruitment consultancy, built around a stylized raven-in-flight mark in black and blue, carried from signage and stationery through candidate and client-facing materials.',
    galleryCount: 9
  }
];
