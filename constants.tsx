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
      'Led the design and development department, managing teams and overseeing end-to-end project delivery.',
      'Managed development, deployment, and maintenance of web applications and databases to support business objectives.',
      'Implemented responsive UI solutions, including WordPress integrations and Magento-based frontend development.'
    ]
  },
  {
    title: 'Senior Software Engineer – Frontend',
    company: 'ZEPCOM',
    period: 'November 2017 – August 2018',
    description: [
      'Conducted research, analysis, and development of modern web applications.',
      'Collaborated closely with backend teams to build scalable, maintainable solutions.',
      'Developed responsive and performance-optimized UIs, including WordPress and Magento frontend integrations.'
    ]
  },
  {
    title: 'Senior Web Developer',
    company: 'Creative Chaos',
    period: 'September 2014 – November 2017',
    description: [
      'Worked on research-driven web development projects focused on usability and performance.',
      'Developed and maintained web applications aligned with client and business requirements.',
      'Delivered high-quality, responsive, and optimized frontend solutions.'
    ]
  },
  {
    title: 'Senior UI/UX Developer',
    company: 'Lowe and Rauf Pakistan (Pvt.) Ltd.',
    period: 'January 2014 – September 2014',
    description: [
      'Converted PSD designs into standards-compliant, responsive HTML and CSS.',
      'Implemented interactive UI components using jQuery with cross-browser compatibility.',
      'Developed Facebook applications and WordPress-based UI components.'
    ]
  },
  {
    title: 'UI/UX Developer',
    company: 'Paksoft Global Pvt. Ltd.',
    period: 'April 2011 – March 2012',
    description: [
      'Translated design mockups into clean, responsive HTML and CSS layouts.',
      'Integrated jQuery-based interactions to enhance user experience.',
      'Developed UI components for web and Facebook-based applications.'
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
