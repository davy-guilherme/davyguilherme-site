// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import b4s from '../assets/b4s.jpg';
import verdinho from '../assets/verdinho.jpg';
import scaryLamp from '../assets/scary-prot.png';
import guiBazar from '../assets/gui-bazar.png';

// import { useTranslation } from "react-i18next";

export const getExperiences = (t) => [
    {   
        id: 1,
        cargo: t("experiences.1.occupation"),
        empresa: 'Evolutime',
        date: '01/2015 - 12/2016',
        description: t("experiences.1.description"),
        tags: t("experiences.1.tags"),
        
    },
    {
        id: 2,
        cargo: t("experiences.2.occupation"),
        empresa: 'Lamego MKT',
        date: '09/2017 - 06/2018',
        description: t("experiences.2.description"),
        tags: t("experiences.2.tags"),
    },
    {
        id: 3,
        cargo: t("experiences.3.occupation"),
        empresa: 'Infographya',
        date: '10/2021 - 07/2023',
        description: t("experiences.3.description"),
        tags: t("experiences.3.tags"),
    },
];

export const getProjects = (t) => [
    {   
        id: 1,
        name: t("projects.1.name"),
        date: t("projects.1.year"),
        description: t("projects.1.description"),
        tags: 'HTML, CSS, jQuery, PHP, SQL, WordPress',
        status: t("projects.1.status"),
        link: 'https://www.beauty4share.com.br/',
        image: b4s,
    },
    {
        id: 2,
        name: t("projects.2.name"),
        date: '2021',
        description: t("projects.2.description"),
        tags: 'C++, QT, Arduino, Eletrônica',
        status: t("projects.1.status"),
        link: 'https://www.youtube.com/watch?v=cO_zgKupF4Q',
        image: scaryLamp,
    },
    // {
    //     id: 3,
    //     name: 'Horti',
    //     date: '2023',
    //     description: 'Participei do desenvolvimento de um e-commerce para hortifrúti chamado Horti, utilizando Vue.js para a criação de uma interface dinâmica e interativa, que se conecta ao Firebase para a gestão de dados e autenticação de usuários. ',
    //     tags: 'Vue, Javascript, Firebase',
    //     status: 'Pausado',
    //     link: '',
    //     image: null,
    // },
    {
        id: 4,
        name: t("projects.4.name"),
        date: '2023',
        description: t("projects.4.description"),
        tags: 'HTML, CSS, PHP, Javascript',
        status: t("projects.4.status"),
        link: 'https://verdinhovegano.com.br',
        image: verdinho,
    },
    {
        id: 5,
        name: t("projects.5.name"),
        date: '2024',
        description: t("projects.5.description"),
        tags: 'PHP, Laravel, Bootstrap',
        status: t("projects.5.status"),
        link: 'https://sbcguia.online',
        image: null,
    },
    {
        id: 6,
        name: t("projects.6.name"),
        date: '2024',
        description: t("projects.6.description"),
        tags: 'HTML, CSS, PHP, WordPress, WooCommerce',
        status: t("projects.6.status"),
        link: 'https://guibazar.com.br',
        image: guiBazar,
    },
]

export const contacts = [
    {
        // icon: GitHubIcon,
        name: 'E-mail',
        link: 'mailto:dvybatista@gmail.com',
        nick: 'dvybatista@gmail.com',
    },
    {
        // icon: GitHubIcon,
        name: 'GitHub',
        link: 'https://github.com/davy-guilherme',
        nick: '@davyguilherme',
    },
    {
        // icon: LinkedInIcon,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/vygui',
        nick: '@vygui',
    },
    {
        // icon: InstagramIcon,
        name: 'Instagram',
        link: 'https://www.instagram.com/vygui',
        nick: '@vygui',
    },
]