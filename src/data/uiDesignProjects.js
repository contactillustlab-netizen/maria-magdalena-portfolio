export const uiDesignProjects = [
  {
    id: 5,
    slug: 'youngmoney-app',
    title: 'YoungMoney - App',
    tag: 'Mobile App',
    year: 2026,
    role: 'Product Designer',
    aspectRatio: '4 / 3',
    image: '/pictures/youngmoney-cover.webp',
    video: [
      '/videos/youngmoney-app.webm',
      '/videos/youngmoney-prototype.webm'
    ],
    images: [
      '/pictures/youngmoney-2.webp',
      '/pictures/youngmoney-3.webp',
      '/pictures/youngmoney-4.webp',
      '/pictures/youngmoney-5.webp',
      '/pictures/youngmoney-6.webp',
      '/pictures/youngmoney-7.webp',
      '/pictures/youngmoney-8.webp',
      '/pictures/youngmoney-9.webp',
      '/pictures/youngmoney-10.webp'
    ],
    description: 'YoungMoney is a mobile banking and finance app designed for a younger, digital-first generation. The product combines everyday banking with simple money management tools, helping users send and receive money, manage cards, track spending, save toward goals and better understand their finances — all through a friendly, modern and easy-to-use experience.',
    caseStudy: {
      challenge: [
        'Banking apps often feel either too corporate and complex or overly simplified at the expense of trust and functionality. The challenge was to create a financial product that feels young, approachable and visually distinctive, while still communicating the security and reliability expected from a banking experience.',
        'Another key goal was to make financial information easier to understand, reducing unnecessary friction around common actions such as checking balances, sending money, managing cards or saving toward personal goals.'
      ],
      approach: [
        'I focused on creating a clear and intuitive product structure around the actions users perform most often. The experience was organized into five main areas — Home, Pay, Save, Cards and Profile — keeping navigation simple and predictable.',
        'The visual direction combines a bold, contemporary identity with clean layouts, strong hierarchy and friendly microcopy. Financial information is presented progressively, highlighting what matters most without overwhelming the user.',
        'Beyond traditional banking features, YoungMoney also introduces more lifestyle-oriented tools such as Safe to Spend, saving goals, round-ups, bill splitting and spending insights, creating an experience that helps users understand their money rather than simply displaying it.'
      ],
      outcome: [
        'The result is a cohesive mobile banking experience that combines daily financial management, savings and financial awareness within a single product.',
        'YoungMoney feels modern and expressive while remaining functional and trustworthy. Its modular design system allows the experience to scale across different banking scenarios, while the distinctive visual language gives the product a recognizable identity across the app, card design and supporting brand assets.'
      ],
      whatWeDid: [
        'For this concept, I worked across both the product experience and visual identity, including:',
        [
          'Product concept and UX direction',
          'Information architecture',
          'User flows and interaction logic',
          'Mobile UI design',
          'Design system and reusable components',
          'Banking, card, payment and savings experiences',
          'Empty, success, error and security states',
          'UX writing and microcopy',
          'Brand direction and visual language',
          'YoungMoney logomark exploration',
          '3D brand assets and presentation visuals',
          'Interactive prototype'
        ]
      ]
    },
    galleryCount: 9
  },
  {
    id: 6,
    slug: 'design-systems',
    title: 'Design Systems',
    tag: 'UI Foundations',
    year: 2026,
    role: 'Product Designer',
    aspectRatio: '4 / 3',
    image: null,
    animation: [
      '/animations/design-systems.json',
      '/animations/design-systems-2.json'
    ],
    video: [
      '/videos/design-systems.webm',
      '/videos/design-systems-variants.webm'
    ],
    videoLast: true,
    images: [
      '/pictures/design-systems-button.webp'
    ],
    description: 'A design system is more than a component library. It is a shared language between design and development that defines how interfaces look, behave and scale across products. Through different digital products and collaborative design system work, I developed a structured approach to creating reusable UI foundations \u2014 from visual primitives and variables to components, states and documentation that can be translated consistently into production.',
    caseStudy: {
      challenge: [
        'As digital products grow, maintaining consistency becomes increasingly difficult.',
        'Colors start to differ between screens, spacing becomes inconsistent, components are recreated instead of reused, and small visual changes require updates across dozens of designs.',
        'The challenge is to create a system that is flexible enough to support different product scenarios while remaining predictable for both designers and developers.',
        'Another important consideration is the transition from design to production. A design system should not exist only inside Figma \u2014 its structure and naming should make it easy to reproduce and maintain in code.'
      ],
      approach: [
        'I start by identifying the core visual foundations of the product and structuring them into reusable design tokens. This includes variables for:',
        [
          'Color primitives and semantic colors',
          'Light and dark modes',
          'Spacing and padding',
          'Border radius',
          'Border widths',
          'Typography',
          'Icon styles',
          'Surface colors',
          'Component states'
        ],
        'Instead of assigning raw values directly to components, I use Figma Variables to create a consistent layer between foundations and UI components. For example, a button does not simply use a specific hex value or padding value. It inherits predefined variables that can later be updated globally.',
        'I then use these foundations to build reusable component families with clearly defined variants and states such as Default, Hover, Active, Focus, Disabled, Error and Success. Components can include buttons, inputs, alerts, badges, tabs, toggles, notifications, cards and other recurring interface elements.',
        'The same structure can be expanded to support multiple themes, including Light and Dark modes, without rebuilding individual components.',
        'A key part of the process is establishing clear and predictable naming conventions. These names can later be reflected in the development environment, creating a direct relationship between Figma variable, design token, component and code. This makes collaboration with developers much easier and helps keep the implemented product aligned with the original design.'
      ],
      outcome: [
        'The result is a scalable UI foundation that can support multiple screens, applications and websites while maintaining visual and functional consistency.',
        'Using variables makes global updates significantly easier. A change to a primary color, spacing value or border radius can propagate across the entire system instead of being manually updated component by component.',
        'It also creates a stronger bridge between design and development. Because values and components follow an established naming structure, developers can recreate the same token architecture in code, making the design system easier to maintain after the product enters production.',
        'The system becomes a shared source of truth rather than simply a collection of UI elements. This approach improves:',
        [
          'Consistency across products',
          'Design efficiency',
          'Component reuse',
          'Accessibility management',
          'Light and dark theme support',
          'Developer handoff',
          'Long-term scalability',
          'Maintenance in production'
        ]
      ],
      whatWeDid: [
        'My work across design systems includes:',
        [
          'Defining color primitives and semantic color systems',
          'Creating Light and Dark mode foundations',
          'Building spacing and sizing scales',
          'Defining padding, radius and border variables',
          'Structuring typography foundations',
          'Creating reusable Figma Variables',
          'Establishing naming conventions for design tokens',
          'Building component libraries',
          'Creating component properties and variants',
          'Defining interaction and accessibility states',
          'Creating scalable buttons, inputs, badges, alerts, notifications, tabs, toggles and other UI components',
          'Applying variables directly across component libraries',
          'Testing consistency across different product scenarios',
          'Supporting accessibility and contrast requirements',
          'Structuring components for easier developer handoff',
          'Aligning Figma token naming with implementation logic',
          'Collaborating on design system structure and development-ready UI foundations',
          'Documenting how foundations and components should be used'
        ],
        'The goal is always the same: create a system that makes designing faster today while making the product easier to scale and maintain tomorrow.'
      ]
    }
  },
  {
    id: 1,
    slug: 'aria-banking-app',
    title: 'Aria Banking App',
    tag: 'Mobile App',
    year: 2024,
    role: 'Lead Product Designer',
    client: 'Aria Bank',
    aspectRatio: '4 / 5',
    image: null,
    description: 'A mobile-first banking experience redesigned around clarity, trust and fast everyday tasks.',
    galleryCount: 5
  },
  {
    id: 2,
    slug: 'lumen-analytics-platform',
    title: 'Lumen Analytics Platform',
    tag: 'Web App',
    year: 2024,
    role: 'Lead Product Designer',
    client: 'Lumen',
    aspectRatio: '16 / 9',
    image: null,
    description: 'A data platform redesign focused on dense dashboards that still feel calm and legible.',
    galleryCount: 6
  },
  {
    id: 3,
    slug: 'orbit-booking-flow',
    title: 'Orbit Booking Flow',
    tag: 'Design System',
    year: 2023,
    role: 'Product Designer',
    client: 'Orbit Travel',
    aspectRatio: '3 / 4',
    image: null,
    description: 'An end-to-end booking flow and component library built for speed across every device.',
    galleryCount: 5
  },
  {
    id: 4,
    slug: 'pulse-fitness-app',
    title: 'Pulse Fitness App',
    tag: 'Mobile App',
    year: 2023,
    role: 'Product Designer',
    client: 'Pulse',
    aspectRatio: '1 / 1',
    image: null,
    description: 'A gesture-first fitness tracker interface built around quiet motivation, not noise.',
    galleryCount: 4
  }
];
