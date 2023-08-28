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
  meta,
  starbucks,
  tesla,
  shopify,
  Rickmorty,
  music,
  threejs,
  Uniswap,
  googleDocs,
  landingPage,
  weatherApp,
  realestate,
  movieApp,
  mealgenerator,
  ecommerce, nikeStore, emars, sonia,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
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
    title: "Github",
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "IT Personnel",
    company_name: "PARACH COMPUTER",
    icon: web,
    iconBg: "#383E56",
    date: "March 2019 - NOVEMBER 2020",
    points: [
      "Providing technical assistance and troubleshooting to end-users regarding hardware, software, network and system related issues.",
      "Resolving technical problems promptly and effectively to minimize downtime.",
    ],
  },
  {
    title: "IT Intern",
    company_name: "SYKES ENERGY PROJECT LIMITED ",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Feb 2019",
    points: [
      "Assisted the IT department in providing technical support and maintaining the organization ’s IT infrastructure.",
      "Troubleshot hardware and software issues, resolved user inquiries and performed routine maintenance tasks.",
    ],
  },
  {
    title: "Designer",
    company_name: "SYKES ENGINEERING",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2015 - Jan 2016",
    points: [
      "Experienced in collaborating with cross functional teams and clients to understand project requirements, develop design concepts, and deliver high-quality assets.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Elvis proved me wrong.",
    name: "Sonia Ehwes",
    designation: "CEO",
    company: "Ebony Decore",
    image: sonia,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Elvis does.",
    name: "Bayo Adedokun",
    designation: "Lead Designer",
    company: "Skyes Engineering",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Elvis optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Emars Alvin",
    designation: "Owner",
    company: "Emars E-commerce",
    image: emars,
  },

];

const projects = [
  {
    name: "Rick and Morty Wiki",
    description:
      "A wiki page for rick and morty, which contains all information about the show, the characters, episodes etc..., using Api from rickandmortyApi.com",
    link: 'https://rick-mortywiki.netlify.app/',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "boootstrap",
        color: "pink-text-gradient",
      },

    ],
    image: Rickmorty,
    source_code_link: "https://github.com/Casp3rr/Rick-and-Morty-Wiki",
  },
  {
    name: "Real Estate App",
    description:
      " A real estate site using Api from rapidapi.com, a relator platform, where end- users can purchase,rent a home, custom search the properties to their taste",
    link: "https://realestateeaapp.netlify.app",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },

    ],
    image: realestate,
    source_code_link: "https://github.com/Casp3rr/RealEstate-website",
  },
  {
    name: "E-commerce site",
    description:
      " An E-commerce site built with Next.js and sanity, which act as the database for controlling, and managing the store products, working on this project I learnt how to use next.js serversideprops.",
    link: "https://ecospringsanityecommerce-6q1f0akp3-casp3r-elvis.vercel.app/",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity-ecommerce",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },

    ],
    image: ecommerce,
    source_code_link: "https://github.com/Casp3rr/SanityEcommerce",
  },
  {
    name: "Nike Store",
    description:
      "A Nike store landing page built with react.js and tailwindcss,",
    link: "https://nike-store-f2zevm813-casp3rr.vercel.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },

    ],
    image: nikeStore,
    source_code_link: "https://github.com/Casp3rr/nikeStore/tree/main",
  },
  {
    name: "Uniswap Clone",
    description:
      "a uniswap-clone created with react.js and Cranq(a low level code ide)",
    link: "https://uniswap-clone-react-app-wx7x.vercel.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Web3 ",
        color: "green-text-gradient",
      },
      {
        name: "cranq",
        color: "pink-text-gradient",
      },
    ],
    image: Uniswap,
    source_code_link: "https://github.com/Casp3rr/Uniswap_clone",
  },
  {
    name: "Music App",
    description:
      "Music app with lyrics, API requests from rapidApi and Geolocation to get music chart from the user's country",
    link: "https://musicapp-2.netlify.app",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },

    ],
    image: music,
    source_code_link: "https://github.com/Casp3rr/musicApp",
  },
  {
    name: "googleDocs Clone",
    description:
      " Google Docs Clone using React.js, Firebase, and Material UI",
    link: "https://google-docs-cwsz39jnx-casp3r-elvis.vercel.app/",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },

    ],
    image: googleDocs,
    source_code_link: "https://github.com/Casp3rr/GoogleDocs-clone",
  },
  {
    name: "Landing Page",
    description:
      "  A travel agency landing page",
    link: "https://landing-page-flame-kappa.vercel.app/",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: landingPage,
    source_code_link: "https://github.com/Casp3rr/LandingPage",
  },
  {
    name: "Weather App",
    description:
      " A weather app created with React, using Apis from rapidApi and openweather api",
    link: "https://weather-app-phi-ten.vercel.app/",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "API",
        color: "red-text-gradient",
      },

    ],
    image: weatherApp,
    source_code_link: "https://github.com/Casp3rr/weatherwebApp",
  },
  {
    name: "Random Meal Generator",
    description:
      "This simple meal generator display random meals fetch from a food Api, displays meals, ingredients and step by step process in making the meal with a youtube video also",
    link: "https://random-meal-generator-one.vercel.app",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },

    ],
    image: mealgenerator,
    source_code_link: "https://github.com/Casp3rr/Random-Meal-Generator",
  },
  {
    name: "Movie suggestion site",
    description:
      "Movie suggestion app a movie suggesting app, it suggest random movies to watch.",
    link: "https://film-suggestion.vercel.app/",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },

    ],
    image: movieApp,
    source_code_link: "https://github.com/Casp3rr/Film-Suggestion",
  },
];

export { services, technologies, experiences, testimonials, projects };
