import {
  Code2,
  Clapperboard,
  Terminal,
  Search,
  Dumbbell
} from 'lucide-react';

import React from 'react';
import { Experience, Education, SkillCategory } from './types';

/* =========================
   PERSONAL INFORMATION
========================= */

export const PERSONAL_INFO = {
  name: 'Furqan Zamir',
  title: 'Principal Consultant – Frontend Development',
  email: 'furqancsit@gmail.com',
  phone: '+92 346 3310882',
  twitter: 'twitter.com/uiplatform',
  website: '...',
  location: 'Pakistan',
  summary:
    'Experienced Frontend Consultant specializing in scalable, high-performance web applications. Adept at delivering pixel-perfect, user-centric interfaces using modern frontend technologies. Passionate about innovation, continuous improvement, and driving business value through exceptional digital experiences.'
};

/* =========================
   PROFESSIONAL EXPERIENCE
========================= */

export const EXPERIENCES: Experience[] = [
  {
    title: 'Principal Consultant – Frontend Developer',
    company: 'Systems Limited',
    period: 'July 2021 – Present',
    description: [
      'Leading frontend development for enterprise-level UAE websites, including ongoing maintenance and new feature development.',
      'Delivering responsive, optimized, and pixel-perfect user interfaces aligned with brand and business standards.',
      'Designing and developing reusable HTML email templates for large-scale email marketing campaigns.'
    ]
  },
  {
    title: 'Head of Department (Design & Development)',
    company: 'Sunbonn Technology',
    period: 'August 2018 – July 2021',
    description: [
      'Lead and manage the Digital Department, with primary responsibility for web development initiatives, ensuring alignment with Sunbonn’s digital strategy and business objectives.',
      'Provide strategic direction, mentorship, and performance management for web development and digital teams to drive innovation and operational excellence.',
      'Collaborate closely with internal stakeholders, including marketing, design, product, and business teams, to deliver integrated and scalable digital solutions.',
      'Plan, monitor, and evaluate digital project performance using industry-standard tools, KPIs, and development methodologies.',
      'Ensure the timely delivery of high-quality digital platforms and web applications that meet customer needs and organizational standards.',
      'Manage and optimize digital and technical resources to ensure efficient execution across multiple projects and initiatives.',
      'Oversee the complete digital development lifecycle, contributing hands-on technical expertise and code when required to resolve complex challenges.',
      'Control project budgets, timelines, and scope, ensuring digital initiatives are delivered within approved cost and schedule targets.',
      'Conduct regular quality assurance reviews, proactively identify risks, escalate critical issues, and implement effective mitigation plans.',
      'Identify and remove technical and operational roadblocks to enhance team productivity and project delivery.',
      'Analyze digital performance metrics to support continuous improvement and ensure both short-term project success and long-term digital growth.',
      'Perform additional duties as assigned by senior management in support of organizational and digital transformation goals.'

    ]
  },
  {
    title: 'Senior Software Engineer – Frontend',
    company: 'ZEPCOM',
    period: 'November 2017 – August 2018',
    description: [
     'Collaborated directly with clients and stakeholders to gather and refine project requirements, prepare design proposals, analyze competitor platforms, define content strategies, and develop site maps for formal approval.',
      'Maintained transparent and consistent communication with clients throughout the project lifecycle to ensure alignment on scope, progress, and deliverables.',
      'Worked effectively in both Agile and Waterfall development environments, adapting processes and methodologies to meet varying project requirements.',
      'Led and contributed to full-stack web development initiatives, with primary responsibility for advanced front-end engineering, browser behavior management, and cross-browser compatibility.',
      'Performed comprehensive front-end testing across multiple browsers and devices to ensure performance, stability, and a seamless user experience.',
      'Ensured strict adherence to corporate branding, UI/UX standards, and design guidelines to maintain visual and functional consistency.',
      'Provided expert consultation on UI best practices, established reusable components, and documented front-end coding standards to improve development efficiency and code quality.',
      'Actively participated in all phases of the product lifecycle, including planning, design, development, testing, deployment, and post-launch support.',
      'Leveraged modern responsive frameworks and optimization techniques to deliver scalable, high-quality solutions within tight timelines.'

    ]
  },
  {
    title: 'Senior Web Developer',
    company: 'Creative Chaos',
    period: 'September 2014 – November 2017',
    description: [
      'Conduct research, analysis, and development activities to design and enhance web-based solutions in line with business requirements.',
      'Develop, maintain, and deploy web applications and database-driven systems, ensuring performance, scalability, and reliability.',
      'Collaborate with cross-functional teams to deliver digital solutions that support organizational objectives and user needs.',
      'Build responsive, high-performance user interfaces with a strong focus on usability, accessibility, and optimization across devices and browsers.',
      'Implement and customize content management and eCommerce platforms, including WordPress, Magento, and Kentico, to meet project specifications.',
      'Optimize front-end performance, improve page load times, and ensure adherence to modern web standards and best practices.',
      'Provide ongoing support, enhancements, and troubleshooting for existing digital and web services as required.'

    ]
  },
  {
    title: 'Senior UI/UX Developer',
    company: 'Lowe and Rauf Pakistan (Pvt.) Ltd.',
    period: 'January 2014 – September 2014',
    description: [
      'Developed websites from PSD designs with pixel-perfect accuracy, ensuring strict adherence to design specifications and brand guidelines.',
      'Implemented complete HTML and CSS integrations using Adobe Photoshop assets, delivering high-quality and responsive user interfaces.',
      'Integrated jQuery libraries and plugins to enhance interactivity, performance, and overall website functionality.',
      'Designed and developed Facebook applications using HTML and CSS in alignment with platform standards.',
      'Managed, maintained, developed, and deployed web applications and database-driven solutions in response to evolving business requirements.',
      'Performed regular maintenance, updates, and enhancements to existing websites to ensure optimal performance and usability.',
      'Worked extensively with WordPress, ensuring seamless HTML and CSS integration within themes and templates.',
      'Contributed to the growth and capability development of the web development team by sharing best practices, reviewing code, and supporting junior developers.'

    ]
  },
  {
    title: 'UI/UX Developer',
    company: 'Paksoft Global Pvt. Ltd.',
    period: 'April 2011 – March 2012',
    description: [
      'Developed websites from PSD designs with a strong focus on pixel-perfect accuracy and visual consistency.',
      'Implemented complete HTML and CSS integrations using Adobe Photoshop assets and tools.',
      'Integrated jQuery libraries and plugins to enhance website interactivity and user experience.',
      'Designed and developed Facebook applications using HTML and CSS in accordance with platform standards.',
      'Implemented and customized WordPress themes, ensuring seamless HTML and CSS integration.',
      'Contributed to PHP-based development tasks to support dynamic website functionality and backend integration.',
      'Collaborated with cross-functional teams to deliver high-quality UI solutions aligned with project requirements.'

    ]
  }
];

