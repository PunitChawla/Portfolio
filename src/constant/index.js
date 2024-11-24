export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [
    {
      title: 'Data Labeling Platform',
      desc: ' A data labeling platform where users upload images, and others contribute by voting or adding short descriptions. The Web3-powered system rewards users with money for accurate votes, encouraging collaboration and quality contributions.',
      subdesc:
        'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, solana and AWS cloud front , This is designed for optimal performance and scalability.',
      href: 'https://github.com/PunitChawla/decentralized_data-labelling_platform',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/nextjs.jpeg',
        },
      ],
    },
    {
      title: 'Medium Clone',
      desc: 'I developed a blogging platform similar to Medium, where users can post, read, and engage with blogs. The platform features a user-friendly interface for content creation and interaction, allowing seamless publishing and sharing of ideas',
      subdesc:
        'The platform uses React for the frontend and Node.js with Express for the backend. PostgreSQL manages the database, and its deployed on Vercel for scalability. TypeScript ensures type safety throughout the app.',
      href: 'https://medium-blog-one-indol.vercel.app',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/nextjs.jpeg',
        },
      ],
    },
    {
      title: 'Uptune',
      desc: 'Uptune is a collaborative music player where multiple users can vote and play tracks, creating a dynamic playlist. Integrated with YouTube for video playback, it s perfect for parties and clubs, allowing real-time music sharing and interaction',
      subdesc:
        'Uptune uses Next.js for the frontend, PostgreSQL for database management, and Prisma as the ORM. The backend is powered by Express for routing, enabling seamless real-time music sharing and collaboration',
      href: 'https://github.com/PunitChawla/UpTune',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/nextjs.jpeg',
        },
      ],
    },
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
//       deskScale: isSmall ? 0.05 : isMobile ? 0.1 : 0.15,
// deskPosition: isMobile ? [0.5, -4.5, 0] : [0.3, -15.5, 1.5],
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
      name: "TECHNICAL SKILL'S",
      pos: 'Duration ',
      duration: '2022 - Present',
      title: " A dedicate Software developer with strong problem-solving in C and C++. Proficient in full stack development using the MERN stack, Next.js and PostgresSQL. RHCSA certified with expertise in Linux systems",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'ARYA COLLEGE OF ENGINEERING & I.T',
      pos: 'Duration',
      duration: '2022 - Present',
      title: "I am currently in my third year, fifth semester of my B.Tech program, consistently maintaining a commendable overall CGPA of 8.6.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'SANSKAR PUBLIC SCHOOL',
      pos: 'Duration',
      duration: '2018 - 2021',
      title: "I graduated from 12th grade in May 2021 with an outstanding percentage of 97.80%. Prior to that, I completed my 10th grade in May 2019, achieving an impressive percentage of 88.67%",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];