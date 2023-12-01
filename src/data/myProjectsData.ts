import { projectTypes } from '@/types/types';

export const myProjects: projectTypes[] = [
  {
    id: 1,
    name: 'Pizza Delicous',
    bg_src: 'PizzaDelicous',
    type: 'Landing Page',
    description:
      'Pizza Delicous is a Landing Page , Made Using HTML,CSS and Bootstrap Only , it is a template made by Colorlib and I made a clone of it as a Training for using Bootstrap .',
    Tools: [
      { name: 'HTML 5', tool_img: 'HTML' },
      { name: 'CSS 3', tool_img: 'Css' },
      { name: 'Bootstrap', tool_img: 'Bootstrap' },
    ],
    live_url: 'https://mohannadasr.github.io/Pizza-Delicous/',
    git_url: 'https://github.com/MohannadAsr/Pizza-Delicous',
  },
  {
    id: 2,
    name: 'Weather App',
    bg_src: 'WeatherApp',
    type: 'Web App',
    description:
      'A Weather App Full Designed And Developed by me using real API with the ability to save favorites Cities and switching between Kelvin and celicus as the default temprature unit . ',
    Tools: [
      { name: 'React', tool_img: 'React' },
      { name: 'CSS 3', tool_img: 'Css' },
      { name: 'Bootstrap', tool_img: 'Bootstrap' },
      { name: 'Axios', tool_img: 'Axios' },
    ],
    live_url: 'https://mohannadasr.github.io/WeatherApp/',
    git_url: 'https://github.com/MohannadAsr/WeatherApp',
  },
  {
    id: 3,
    name: 'FIFA Qatar 2022',
    bg_src: 'Qatar2022',
    type: 'Web App',
    description:
      'A Web App to show the groups teams for world Cup 2022 competition , also showing near matches and the status of the match , after the competition end you will be able to see all the matches results only . The website full designed and developed By me.',
    Tools: [
      { name: 'React', tool_img: 'React' },
      { name: 'CSS 3', tool_img: 'Css' },
      { name: 'Bootstrap', tool_img: 'Bootstrap' },
      { name: 'Axios', tool_img: 'Axios' },
    ],
    live_url: 'https://mohannadasr.github.io/Qatar2022/',
    git_url: 'https://github.com/MohannadAsr/Qatar2022',
  },
  {
    id: 4,
    name: 'TrendMovies',
    type: 'Web App',
    bg_src: 'TrendMovies',
    description:
      'A Website for Showing the Latest Movies and TV Shows using Real API from TMDB with a creative design full designed and Developed by me .',
    Tools: [
      { name: 'React', tool_img: 'React' },
      { name: 'CSS 3', tool_img: 'Css' },
      { name: 'Bootstrap', tool_img: 'Bootstrap' },
      { name: 'Axios', tool_img: 'Axios' },
      { name: 'Framer Motion', tool_img: 'Framer' },
    ],
    live_url: 'https://mohannadasr.github.io/TrendMovies',
    git_url: 'https://github.com/MohannadAsr/TrendMovies',
  },
  {
    id: 5,
    name: 'ASR Store',
    type: 'E-Commerce App',
    bg_src: 'ASRStore',
    description:
      'An E-commerce App , made using React useState Hook (only) from storing , Searching , Filtering Products as a challenge  , with creative and responsive designs for each type of products in it .  ',
    Tools: [
      { name: 'React', tool_img: 'React' },
      { name: 'CSS 3', tool_img: 'Css' },
      { name: 'Bootstrap', tool_img: 'Bootstrap' },
      { name: 'Axios', tool_img: 'Axios' },
      { name: 'Framer Motion', tool_img: 'Framer' },
      { name: 'React Router', tool_img: 'ReactRouter' },
    ],
    live_url: 'https://asrstore.vercel.app/',
    git_url: 'https://github.com/MohannadAsr/asrstore',
  },
  {
    id: 6,
    name: 'M.ASR Portfolio',
    type: 'Portfolio',
    bg_src: 'Portfolio',
    description:
      'A portfolio website to show Skills , Projects and to make a way to contact me , Made By Me using The Latest Desinging and Developing Frameworks and tools such as Next , typescript ,sass and  Styled components.  ',
    Tools: [
      { name: 'Next', tool_img: 'Next' },
      { name: 'TypeScript', tool_img: 'TS' },
      { name: 'Sass', tool_img: 'Sass' },
      { name: 'Bootstrap', tool_img: 'Bootstrap' },
      { name: 'Framer Motion', tool_img: 'Framer' },
    ],
    live_url: 'https://asrstore.vercel.app/',
    git_url: 'https://github.com/MohannadAsr/asrstore',
    noTry: true,
  },
  {
    id: 7,
    name: 'Clinic Dashboard',
    type: 'Dashboard',
    bg_src: 'ClinicDashboard',
    description:
      'Experience a cutting-edge clinic dashboard meticulously crafted to facilitate the seamless addition and management of patient records and reservations. This sophisticated solution, fully conceived, designed, and developed by me, leverages the powerful combination of the Context API hook and the useReducer hook in React.',
    Tools: [
      { name: 'React', tool_img: 'React' },
      { name: 'Sass', tool_img: 'Sass' },
      { name: 'React Router', tool_img: 'ReactRouter' },
      { name: 'Bootstrap', tool_img: 'Bootstrap' },
      { name: 'Framer Motion', tool_img: 'Framer' },
    ],
    live_url: 'https://clinic-dashboard-phi.vercel.app/',
    git_url: 'https://github.com/MohannadAsr/Clinic-Dashboard',
  },
];
