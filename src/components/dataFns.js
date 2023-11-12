//Skills
const skills = [
    {
        id: 1,
        name: 'HTML',
        imgUrl: '../src/assets/img/html.png'
    },
    {
        id: 2,
        name: 'CSS',
        imgUrl: '../src/assets/img/css.png'
    },
    {
        id: 3,
        name: 'JavaScript',
        imgUrl: '../src/assets/img/js.png'
    },
    {
        id: 4,
        name: 'Node.js',
        imgUrl: '../src/assets/img/node.png'
    },
    {
        id: 5,
        name: 'React',
        imgUrl: '../src/assets/img/react.png'
    },
    {
        id: 6,
        name: 'PostgreSQL',
        imgUrl: '../src/assets/img/elephant.png'
    },
    {
        id: 7,
        name: 'Playwright',
        imgUrl: '../src/assets/img/playwright.svg'
    }
]

const getSkills = () => {
    return skills;
};

//Portfolio
const projects = [
    {
        id: 1,
        project: 'Connect-Four',
        imgUrl: '../src/assets/img/screenshots/connectfour.png',
        url: 'https://elegant-jones-1aa5f1.netlify.app/',
        github: 'https://github.com/citrus77/connect-four',
        contributors: [
            {
                id: 1,
                name: 'Jason Lammers',
                github: 'https://github.com/citrus77'
            }
        ],
        description: `One of my earlier projects, this recreation of the classic game Connect-Four! solidified my understanding of JavaScript.`
    },
    {
        id: 2,
        project: `Stranger's Things`,
        imgUrl: '../src/assets/img/screenshots/strangersthings.png',
        url: 'https://stoic-raman-95405a.netlify.app/',
        github: 'https://github.com/citrus77/Strangers.Things.Project.git',
        contributors: [
            {
                id: 1,
                name: 'Jason Lammers',
                github: 'https://github.com/citrus77'
            }
        ],
        description: `This solo frontend project served as my introduction to React.js. It was built with a pre-made API and is intended to be somewhat of a Craig's List clone.`
    },
    {
        id: 3,
        project: `Awesome Shoe Store`,
        imgUrl: '../src/assets/img/screenshots/awesomeshoestore.png',
        url: 'https://joyful-nodes.herokuapp.com/',
        github: 'https://github.com/2105-SJS/joyful-nodes',
        contributors: [
            {
                id: 1,
                name: 'Jason Lammers',
                github: 'https://github.com/citrus77'
            },
            {
                id: 2,
                name: 'Carlos Escamilla',
                github: 'https://github.com/carlos-escamilla33'
            },
            {
                id: 3,
                name: 'Juan Soto',
                github: 'https://github.com/juansotojs'
            }
        ],
        description: 'An ecommerce site built with React.js, Node.js and PostgreSQL. This fullstack project was completed in an agile environment with a team of 3. This was my first real experience collaborating with other people on the same project.'
    },
];

const getProjects = () => {
    return projects;
};

const aboutMe = {
    name: 'Jason Lammers',
    email: 'jason.lammers@outlook.com',
    github: 'https://github.com/citrus77',
    linkedIn: 'https://www.linkedin.com/in/jason-lammers/',    
    resumeLnk: 'https://1drv.ms/b/s!ArNExx5K-yt6gYS8QZX117ytuk9xAjU?e=cPVw4w',
    description: 'Web Developer seeking employment with a dynamic tech team. Known as an analytical, problem-solving professional with strong time-management skills and the ability to learn concepts quickly.  5+ years of experience working directly in customer service and 10+ years working in fast-paced team environments.'
};

const getAboutMe = () => {
    return aboutMe;
};

//Education
const education = [
    {
        id: 1,
        name: 'Fullstack Academy',
        location: 'San Jose State University',
        startMonth: 'May',
        startYear: '2021',
        endMonth: 'November',
        endYear: '2021',
        description: 'Certificate in Web Development- Powered by Fullstack Academy. Rigorous coding bootcamp focused on fullstack development. Emphasis on paired programming in an agile environment.',
        logo: '../src/assets/img/hanover-square-logo.png'
    }
];

const getEducation = () => {
    return education;
};

//Exports
const dataFns = { 
    getAboutMe, 
    getProjects, 
    getSkills, 
    getEducation
};

export default dataFns;