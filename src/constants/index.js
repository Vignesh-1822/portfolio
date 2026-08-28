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
  // import goLogo from "../assets/Go-Logo.png";
  import antDLogo from "../assets/antd.png";
  import ssnLogo from "../assets/SSN.png";
  import springLogo from "../assets/spring.png";
  import javascriptLogo from "../assets/logo-javascript.svg";
  import deskIcon from "../assets/desk_icon.png";
  import abcSupplyLogo from "../assets/ABC-Logo.svg";
  import uwLogo from "../assets/uw-logo.png";
  import aiVoiceLogo from "../assets/ai_voice.png";
  import ssecLogo from "../assets/ssec-logo.png";
  import findmeLogo from "../assets/findme.svg";
  import worldseedLogo from "../assets/worldseed-logo.svg";
  import squadplannerLogo from "../assets/squadplanner-logo.svg";
  import echomeLogo from "../assets/echome-logo.svg";
  import syncfitLogo from "../assets/syncfit-logo.svg";
  import interviewAgentLogo from "../assets/interview-agent-logo.svg";

  /* Tech Stack Logos */

  import materialuiLogo from "../assets/materialui.svg";
  import phpLogo from "../assets/php.svg";
  import graphqlLogo from "../assets/graphql.svg";
  import openaiLogo from "../assets/openai.svg";
  import pythonLogo from "../assets/python.svg";
  import fastapiLogo from "../assets/fastapi.svg";
  import n8nLogo from "../assets/n8n.svg";
  import noaaLogo from "../assets/noaa_logo.svg";
  import slimLogo from "../assets/slim.png";
  import anthropicLogo from "../assets/anthropic.svg";
  import threejsLogo from "../assets/threejs-white.svg";
  import awsLambdaLogo from "../assets/awslambda.svg";
  import langgraphLogo from "../assets/langchain.svg";
  import mongodbLogo from "../assets/tech/mongodb.png";
  import telegramLogo from "../assets/telegram.svg";
  import bashLogo from "../assets/gnubash.svg";
  import appleLogo from "../assets/apple.svg";

  /* SpotLights */

  import spotLight1 from "../assets/spotlight1.png";
  import spotLight2 from "../assets/spotlight2.png";
  import spotLight3 from "../assets/spotlight3.png";
  import spotLight4 from "../assets/spotlight4.png";
  import spotLight5 from "../assets/spotlight5.png";
  
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
      title: 'LightningCast Dashboard',
      desc: 'An interactive drag-and-drop dashboard built for NOAA to visualize lightning prediction data. Helps meteorologists analyze the probability of lightning strikes within the next 60 minutes.',
      subdesc: 'Built end-to-end for NOAA in collaboration with a NOAA scientist at the Space Science and Engineering Center.',
      href: 'https://cimss.ssec.wisc.edu/probsevere/lc/dashboard/#/',
      texture: '/textures/noaa.mp4',
      logo: noaaLogo,
      logoStyle: {
        backgroundColor: '#0d1b2a',
        border: '0.2px solid #1b4f72',
        boxShadow: '0px 0px 60px 0px #1a5276aa',
      },
      spotlight: spotLight4,
      isLive: true,
      tags: [
        { id: 1, name: 'React.js', path: reactLogo },
        { id: 2, name: 'Material UI', path: materialuiLogo },
        { id: 3, name: 'PHP', path: phpLogo },
        { id: 4, name: 'Python', path: pythonLogo },
        { id: 5, name: 'Slim', path: slimLogo },
      ],
    },
    {
      title: 'Product Image Analysis Tool',
      desc: 'An AI-powered full-stack tool that automates catalog quality checks by analyzing product images against catalog data and returning validation results.',
      subdesc: 'Built for ABC Supply Co. to improve accuracy across large product inventories using an AI vision pipeline.',
      href: 'https://github.com/Vignesh-1822',
      texture: '/textures/image_analysis.png',
      logo: abcSupplyLogo,
      logoStyle: {
        backgroundColor: '#1a1a2e',
        // border: '0.2px solid #e94560',
        boxShadow: '0px 0px 60px 0px #e9456033',
      },
      spotlight: spotLight5,
      isLive: false,
      tags: [
        { id: 1, name: 'Next.js', path: nextLogo },
        { id: 2, name: 'GraphQL', path: graphqlLogo },
        { id: 3, name: 'OpenAI', path: openaiLogo },
        { id: 4, name: 'FastAPI', path: fastapiLogo },
        { id: 5, name: 'n8n', path: n8nLogo },
      ],
    },
    {
      title: 'AI Voice Receptionist',
      desc: 'An AI voice receptionist that handles real-time conversations and automates appointment scheduling through voice interactions, with live availability checks and booking.',
      subdesc: 'Built with a voice AI pipeline using Retell and Claude, connected to a FastAPI backend for real-time appointment management.',
      href: 'https://ai-receptionist-ten-plum.vercel.app/',
      texture: '/textures/ai-voice.png',
      logo: aiVoiceLogo,
      logoStyle: {
        backgroundColor: '#2d1b69',
        border: '0.2px solid #7c3aed',
        boxShadow: '0px 0px 60px 0px #7c3aed44',
      },
      spotlight: spotLight1,
      isLive: true,
      tags: [
        { id: 1, name: 'Next.js', path: nextLogo },
        { id: 2, name: 'TailwindCSS', path: tailwindLogo },
        { id: 3, name: 'Anthropic', path: anthropicLogo },
        { id: 4, name: 'FastAPI', path: fastapiLogo },
      ],
    },
    {
      title: 'GOES-R Ice & Snow Dashboard',
      desc: 'An interactive dashboard for GOES-R ABI ice and snow validation data, visualizing variables like ice concentration, temperature, thickness, and motion.',
      subdesc: 'Enabled near real-time monitoring of GOES-18 and GOES-19 satellite data with flexible hourly, daily, and weekly views.',
      href: 'https://cimss.ssec.wisc.edu/goes-cryosphere-products/view/#/Oper_Ice_Concentration',
      texture: '/textures/goes.mov',
      logo: ssecLogo,
      logoStyle: {
        backgroundColor: '#0a1628',
        border: '0.2px solid #1e3a5f',
        boxShadow: '0px 0px 60px 0px #1e3a5f88',
      },
      spotlight: spotLight2,
      isLive: true,
      tags: [
        { id: 1, name: 'React.js', path: reactLogo },
        { id: 2, name: 'Material UI', path: materialuiLogo },
        { id: 3, name: 'PHP', path: phpLogo },
        { id: 4, name: 'Slim', path: slimLogo },
      ],
    },
    {
      title: 'Worldseed - AI 3D World Generator',
      desc: 'A procedurally generated 3D world that runs entirely in the browser. Every mountain, tree, ripple and cloud is generated from a single seed, with no 3D models, assets or textures.',
      subdesc: 'Describe a world in plain English and an LLM translates it into engine parameters, so the world rebuilds live and every result is a shareable link.',
      href: 'https://github.com/Vignesh-1822/fable-3Dworld',
      texture: '/textures/worldseed.png',
      logo: worldseedLogo,
      logoStyle: {
        backgroundColor: '#141a35',
        border: '0.2px solid #2b3566',
        boxShadow: '0px 0px 60px 0px #4a5cc466',
      },
      spotlight: spotLight3,
      isLive: false,
      tags: [
        { id: 1, name: 'React.js', path: reactLogo },
        { id: 2, name: 'TypeScript', path: typescriptLogo },
        { id: 3, name: 'Three.js', path: threejsLogo },
        { id: 4, name: 'OpenAI', path: openaiLogo },
        { id: 5, name: 'AWS Lambda', path: awsLambdaLogo },
      ],
    },
    {
      title: 'SquadPlanner AI',
      desc: 'A group trip planner where an agent workflow scores destinations, pauses for the group leader to approve one, pulls live flights, stays and weather, then streams back a day-by-day itinerary.',
      subdesc: 'Built with FastAPI and LangGraph with checkpointed human-in-the-loop steps, so an edit like "make Day 2 cheaper" reruns only the affected part of the graph.',
      href: 'https://ai-squad-planner-v2-0.vercel.app/',
      texture: '/textures/squadplanner.png',
      logo: squadplannerLogo,
      logoStyle: {
        backgroundColor: '#0b2230',
        border: '0.2px solid #14505c',
        boxShadow: '0px 0px 60px 0px #34d39944',
      },
      spotlight: spotLight1,
      isLive: true,
      tags: [
        { id: 1, name: 'React.js', path: reactLogo },
        { id: 2, name: 'FastAPI', path: fastapiLogo },
        { id: 3, name: 'LangGraph', path: langgraphLogo },
        { id: 4, name: 'MongoDB', path: mongodbLogo },
        { id: 5, name: 'Anthropic', path: anthropicLogo },
      ],
    },
    {
      title: 'EchoMe - AI Digital Twin',
      desc: 'An open-source AI digital twin. Add a profile, your documents and a short voice clip, and visitors can hold a spoken or text conversation with a clearly labelled AI version of you.',
      subdesc: 'Answers are grounded in your own documents through RAG and spoken back in a cloned voice, and the twin says so when it does not know something.',
      href: 'https://github.com/Vignesh-1822/EchoMe',
      texture: '/textures/echome.png',
      logo: echomeLogo,
      logoStyle: {
        backgroundColor: '#1d1442',
        border: '0.2px solid #4c2ea8',
        boxShadow: '0px 0px 60px 0px #7c3aed4d',
      },
      spotlight: spotLight5,
      isLive: false,
      tags: [
        { id: 1, name: 'Python', path: pythonLogo },
        { id: 2, name: 'FastAPI', path: fastapiLogo },
        { id: 3, name: 'React.js', path: reactLogo },
        { id: 4, name: 'Anthropic', path: anthropicLogo },
      ],
    },
    {
      title: 'SyncFit - AI Fitness Coach',
      desc: 'A personal AI fitness coach that lives in a Telegram DM. It logs meals from plain language or photos, syncs wearable data, and coaches across food, movement and recovery together.',
      subdesc: 'There is no app code behind it: the LLM is the runtime, Markdown files are the database, and cron drives the scheduled check-ins and the Monday weigh-in.',
      href: 'https://github.com/Vignesh-1822/fitness-ai-assistant',
      texture: '/textures/syncfit.png',
      logo: syncfitLogo,
      logoStyle: {
        backgroundColor: '#0a2a2a',
        border: '0.2px solid #12595a',
        boxShadow: '0px 0px 60px 0px #22d3a644',
      },
      spotlight: spotLight2,
      isLive: false,
      tags: [
        { id: 1, name: 'OpenAI', path: openaiLogo },
        { id: 2, name: 'Telegram', path: telegramLogo },
        { id: 3, name: 'Bash', path: bashLogo },
        { id: 4, name: 'Apple Health', path: appleLogo },
      ],
    },
    {
      title: 'AI Interview Agent',
      desc: 'An AI interview application that runs an adaptive screening conversation, probes further when an answer is thin, and scores candidates against a rubric while the interview is still running.',
      subdesc: 'A React candidate UI and admin dashboard over a FastAPI service, driven by a LangGraph agent state machine.',
      href: 'https://github.com/Vignesh-1822/ai-interview-agent',
      texture: '/textures/ai-interview.png',
      logo: interviewAgentLogo,
      logoStyle: {
        backgroundColor: '#141a33',
        border: '0.2px solid #313c73',
        boxShadow: '0px 0px 60px 0px #818cf84d',
      },
      spotlight: spotLight4,
      isLive: false,
      tags: [
        { id: 1, name: 'React.js', path: reactLogo },
        { id: 2, name: 'FastAPI', path: fastapiLogo },
        { id: 3, name: 'LangGraph', path: langgraphLogo },
        { id: 4, name: 'Python', path: pythonLogo },
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
      name: 'ABC Supply Co. Inc.',
      pos: 'Full Stack Developer',
      duration: 'January 2026 - May 2026',
      title: "Working on an AI-powered product image validation system, building a full-stack web application to automate catalog quality checks. The system analyzes product images against catalog data and returns validation results, helping improve accuracy across large product inventories. Involved in designing the frontend, backend APIs, and data pipeline.",
      icon: abcSupplyLogo,
      animation: 'clapping',
    },
    {
      id: 2,
      name: 'Space Science and Engineering Center',
      pos: 'Full Stack Developer Intern',
      duration: 'June 2025 - May 2026',
      title: "Assisted the webmaster with website development tasks and built a React web application for the next-generation file system to display wildfire alert reports. Also led a project with a NOAA scientist to develop a web application for LightningCast, which predicts the probability of lightning within the next 60 minutes, handling end-to-end development for NOAA.",
      icon: ssecLogo,
      animation: 'victory',
    },
    {
      id: 3,
      name: 'FindMe LLC',
      pos: 'Full Stack Developer',
      duration: 'September 2025 - December 2025',
      title: "Worked on a personalized website platform, developing dynamic real-time templates and supporting backend services for secure, scalable user data management.",
      icon: findmeLogo,
      animation: 'salute',
    },
    {
      id: 4,
      name: 'University of Wisconsin - Madison',
      pos: 'Grader',
      duration: 'September 2025 - May 2026',
      title: "Evaluated and graded 50+ student projects in web development, covering HTML, CSS, and PHP. Guided students in effective GitHub usage and provided constructive feedback to support their learning.",
      icon: uwLogo,
      logoClass: 'scale-[1.4] object-contain',
      animation: 'clapping',
    },
    {
      id: 5,
      name: 'Tekion Corp',
      pos: 'Associate Software Engineer',
      duration: 'January 2023 - August 2024',
      title: "Worked as a Software Engineer specializing in frontend development, collaborating with cross-functional teams to deliver scalable solutions. Improved code coverage, ensured zero production bugs, and contributed to multiple repositories. Took features from ideation to deployment with a focus on product performance and user experience.",
      icon: tekionLogo,
      animation: 'salute',
    },
  ];
