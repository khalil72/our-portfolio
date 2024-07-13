import quran from '../images/quran.png';

import youtube from '../images/youtube.png';
import portfolio from '../images/portfolio.png';
import resume from '../images/resume.png';
import advice from '../images/advice.png';
import dummy from '../images/dummyportfolio.png';
import Craft from '../images/craftconnect.png';
import ecommerce from '../images/ecommerce.png';
import intercloud9 from '../images/intercloud9.png';
import property051 from '../images/property051.png';
import pin92 from '../images/pin92.png';

const ProjectsData = [
    {
        id: 1,
        name: 'Quran Noor',
        ref: 'https://qurannoor.vercel.app/',
        images: quran,
        desc: 'This project is an Islamic-based application with the primary feature of enabling the recitation of the Holy Quran through both reading and audio. Developed using the React framework, it involves integrating a predefined template into React JS, fetching data via API calls, and managing state using Redux Toolkit. The project is currently in progress, being developed according to client requirements, and is almost complete. The code is available in a private GitHub repository.'
    },
    {
        id: 2,
        name: 'YouTube Clone',
        ref: 'https://youtube-clone-alpha-vert.vercel.app/',
        images: youtube,
        desc: 'This project is a YouTube clone developed to replicate the platform according to specific requirements. It is built using the React framework, utilizes Material-UI (MUI) for design, and fetches data from an API. The project is completed, and the code is available in a GitHub repository. If data is not retrieved, it may be due to an issue with the API response.'
    },
    {
        id: 3,
        name: 'Our Portfolio',
        ref: 'https://our-portfolio-eta.vercel.app/',
        images: portfolio,
        desc: 'This project is based on my portfolio and involves creating and integrating a template built with React JS using Bootstrap 5. It does not use an API; instead, it fetches data from a simple JSON file. The project is completed, and the code is available in a GitHub repository.'
    },
    {
        id: 4,
        name: 'Resume Art',
        ref: 'https://resume-art.vercel.app/',
        images: resume,
        desc: 'This project, "Resume Art," is designed based on specific resume requirements or steps defined within the project. It is built using simple HTML, CSS, JS, and Bootstrap, featuring a responsive design tailored to client specifications. The project is completed, and the code is available in a GitHub repository.'
    },
    {
        id: 5,
        name: 'Advice Creator',
        ref: 'https://advice-creator.vercel.app/',
        images: advice,
        desc: 'This is a simple project that provides advice based on API responses. It is developed using React JS as a practice project. The project is completed, and the code is available in a GitHub repository.'
    },
    {
        id: 6,
        name: 'Dummy Portfolio Template',
        ref: 'https://react-template-pi-olive.vercel.app/',
        images: dummy,
        desc: 'This project is a React-based template designed for creating a dummy portfolio. It focuses on pure design using HTML, CSS, and the React framework, featuring a single-page layout. The project is completed, and the code is available in a GitHub repository.'
    },
    {
        id: 7,
        name: 'Craft Connect',
        ref: '/',
        images: Craft,
        desc: 'This project, named Craft Connect, is an e-commerce platform for buying and selling handmade products. It is designed using Next.js with TypeScript and Material-UI (MUI) for the front end. The project is a client-based initiative and is currently incomplete due to certain reasons, with the code not available on GitHub.'
    },
    {
        id: 8,
        name: 'Online Shop',
        ref: '/',
        images: ecommerce,
        desc: 'This project is an e-commerce store designed using React JS with Tailwind CSS and TypeScript. It is currently under development and not yet completed. The code is available in a GitHub repository.'
    },
    {
        id: 9,
        name: 'Intercloud9',
        ref: '/',
        images: intercloud9,
        desc: 'This project is a company-based initiative focused on an online SMS system that includes call, email, and SMS functionalities. The backend operations are implemented using Laravel Passport to create APIs, and the front end integrates the Ketroni theme in React JS with state management handled by Redux Toolkit. As it is a private company project, it is not authorized for public sharing.'
    },
    {
        id: 10,
        name: 'Property 051',
        ref: '/',
        images: property051,
        desc: 'This company-based project is related to real estate and is designed using Laravel for the backend and Bootstrap for the front end. I managed the front-end development and contributed to the backend as well. The project is live and available on GitHub, but it is currently experiencing server issues and is not accessible. The project can be found at property051.com.'
    },
    {
        id: 11,
        name: 'Pin92',
        ref: 'https://www.pin92.com/',
        images: pin92,
        desc: 'This company-based project was originally designed with a React JS front end but was later shifted to WordPress. In WordPress, I integrated a theme, replaced the content, and managed the project entirely.'
    },
];

export default ProjectsData;
