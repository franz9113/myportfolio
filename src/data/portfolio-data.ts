// Portfolio data file - Edit this file to update your portfolio content

// Personal Information
export const personalInfo = {
  name: 'Franz Josef Siblos',
  role: 'Creative Developer & Designer',
  email: 'siblosfranz22@gmail.com',
  github: 'https://github.com/franz9113',
  linkedin: 'https://www.linkedin.com/in/franz-siblos-8b6805354/',
  bio: [
    "I'm an aspiring UI/UX designer with a background in web development and a growing passion for creating intuitive, user-friendly digital experiences. After building websites as a junior developer, I became increasingly fascinated by the design side—how layout, color, and interaction affect the user journey.",
    'Over the past year, I&apos;ve been actively learning UI/UX principles through online courses, tutorials, and hands-on projects. I use tools like Figma, Adobe XD, and FigJam to create wireframes, prototypes, and responsive interfaces that prioritize usability and accessibility.',
    "I'm still early in my journey, but I'm committed to improving every day by building personal projects, learning from feedback, and staying inspired by the design community.",
    'Outside of design, I enjoy exploring new creative tools, experimenting with layouts and color schemes, and contributing to open-source or collaborative projects when I can.',
  ],
  profileImage: '/images/My_IMG.jpg',
};

// Navigation Links
export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  // { name: 'Projects', href: '#projects' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

// Skills
export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', percentage: 95 },
      { name: 'CSS', percentage: 90 },
      { name: 'React', percentage: 80 },
      { name: 'Next.js', percentage: 83 },
      { name: 'Tailwind CSS', percentage: 85 },
      { name: 'DaisyUI', percentage: 85 },
      { name: 'ShadcnUI', percentage: 90 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'PHP', percentage: 90 },
      { name: 'Node.js', percentage: 70 },
      { name: 'Express', percentage: 70 },
      { name: 'REST APIs', percentage: 80 },
      { name: 'JavaScript', percentage: 87 },
    ],
  },
  {
    category: 'Programming Languages',
    items: [
      { name: 'Java', percentage: 80 },
      { name: 'VB.NET', percentage: 90 },
      { name: 'JavaScript', percentage: 85 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', percentage: 80 },
      { name: 'GitHub', percentage: 85 },
      { name: 'Figma', percentage: 70 },
      { name: 'Canva', percentage: 75 },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Time Management', percentage: 90 },
      { name: 'Communication', percentage: 85 },
      { name: 'Problem Solving', percentage: 90 },
      { name: 'Teamwork', percentage: 85 },
      { name: 'Adaptability', percentage: 80 },
      { name: 'Attention to Detail', percentage: 90 },
    ],
  },
];

// Projects
export const projects = [
  {
    title: 'Abdawn Limited - Cocktail Website',
    description:
      'A premium cocktail website with elegant design and responsive layout',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
    image:
      'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    demoLink: 'https://kingsfinal.vercel.app/',
    codeLink: '#',
  },
  {
    title: 'Task Management App',
    description: 'A full-stack application for managing tasks and projects',
    tags: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    image: '/placeholder.svg?height=200&width=400',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather application that displays forecast data using a third-party API',
    tags: ['JavaScript', 'CSS', 'REST API'],
    image: '/placeholder.svg?height=200&width=400',
    demoLink: '#',
    codeLink: '#',
  },
];

