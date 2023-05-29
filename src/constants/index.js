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
  tripguide,
  threejs,
  myria,
  autoninjas,
  crowdbotics,
  freelancer,
  autoninjasImg,
  myriaImg,
  play,
  hylyImg
} from "../assets";

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

const services = [
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Solution Advisor",
    icon: creator,
  },
];

const technologies = [
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

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Myria",
    icon: myria,
    iconBg: "#383E56",
    date: "Sep 2021 - Apr 2023",
    points: [
      "Designed and structured the NFT market place website, considering architectural principles",
      "Developed a custom L2 Wallet app, integrating it with Metamask, and seamlessly embedded it into the NFT marketplace website",
      "Designed and Developed an admin portal that effectively manages the NFT collection and all associated NFTs",
      "Enhanced performance (FCP, LCP, CLS, FID) by implementing various strategies such as utilizing a CDN, optimizing images, minimizing request overhead, deferring resources, and more. These optimizations enabled the achievement of 10k users on the first day of deployment."
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "AutoNinjas",
    icon: autoninjas,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Architected and structured the car leasing central platform from scratch, transforming an initial idea into a fully functional application",
      "Utilized customer data to enhance the platform's performance, resulting in a daily influx of 10k visitors",
      "Successfully migrated the application from React-based foundation to a Next.js-based architecture, incorporating server-side rendering capabilities.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Crowdbotics",
    icon: crowdbotics,
    iconBg: "#383E56",
    date: "May 2018 - Feb 2020",
    points: [
      "Collaborated as a full-stack developer within a team, contributing to the development of car leasing platforms, cryptocurrency platforms utilizing the MERN stack, React Native, Electron, and GraphQL.",
      "Implemented a dashboard showcasing comprehensive stats for dealers and coin rate changes using D3.js.",
      "Created robust test code utilizing JEST and test modules for both React and Vue.js.",
      "Engaged in the development of a wallet app for the Pastel coin, employing Electron, React, and Tailwind CSS.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer.com",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Oct 2015 - Sep 2018",
    points: [
      "Development and maintenance of websites using HTML, CSS, and jQuery.",
      "Structuring and implementing database architecture, as well as writing backend code in PHP.",
      "Regularly maintaining websites and optimizing their speed for better performance."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Matthew is an exceptional full stack developer with expertise in both front-end and back-end tasks. Highly recommended for professionalism and high-quality results.",
    name: "Chris S.",
    designation: "CTO",
    company: "AutoNinjas",
    image: "https://autoninjas.com/assets/images/autoninjas-assets/CHRIS.png",
  },
  {
    testimonial:
      "Matthew is a web3 full stack developer with exceptional skills in both front-end and back-end development. His expertise and collaborative approach make them a valuable asset for any web3 project.",
    name: "Vanessa L.",
    designation: "Management Consulting",
    company: "Myria",
    image: "https://media.licdn.com/dms/image/C5603AQEh_alBX4RWmw/profile-displayphoto-shrink_200_200/0/1643176550140?e=1691020800&v=beta&t=_O3tbiN0FNAGtehsgPoaUg7e4Ecvn8ppysRAQdr9GeA",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "AutoNinjas",
    description:
      "The Autninjas website is a modern and interactive platform connecting car enthusiasts with professional car detailing services. It features a sleek design, user-friendly interface, and a convenient booking system, providing a seamless and efficient experience for users seeking high-quality car detailing packages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },

    ],
    image: autoninjasImg,
    source_code_link: "https://github.com/",
    live_link: "https://autoninjas.com",
    video_url: "https://www.youtube.com/watch?v=MN1Hf1zVFAs"
  },
  {
    name: "Myria",
    description:
      "Blockchain gaming ecosystem powered by Myria's Ethereum L2 scaling solution. It enhances the power of play through the blockchain. It combines a gaming platform with applications, tools and scaling infrastructure needed to bring blockchain gaming to life.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
      {
        name: "web3",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: myriaImg,
    source_code_link: "https://github.com/",
    live_link: 'https://myria.com',
    video_url: 'https://www.youtube.com/watch?v=ZXPGY8EtTrM&t=75s'
  },
  {
    name: "Journey AI",
    description:
      "Developed a user-friendly interface that allows users to create mJourney through a drag-and-drop function. This innovative feature enables users to automate their advertising campaigns easily. The drag-and-drop functionality, implemented using the React Flow package, provides a visually intuitive experience, enhancing user understanding and streamlining the campaign creation process.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "blue-text-gradient",
      },
    ],
    image: hylyImg,
    live_link: "https://journey.hyly.ai/"
  },
];

export { services, technologies, experiences, testimonials, projects };
