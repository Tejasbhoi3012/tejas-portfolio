export interface Project {
  id: string;
  code: string;
  tag: string;
  badge: string;
  badgeColor: 'emerald' | 'cyan' | 'indigo';
  title: string;
  description: string;
  features?: {
    icon: string;
    title: string;
    description: string;
    color: string;
  }[];
  techStack: string[];
  githubUrl: string;
  demoType: 'architecture' | 'store_rating' | 'travel_planner';
  colSpan?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Tejas Bhoi',
    role: 'Full Stack Developer & AI Engineer',
    headline: "Hi, I'm",
    statusText: 'SYS_STATUS: Available for new roles & projects',
    location: 'Pune, India',
    coordinates: 'Pune, Maharashtra, India',
    email: 'tejas302002@gmail.com',
    phone: '+91 8698380586',
    github: 'https://github.com/Tejasbhoi3012',
    githubUser: 'Tejasbhoi3012',
    linkedin: 'https://linkedin.com/in/tejas-bhoi',
    linkedinHandle: 'tejas-bhoi',
    hostVersion: 'v2.4.0-PROD',
    bio: 'Full Stack Developer with hands-on experience building scalable web applications using React.js, Node.js, Express.js, and PostgreSQL. Strong understanding of REST APIs, authentication, relational database design, and frontend development. Experienced in AI-integrated systems and secure application architecture.',
    footerBio: 'Full Stack Developer & Systems Architect specializing in intelligent interfaces, generative AI pipelines, and distributed software systems.',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMXNaUy4eXjS5jPcoKQW15cKZF5xsQANSYfB5miYvMLn3H8c5WvZ-zaubcMCHJSOIxXIZ_fd0FeYiZDeBVvVK-dMTCqMQIU_tNbtClaTXyBIB0Pu1gUPc3sDTY5QElEM3Qi4SPJTfUTwoo2nEHtWi97ZzmK0vjCLKyWdOlGlrQIrYberTrqRMIrnI-uTXcHXiwzRdSY7Gpjg1KdPX3KUq7ges3vyys_jvmvGp7fjFPJ0QQYTVKSPG0',
    logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1UzuaW77--cRZL7Wr8IuicbFDvdKdksz1hMzQGIgtJ9wrAQzajpHMlS-cLgLyA4QIp2UcrFyToFgMleMy24yqS9McS096YxUv7PhcR9j6O5x5zh2z2Qi7_Sk4LisUIPa2LEYmB7NOD_QRFaaf5s12LB9Zqn1n1MdDFf_ME9rwl0BsKk4M63Y2cbtVgt90nOiGHOu0VXATNNVHUe9f-Su_GMqePJuFtzbLlz7VD_vD75Pwnln0cJpfRKgCU'
  },
  experience: {
    role: 'Frontend Developer',
    company: 'Domain Expansion',
    period: 'Jun 2026 – Oct 2026',
    highlights: [
      'Built and refined responsive React.js screens, including a client profile page and a multi-step profile flow with stepper navigation and client-side form validation.',
      'Implemented UI from Figma references with pixel-close visual accuracy, using strict CSS breakpoints to keep layouts consistent across desktop, tablet, and mobile displays.',
      'Kept the codebase structured and maintainable by architecting a shared dashboard layout component and standardizing a single local SVG icon set across all platform views.'
    ],
    skills: ['React.js', 'CSS Breakpoints', 'Figma to Code', 'Component Architecture', 'Form Validation']
  },
  education: {
    period: '2022 – 2026',
    cgpa: '7.67 / 10',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'G H Raisoni College of Engineering & Management, Jalgaon',
    coursework: 'Comprehensive coursework in Data Structures, Relational Database Management, Operating Systems, Algorithm Complexity, and Software Architecture.',
    status: 'Graduation Candidate \'26',
    isActive: true
  },
  projects: [
    {
      id: 'skin-analysis',
      code: 'PRJ_01 // HEALTHCARE_AI',
      tag: 'Healthcare AI',
      badge: 'Gemini Vision API & Multimodal AI',
      badgeColor: 'cyan',
      title: 'AI-Powered Skin Analysis & Doctor Recommendation System',
      description: 'Comprehensive healthcare web platform engineering automated dermatological analysis. Users upload skin imagery for instant severity assessment and disease screening powered by generative machine intelligence.',
      features: [
        {
          icon: 'document_scanner',
          title: 'Automated Diagnostics',
          description: 'Integrated Google Gemini API for medical image diagnosis & severity classification.',
          color: 'emerald'
        },
        {
          icon: 'chat',
          title: 'AI Skincare Chatbot',
          description: 'Real-time intelligent conversational agent providing personalized patient guidance.',
          color: 'cyan'
        },
        {
          icon: 'distance',
          title: 'Geo-Location Routing',
          description: 'Google Maps API integration for matching patients to nearby certified dermatologists.',
          color: 'indigo'
        },
        {
          icon: 'security',
          title: 'Enterprise Security',
          description: 'Google OAuth 2.0 authentication, REST micro-backend, and MongoDB Atlas database.',
          color: 'emerald'
        }
      ],
      techStack: ['Google Gemini AI', 'React', 'Node.js', 'MongoDB Atlas', 'Google OAuth 2.0', 'Google Maps API'],
      githubUrl: 'https://github.com/Tejasbhoi3012',
      demoType: 'architecture',
      colSpan: 'lg:col-span-8'
    },
    {
      id: 'store-rating',
      code: 'PRJ_02 // RELATIONAL_DB',
      tag: 'Relational DB',
      badge: 'RBAC',
      badgeColor: 'indigo',
      title: 'Store Rating Platform',
      description: 'Multi-role relational full-stack system engineered for customer store feedback. Designed with strict RBAC paradigms separating Normal Users, Store Owners, and System Administrators.',
      features: [
        {
          icon: 'admin_panel_settings',
          title: 'Role-Based Access Control',
          description: 'Strict authorization tiers for Normal Users, Store Owners, and System Admins.',
          color: 'indigo'
        },
        {
          icon: 'query_stats',
          title: 'Admin Metrics Dashboards',
          description: 'Real-time analytics with multidimensional sorting, pagination, and store filtering.',
          color: 'indigo'
        },
        {
          icon: 'dataset',
          title: 'PostgreSQL Normalized Schema',
          description: 'High-integrity 3NF relational schema with ACID-compliant transactions.',
          color: 'indigo'
        }
      ],
      techStack: ['PostgreSQL', 'Node.js', 'Express.js', 'React', 'Analytics'],
      githubUrl: 'https://github.com/Tejasbhoi3012',
      demoType: 'store_rating',
      colSpan: 'lg:col-span-4'
    },
    {
      id: 'travel-planner',
      code: 'PRJ_03 // SMART_ITINERARY',
      tag: 'Smart Itinerary',
      badge: 'REAL-TIME SYNC',
      badgeColor: 'emerald',
      title: 'AI-Based Travel Planning Web App',
      description: 'Smart itinerary generation application that aggregates personal traveler constraints, budgets, and location preferences to produce dynamically orchestrated daily plans via generative AI APIs.',
      techStack: ['React', 'Tailwind CSS', 'OpenAI / Gemini', 'Firebase Auth & Realtime DB'],
      githubUrl: 'https://github.com/Tejasbhoi3012',
      demoType: 'travel_planner',
      colSpan: 'lg:col-span-12'
    }
  ] as Project[],
  skills: {
    languages: [
      { name: 'JavaScript (ES6+)', level: 'Advanced', percent: 92 },
      { name: 'Java', level: 'Proficient', percent: 85 }
    ],
    webTech: [
      { name: 'HTML5', level: 'Semantic Master', percent: 95 },
      { name: 'CSS3', level: 'Layouts & Flexbox', percent: 90 },
      { name: 'Tailwind CSS', level: 'Utility Architect', percent: 94 }
    ],
    frameworks: [
      { name: 'React.js', level: 'Hooks & Architecture', percent: 90 },
      { name: 'Node.js', level: 'Async Backend', percent: 88 },
      { name: 'Express.js', level: 'REST APIs', percent: 89 }
    ],
    databases: [
      { name: 'PostgreSQL', type: 'Relational DB', color: 'emerald' },
      { name: 'MongoDB', type: 'Document NoSQL', color: 'cyan' },
      { name: 'MySQL', type: 'Structured SQL', color: 'indigo' },
      { name: 'Oracle', type: 'Enterprise DB', color: 'slate' }
    ],
    tools: [
      { name: 'Git', icon: 'commit', color: 'emerald' },
      { name: 'GitHub', icon: 'hub', color: 'emerald' },
      { name: 'VS Code', icon: 'terminal', color: 'cyan' },
      { name: 'REST APIs', icon: 'api', color: 'indigo' },
      { name: 'Postman', icon: 'send', color: 'emerald' }
    ]
  },
  certification: {
    badge: 'HACKERRANK CERTIFIED',
    id: 'ID: HR-SQL-INTERMEDIATE',
    title: 'SQL (Intermediate) — HackerRank',
    description: 'Demonstrated mastery in relational query construction, multi-table joins, complex aggregations, window operations, and recursive subqueries.',
    topics: ['Complex Queries', 'Joins', 'Aggregations', 'Subqueries'],
    verificationUrl: 'https://www.hackerrank.com/certificates'
  }
};
