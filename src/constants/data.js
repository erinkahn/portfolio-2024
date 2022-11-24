export const navData = {
    navigation: [
        {
            pageTitle: 'Home',
            linkTo: '/',
            id: 0
        },
        {
            pageTitle: 'About',
            linkTo: '/About',
            id: 1
        },
        {
            pageTitle: 'Resume',
            linkTo: '/Resume',
            id: 2
        },
        {
            pageTitle: 'Contact',
            linkTo: '/Contact',
            id: 3
        }
    ],
    socialIcons: [
        {
            url: 'https://www.linkedin.com/in/erinnkahn/',
            siteName: 'linkedin',
            id: 0
        },
        {
            url: 'https://codesandbox.io/u/erinkahn',
            siteName: 'sandbox',
            id: 1
        },
        {
            url: 'https://github.com/erinkahn',
            siteName: 'github',
            id: 2
        },
        {
            url: 'https://codepen.io/erinkahn/',
            siteName: 'codepen',
            id: 3
        }
    ]
}

export const heroData = {
    home: {
        title: 'hello world',
        subtitle: 'I bring design to life',
        image: './images/heros/home-office-desk.webp',
        fallback: './images/heros/home-office-desk.png',
        alt: 'home office'
    },
    about: {
        title: 'About page',
        subtitle: '',
        image: '',
        fallback: '',
        alt: ''
    },
    resume: {
        title: 'Resume page',
        subtitle: 'subtitle here',
        image: '',
        fallback: '',
        alt: ''
    },
    contact: {
        title: 'contact page',
        subtitle: 'subtitle here',
        image: '',
        fallback: '',
        alt: ''
    }
}

export const typewriterData = {
    typewriter: [
        'front-end developer.',
        'freelance designer.',
        'creative technologist.'
    ]
}

export const statsData = {
    img: [
        {
            src: './images/statImages/home_office_flowers.webp',
            fallback: './images/statImages/home_office_flowers.jpg',
            lowRes: './images/statImages/home_office_flowers_low_res.jpg',
            alt: 'home office with flowers and a window'
        },
        {
            src: './images/statImages/home_office_dog.webp',
            fallback: './images/statImages/home_office_dog.jpg',
            lowRes: './images/statImages/home_office_dog_low_res.jpg',
            alt: 'home office with a dog sleeping in a dog bed'
        }
    ],
    stat: [
        {
            id: 0,
            statText: 'Years of design experience',
            statNum: '8',
            plus: '+',
            percent: ''
        },
        {
            id: 1,
            statText: 'Years of coding experience',
            statNum: '5',
            plus: '+',
            percent: ''
        },
        {
            id: 2,
            statText: 'Satisfied Clients',
            statNum: '100',
            plus: '',
            percent: '%'
        },
        {
            id: 3,
            statText: 'Completed Projects',
            statNum: '20',
            plus: '+',
            percent: ''
        }
    ]
}

export const servicesData = {
    sectionTitle: '_Services',
    services: [
        {
            service: 'Branding + Logos',
            description: 'Lorem ipsum dolor sit amet, consectetur adispicng elit, sed do eidhunmn tempor.',
            icon: '/images/services/branding.svg',
            alt: 'icon of a fingerprint'
        },
        {
            service: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adispicng elit, sed do eidhunmn tempor.',
            icon: '/images/services/webDesign.svg',
            alt: 'icon of an artboard'
        },
        {
            service: 'Web Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adispicng elit, sed do eidhunmn tempor.',
            icon: '/images/services/webDevelopment.svg',
            alt: 'icon of a website'
        }
    ]
}

export const skillsData = {
    sectionTitle: '_skills',
    skills: [
        {
            skill: 'JS',
            percentage: '80%'
        },
        {
            skill: 'SCSS',
            percentage: '90%'
        },
        {
            skill: 'ReactJS',
            percentage: '70%'
        },
        {
            skill: 'PHP',
            percentage: '70%'
        },
        {
            skill: 'HTML',
            percentage: '90%'
        },
    ]
}

