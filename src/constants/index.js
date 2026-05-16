import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    // carrent,
    // jobit,
    // tripguide,
    threejs,
  } from "../assets";

  /* Logos */

  import tekionLogo from "../assets/tekion_logo.jpeg";
  import reactLogo from "../assets/react.svg";
  import tailwindLogo from "../assets/tailwindcss.png";
  import typescriptLogo from "../assets/typescript.png";
  import nextLogo from "../assets/next-js.png";
  import sassLogo from "../assets/sass.png";
  import goLogo from "../assets/Go-Logo.png";
  import antDLogo from "../assets/antd.png";
  import ssnLogo from "../assets/SSN.png";
  import springLogo from "../assets/spring.png";
  import javascriptLogo from "../assets/logo-javascript.svg";
  import deskIcon from "../assets/desk_icon.png";
  import freelanceLogo from "../assets/freelancer.svg";

  /* SpotLights */

  import spotLight1 from "../assets/spotlight1.png";
  import spotLight2 from "../assets/spotlight2.png";
  import spotLight3 from "../assets/spotlight3.png";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  export const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  export const myProjects = [
    {
      title: 'Low Code Platform',
      desc: 'It is a low code platform where we can build applications by dragging and dropping the elements. Also has an workflow mechanism where you can create a workflow and then drag and drop the elements to the workflow and then execute the workflow.',
      subdesc:
        'This was mainly built for Product Managers where they can build small web applications easily according to their needs.',
      href: 'https://github.com/hrhran/low-code-react',
      texture: '/textures/low-code.mov',
      logo: tekionLogo,
      spotlight: spotLight1,
      isLive: false,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: reactLogo,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindLogo,
        },
        {
          id: 3,
          name: 'Javascript',
          path: javascriptLogo,
        },
        {
          id: 4,
          name: 'Go',
          path: goLogo,
        },
      ],
    },
    {
      title: 'Online Mentor Application',
      desc: 'This is a mentor application where students can see their grades and all their information and remarks from their mentor. The mentor can also see all the information of the student and can give the students grades and remarks.',
      subdesc:
        'This application is deployed on our college ERP portal and is widely used by all the students and faculties.',
      href: 'https://academicerp.ssn.edu.in/#!/login',
      texture: '/textures/online_mentor.mp4',
      logo: ssnLogo,
      isLive: true,
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: spotLight2,
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: nextLogo,
        },
        {
          id: 2,
          name: 'SCSS',
          path: sassLogo,
        },
        {
          id: 3,
          name: 'Typescript',
          path: typescriptLogo,
        },
        {
          id: 4,
          name: 'Spring Boot',
          path: springLogo,
        },
      ],
    },
    {
      title: 'Data Filtering Platform',
      desc: 'This application is a  data filtering tool designed to display historical APPLE stock data, including key financial metrics from the annual income statement. It enables users to filter and analyze data, focusing on specific financial details based on their preferences.',
      subdesc:
        'I developed this assignment for ValueGlance, utilizing React.js and TailwindCSS.',
      href: 'https://finance-app-coral-nine.vercel.app/',
      isLive: true,
      texture: '/textures/data-filtering.mp4',
      logo: deskIcon,
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: spotLight3,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: reactLogo,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindLogo,
        },
        {
          id: 3,
          name: 'Javascript',
          path: javascriptLogo,
        },
        {
          id: 4,
          name: 'AntD',
          path: antDLogo,
        },
      ],
    },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '../../src/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '../../src/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '../../src/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: '../../src/assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '../../src/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '../../src/assets/framer.png',
    //     },
    //   ],
    // },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Tekion',
      pos: 'Associate Software Engineer',
      duration: 'July 2023 - August 2024',
      title: "Initially worked in the Travel Scheduler team which is part of the Tekion Automation Platform(TAP). Later, I transitioned to the Implementation team to support resource expansion. My contributions included UI/UX development, enhancing functionalities, and collaborating across multiple repositories as part of the frontend team.",
      icon: tekionLogo,
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Tekion',
      pos: 'Software Engineer Intern',
      duration: 'January 2023 - July 2023',
      title: "I interned for six months as part of the frontend development team, where I built an E-Commerce platform. In the final three months, I contributed to a real-world project at Tekion",
      icon: tekionLogo,
      animation: 'salute',
    },
    {
      id: 3,
      name: 'Freelance',
      pos: 'Frontend Web Developer',
      duration: 'January 2022 - March 2022',
      title: "Worked as a Frontend Developer and assisted a lead engineer from virtusa in building a social media platform exclusively for musicians.",
      icon: freelanceLogo,
      animation: 'clapping',
    },
  ];
