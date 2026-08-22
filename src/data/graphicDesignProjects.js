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
    description: 'Miredent is a branding project created for a dental practice founded by Mirela, who also happened to be my own dentist. The name combines Mirela and Dent, and the visual identity was built around the same idea: something personal, elegant and easy to recognize, while still feeling professional and appropriate for a medical environment.',
    caseStudy: {
      challenge: [
        'The client wanted the brand to feel simple, refined and trustworthy, without falling into the very clinical or generic visual language often used by dental practices.',
        'The identity needed to communicate professionalism and care, but also feel warm and approachable.',
        'Another important requirement was to create a logo that could connect naturally to the name Miredent, while subtly referencing dentistry without relying on obvious or overly literal dental symbols.',
        'The final identity also needed to work across different applications, from the clinic environment and signage to digital communication and promotional materials.'
      ],
      approach: [
        'I started from the name itself \u2014 Mirela and Dent \u2014 and explored how the personal side of the brand could be combined with a recognizable dental reference.',
        'The final logo integrates a subtle tooth shape into the initial structure of the wordmark, while keeping the overall composition light and elegant.',
        'A handwritten-style type treatment was used to give the identity a more personal and human character, balancing the precision expected from a dental practice with a softer visual tone.',
        'The supporting visual direction was kept minimal, with a restrained palette and clean layouts that allow the logo to remain the main recognizable element.',
        'The identity was designed to feel calm, premium and professional rather than overly medical.'
      ],
      outcome: [
        'The result is a simple and distinctive identity that reflects both the personality of the dentist and the professional nature of the practice.',
        'The Miredent logo works as a recognizable signature across different contexts, from the clinic entrance to photography, printed materials and digital communication.',
        'Its minimal visual language makes the brand flexible and easy to apply consistently, while the subtle dental reference keeps it clearly connected to the field without becoming too literal.',
        'The final identity gives the practice a more personal and polished presence while maintaining the sense of trust that is essential in healthcare.'
      ],
      whatWeDid: [
        [
          'Brand identity direction',
          'Logo concept development',
          'Wordmark design',
          'Dental symbol integration',
          'Typography exploration',
          'Color palette definition',
          'Visual style direction',
          'Logo usage variations',
          'Brand application concepts',
          'Clinic signage mockups',
          'Photography integration',
          'Digital communication examples',
          'Visual consistency guidelines',
          'Final brand presentation'
        ]
      ]
    }
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
    description: 'Raven Consulting is a brand identity project created for a consulting company focused on HR, people and organizational support. The objective was to build a professional visual identity that could communicate intelligence, adaptability and trust, while still feeling distinctive within a traditionally corporate industry. The final concept is built around the raven as the core symbol of the brand \u2014 a visual metaphor for intelligence, transformation and adaptability.',
    caseStudy: {
      challenge: [
        'The main challenge was to create an identity suitable for the consulting and HR industry without relying on the predictable visual language often associated with corporate services.',
        'The brand needed to feel:',
        [
          'Professional',
          'Trustworthy',
          'Intelligent',
          'People-focused',
          'Adaptable',
          'Contemporary'
        ],
        'At the same time, it needed a recognizable symbol that could give Raven Consulting a stronger personality and differentiate it from more generic consulting brands.',
        'Because the company works with people and organizations, the identity also needed to balance strategic expertise with a human-centric approach.'
      ],
      approach: [
        'The visual concept started from the meaning of the raven itself. Across different cultures, ravens are often associated with:',
        [
          'Intelligence',
          'Wisdom',
          'Transformation',
          'Adaptability'
        ],
        'These qualities aligned naturally with the positioning of a consulting company that helps organizations and people navigate change.',
        'I developed a stylized raven silhouette as the primary logomark and combined it with a circular element. The circle introduces another layer of meaning, suggesting:',
        [
          'Continuity',
          'Connection',
          'Cycles',
          'Collaboration',
          'Adaptability'
        ],
        'Together, the raven and circular structure create a symbol that represents both the strategic and human aspects of the business.',
        'The wider visual identity uses a clean, restrained layout and a strong blue palette to reinforce credibility and professionalism.',
        'Photography showing people interacting and collaborating was introduced to keep the brand connected to its HR and consulting focus.'
      ],
      outcome: [
        'The result is a clear and recognizable identity that positions Raven Consulting as a professional, intelligent and people-oriented consulting brand.',
        'The raven gives the company a distinctive visual signature, while the broader identity remains flexible enough to work across corporate communication, presentations, digital platforms and recruitment or HR-related materials.',
        'The combination of the symbolic mark, structured typography and people-focused imagery creates a brand that feels strategic without becoming cold or overly institutional.',
        'The identity provides Raven Consulting with a consistent visual foundation that can grow alongside the company services and communication needs.'
      ],
      whatWeDid: [
        [
          'Brand identity direction',
          'Brand concept development',
          'Logo and logomark design',
          'Raven symbol exploration',
          'Symbolism and visual concept definition',
          'Logo construction and proportion refinement',
          'Primary logo configuration',
          'Color palette development',
          'Typography direction',
          'Visual hierarchy',
          'Photography direction',
          'Corporate brand applications',
          'HR and consulting communication direction',
          'Brand presentation',
          'Logo usage and visual consistency guidelines'
        ]
      ]
    }
  }
];
