// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import b4s from '../assets/b4s.jpg';
import verdinho from '../assets/verdinho.jpg';
import scaryLamp from '../assets/scary-prot.png';
import guiBazar from '../assets/gui-bazar.png';

export const experiences = [
    {   
        id: 1,
        cargo: 'Instrutor de Informática',
        empresa: 'Evolutime',
        date: '01/2015 - 12/2016',
        description: 'Ministrei cursos de informática básica e Desenvolvimento Web para jovens e adultos.',
        tags: 'Office, Desenvolvimento Web',
        
    },
    {
        id: 2,
        cargo: 'Desenvolvedor Web',
        empresa: 'Lamego MKT',
        date: '09/2017 - 06/2018',
        description: 'Criação e manutenção de sites desenvolvidos principalmente em WordPress, utilizando tanto temas comerciais quanto temas personalizados criados do zero.',
        tags: 'HTML, CSS, WordPress',
    },
    {
        id: 3,
        cargo: 'Analista Programador',
        empresa: 'Infographya',
        date: '10/2021 - 07/2023',
        description: 'Atuei no desenvolvimento e manutenção de sites institucionais para cartórios, advogados e associações de notários, realizando a integração de projetos por meio de APIs quando necessário.',
        tags: 'PHP, Laravel, WordPress, API, SQL, JQuery'
    },
];

export const projects = [
    {   
        id: 1,
        name: 'Beuty4Share',
        date: '2018',
        description: 'Desenlvimento do site da escola de influenciadores situada em São Paulo.',
        tags: 'HTML, CSS, jQuery, PHP, SQL, WordPress',
        status: 'Concluído',
        link: 'https://www.beauty4share.com.br/',
        image: b4s,
    },
    {
        id: 2,
        name: 'Scary Lamp',
        date: '2021',
        description: 'Desenvolvi um dispositivo de controle de tensão para lâmpadas, utilizando componentes eletrônicos, capaz de simular efeitos de iluminação típicos de filmes de terror. Para isso, criei um player em C++ com a biblioteca QT, que permite ajustar a intensidade da luz de uma ou mais lâmpadas.',
        tags: 'C++, QT, Arduino, Eletrônica',
        status: 'Concluído',
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
        name: 'Verdinho Vegano',
        date: '2023',
        description: 'Desenvolvimento da página de contatos simplificada para o restaurante Verdinho Vegano',
        tags: 'HTML, CSS, PHP, Javascript',
        status: 'Concluído',
        link: 'https://verdinhovegano.com.br',
        image: verdinho,
    },
    {
        id: 5,
        name: 'SBC Guia Online',
        date: '2024',
        description: 'Desenvolvimento de um Guia Comercial Online para a Cidade de São Bernardo do Campo.',
        tags: 'PHP, Laravel, Bootstrap',
        status: 'Andamento',
        link: 'https://sbcguia.online',
        image: null,
    },
    {
        id: 6,
        name: 'Gui Bazar',
        date: '2024',
        description: 'Bazar online de produtos novos, semi-novos e usados.',
        tags: 'HTML, CSS, PHP, WordPress, WooCommerce',
        status: 'Concluído',
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