/* =========================
   SKILLS
========================= */

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Development Tools',
    skills: [
      'Visual Studio Code',
      'Sublime Text',
      'Brackets',
      'PhpStorm',
      'Dreamweaver',
      'Adobe Photoshop',
      'Adobe Illustrator'
    ]
  },
  {
    name: 'Programming & Web Technologies',
    skills: [
      'HTML5',
      'XHTML',
      'CSS3',
      'Sass',
      'Less',
      'JavaScript / jQuery',
      'PHP',
      'MySQL',
      'SEO Optimization',
      'Performance Optimization'
    ]
  },
  {
    name: 'Content Management Systems',
    skills: ['WordPress', 'Kentico (ASP.NET)']
  },
  {
    name: 'Frontend Frameworks',
    skills: ['Bootstrap', 'Foundation', 'Material CSS']
  },
  {
    name: 'Professional Expertise',
    skills: [
      'Grid & Layout Systems',
      'Typography',
      'Color Theory',
      'Image Editing',
      'Web Usability',
      'Interface Development',
      'Google Analytics & SEO'
    ]
  }
];

/* =========================
   EDUCATION
========================= */

export const EDUCATIONS: Education[] = [
  {
    degree: 'Bachelor of Computer & Information Technology (BCIT) – First Division',
    institution: 'NED University of Engineering & Technology, Karachi, Pakistan',
    period: 'January 2006 – December 2010'
  },
  {
    degree: 'Higher Secondary Certificate (HSC) – A+ Grade',
    institution: 'DJ Sindh Government Science College',
    period: '2002 – 2004'
  }
];

/* =========================
   INTERESTS
========================= */

export const INTERESTS = [
  { name: 'Fitness & Running', icon: <Dumbbell className="w-6 h-6" /> },
  { name: 'Cinema & Visual Storytelling', icon: <Clapperboard className="w-6 h-6" /> },
  { name: 'Emerging Technologies', icon: <Terminal className="w-6 h-6" /> },
  { name: 'Research & Analysis', icon: <Search className="w-6 h-6" /> },
  { name: 'Web Development', icon: <Code2 className="w-6 h-6" /> }
];