export const workData = {
    sectionTitle: '_work',
    tabs: [
        {
            tabTitle: 'All',
            id: 0,
            showTab: 'show_all'
        },
        {
            tabTitle: 'Code',
            id: 1,
            showTab: 'show_websites'
        },
        {
            tabTitle: 'Design',
            id: 2,
            showTab: 'show_designs'
        },
        {
            tabTitle: 'Art',
            id: 3,
            showTab: 'show_art'
        }
    ],
    projects: [
        {
            title: "kelly kahn art",
            img: '',
            url: '',
            description: '',
            id: 2,
            showAll: true,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "scott brothers",
            img: '/images/work/Drew-and-Jonathan-Scott.jpg',
            url: 'https://thescottbrothers.com/',
            description: '',
            id: 0,
            showAll: true,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "pet portrait",
            img: '',
            url: '',
            description: '',
            id: 4,
            showAll: true,
            type: "art",
            show: 'show_art'
        },
        {
            title: "the barber bar",
            img: '/images/work/The-Barber-Bar-Birmingham.jpg',
            url: '',
            description: '',
            id: 3,
            showAll: true,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "something else",
            img: '',
            url: '',
            description: '',
            id: 4,
            showAll: true,
            type: "art",
            show: 'show_art'
        },
        {
            title: "powell law firm",
            img: '/images/work/Powell-Law-Firm.jpg',
            url: 'https://www.powell.law/',
            description: '',
            id: 1,
            showAll: true,
            type: "website",
            show: 'show_websites' 
        },
        {
            title: "something else",
            img: '',
            url: '',
            description: '',
            id: 4,
            showAll: true,
            type: "art",
            show: 'show_art'
        }
    ]
}

export const clientData = [
    {
        img: '',
        alt: ''
    },
    {
        img: '',
        alt: ''
    },
    {
        img: '',
        alt: ''
    },
    {
        img: '',
        alt: ''
    },
    {
        img: '',
        alt: ''
    },
    {
        img: '',
        alt: ''
    }
]

export const testimonialData = {
    sectionTitle: '_kind words',
    testimonials: [
        {
            text: '',
            id: '0'
        },
        {
            text: '',
            id: '1'
        },
        {
            text: '',
            id: '2'
        }
    ]
}

export const instaData = {
    posts: [
        {
            img: '/images/instafeed/typography.webp',
            fallback: '/images/instafeed/typography.png',
            alt: 'typography quote',
            id: 0
        },
        {
            img: '/images/instafeed/dog_pet_portrait.webp',
            fallback: '/images/instafeed/dog_pet_portrait.png',
            alt: 'pet portrait painting of a dog on canvas',
            id: 1
        },
        {
            img: '/images/instafeed/clover_hill_boutique.webp',
            fallback: '/images/instafeed/clover_hill_boutique.png',
            alt: 'clover hill boutique logo',
            id: 2
        },
        {
            img: '/images/instafeed/black_white_portrait.webp',
            fallback: '/images/instafeed/black_white_portrait.png',
            alt: 'black and white portrait painting on canvas',
            id: 3
        },
        {
            img: '/images/instafeed/flower_petals.webp',
            fallback: '/images/instafeed/flower_petals.png',
            alt: 'flower petals diptych painting on wood',
            id: 4
        }
    ]
}

export const timelineData = {
    sectionTitle: '_Timeline',
    years: [
        {
            year: '2016',
            company: 'graduated from U of A',
            jobTitle: 'Graphic Design + Advertising Degree',
        },
        {
            year: '2017',
            company: 'walls media, ccg ideas, flex digital',
            jobTitle: 'Creative Graphic Design Intern',
        },
        {
            year: '2018',
            company: 'graduated from The Creative Circus',
            jobTitle: 'Interactive Web Development Certificate',
        },
        {
            year: '2019',
            company: 'Vehicle Media',
            jobTitle: 'WordPress / PHP Developer',
        },
        {
            year: '2021',
            company: 'DynamiX',
            jobTitle: 'Front-End Developer',
        },
        {
            year: 'now',
            company: 'Avanade',
            jobTitle: 'Senior Software Engineer',
        }
    ]
}