export const galleryItems = [
  {
    id: 1,
    title:
      'Microsoft Technology Associate (Database Administration Fundamentals)',
    category: 'Certificates',
    image: '/images/certificates/database_certificate.jpg',
  },
  {
    id: 2,
    title: 'Microsoft Technology Associate (Networking Fundamentals)',
    category: 'Certificates',
    image: '/images/certificates/networking_certificate.jpg',
  },
  {
    id: 3,
    title: 'Microsoft Technology Associate (Networking Fundamentals)',
    category: 'Certificates',
    image: '/images/certificates/security_certificate.jpg',
  },
  {
    id: 4,
    title: 'Foruta Mobile Application',
    category: 'Mobile Application',
    image: '/images/mobile_application/foruta.png',
  },
  {
    id: 5,
    title: 'Manta Mountain Resort',
    category: 'Web Development',
    image: '/images/web_development/manta.png',
  },
  {
    id: 6,
    title: 'Foruta ( Food Delivery)',
    category: 'Software Development',
    image: '/images/software_development/foruta.jpg',
  },
  {
    id: 7,
    title: 'Gold n Bean (Coffee Shop)',
    category: 'Software Development',
    image: '/images/software_development/goldnbean.jpg',
  },
];

export const projectDetails = {
  'Foruta ( Food Delivery)': {
    role: 'Full Stack Web Developer (Focus on Web Interfaces & UI Design)',
    tools: ['PHP', 'JavaScript', 'MySQL', 'Google Maps API', 'Firebase'],
    year: '2021',
    overview:
      'Foruta is a food delivery platform built during the COVID-19 pandemic to offer a low-cost alternative to services like Grab and Foodpanda. It aimed to reduce delivery fees while connecting users to nearby restaurants.',
    contribution:
      'I worked as a full stack developer with a primary focus on the admin dashboard, restaurant management interface, and landing page. I also contributed to the design direction of the mobile application to ensure consistency and usability.',
    challenges:
      'The project was originally planned for a 3-month timeline but was reduced to just 1 month. Despite the tight deadline and large scope, we managed to complete and deploy it. While it launched with some issues, the experience significantly improved my time management, multitasking, and ability to work under pressure.',
    links: [
      { label: 'View Figma Design', url: '#' },
      { label: 'Archived Facebook Page', url: '#' },
    ],
  },
  'Foruta Mobile Application': {
    role: 'Mobile App Designer & Frontend Developer',
    tools: ['Figma', 'React Native', 'JavaScript', 'Firebase'],
    year: '2021',
    overview:
      'The mobile companion app for the Foruta food delivery platform, designed to provide customers with an intuitive ordering experience on their smartphones.',
    contribution:
      'I designed the complete user interface in Figma, focusing on user experience and accessibility. I also contributed to the frontend development using React Native, ensuring the design was implemented accurately.',
    challenges:
      'Creating a mobile-first design that worked seamlessly across different screen sizes while maintaining consistency with the web platform was challenging. I learned a lot about mobile UI patterns and user behavior.',
    links: [
      { label: 'View Mobile Designs', url: '#' },
      { label: 'App Store Listing', url: '#' },
    ],
  },
  'Manta Mountain Resort': {
    role: 'Web Developer & UI Designer',
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    year: '2022',
    overview:
      'A comprehensive website for Manta Mountain Resort featuring booking systems, gallery showcases, and information about resort amenities and activities.',
    contribution:
      "I handled both the design and development of the website, creating a visually appealing interface that captures the resort's natural beauty while providing functional booking and information systems.",
    challenges:
      "Balancing aesthetic appeal with functionality was key. The site needed to showcase the resort's beauty while providing practical booking and information features for potential guests.",
    links: [
      { label: 'Visit Website', url: '#' },
      { label: 'Design Process', url: '#' },
    ],
  },
  'Gold n Bean (Coffee Shop)': {
    role: 'Full Stack Developer & System Designer',
    tools: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    year: '2022',
    overview:
      'A point-of-sale and inventory management system for Gold n Bean coffee shop, designed to streamline operations and improve customer service efficiency.',
    contribution:
      'I developed the complete system from database design to user interface, including inventory tracking, sales reporting, and customer management features.',
    challenges:
      'Creating a system that was both powerful and easy to use for non-technical staff was the main challenge. I focused on intuitive design and reliable functionality.',
    links: [
      { label: 'System Demo', url: '#' },
      { label: 'Technical Documentation', url: '#' },
    ],
  },
};
