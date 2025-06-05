// Portfolio data file - Edit this file to update your portfolio content

// Personal Information
export const personalInfo = {
  name: 'Franz Josef Siblos',
  role: 'Junior Web Developer',
  email: 'siblosfranz22@gmail.com',
  github: 'https://github.com/franz9113',
  linkedin: 'https://www.linkedin.com/in/franz-siblos-8b6805354/',
  bio: [
    "I'm a passionate junior web developer with a strong foundation in modern web technologies. My journey in web development started with a curiosity about how websites work, which led me to pursue formal education in computer science.",
    "I specialize in building responsive, user-friendly web applications using React, Next.js, and other modern frameworks. I'm committed to writing clean, maintainable code and constantly learning new technologies to improve my skills.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.",
  ],
  profileImage: '/images/My_IMG.jpg',
};

// Navigation Links
export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

// Skills
export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', percentage: 90 },
      { name: 'CSS', percentage: 85 },
      { name: 'React', percentage: 80 },
      { name: 'Next.js', percentage: 75 },
      { name: 'Tailwind CSS', percentage: 85 },
      { name: 'DaisyUI', percentage: 80 },
      { name: 'ShadcnUI', percentage: 75 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'PHP', percentage: 70 },
      { name: 'Node.js', percentage: 75 },
      { name: 'Express', percentage: 70 },
      { name: 'REST APIs', percentage: 80 },
      { name: 'JavaScript', percentage: 85 },
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
    title: 'Publication Certificate',
    category: 'Certificates',
    image:
      'https://fastly.picsum.photos/id/40/800/600.jpg?hmac=szpHgMA06nyI-2o6V_Ww9_Mbws0K4bwxsODpdI1Hmis',
  },
  {
    id: 5,
    title: 'Foruta Mobile Application',
    category: 'Mobile Application',
    image: '/images/mobile_application/foruta.png',
  },
  {
    id: 6,
    title: 'Manta Mountain Resort',
    category: 'Web Development',
    image: '/images/web_development/manta.png',
  },
  {
    id: 7,
    title: 'Foruta ( Food Delivery)',
    category: 'Software Development',
    image: '/images/software_development/foruta.jpg',
  },
  {
    id: 8,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image:
      'https://fastly.picsum.photos/id/80/800/600.jpg?hmac=eO9WeSNcizo6EA2x4g5BbL0di6Y5-6gr7dYRR4gygUY',
  },
  {
    id: 9,
    title: 'Gold n Bean (Coffee Shop)',
    category: 'Software Development',
    image: '/images/software_development/goldnbean.jpg',
  },
];
