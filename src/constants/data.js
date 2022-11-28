export const navData = {
    navigation: [
        {
            pageTitle: 'Home',
            linkTo: '/',
            id: 0
        },
        {
            pageTitle: 'Work',
            linkTo: '/Work',
            id: 1
        },
        {
            pageTitle: 'Resume',
            linkTo: '/Resume',
            id: 2
        }
    ],
    socialIcons: [{
        url: 'https://github.com/erinkahn',
            siteName: 'github',
            id: 2
        },
        {
            url: 'https://open.spotify.com/user/121609086?si=e4fbfc938a8b4d12',
            siteName: 'spotify',
            id: 1
        },
        {
            url: 'https://www.linkedin.com/in/erinnkahn/',
            siteName: 'linkedin',
            id: 0
        }
    ]
}

export const heroData = {
    home: {
        title: 'hello world',
        subtitle: 'I bring design to life',
        // image: './images/heros/home-office-desk.webp',
        // fallback: './images/heros/home-office-desk.png',
        // alt: 'home office'
    },
    work: {
        title: 'work',
        subtitle: 'coding + design',
        // image: '',
        // fallback: '',
        // alt: ''
    },
    resume: {
        title: 'resume',
        subtitle: 'experience + skills',
        // image: '',
        // fallback: '',
        // alt: ''
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
    ]
}

export const servicesData = {
    sectionTitle: '',
    services: [
        {
            serviceTitle: 'Branding + Logos',
            description: 'I make logos, branding identity suites, business cards, stickers, fliers, and more.',
            icon: '/images/services/branding.svg',
            alt: 'fingerprint'
        },
        {
            serviceTitle: 'Web/UX Design',
            description: 'I design small to large websites, web pages, and even mobile applications.',
            icon: '/images/services/webDesign.svg',
            alt: 'artboard'
        },
        {
            serviceTitle: 'Web Development',
            description: 'I build custom websites from scratch with front end technologies.',
            icon: '/images/services/webDevelopment.svg',
            alt: 'webpage'
        }
    ]
}

export const workData = {
    sectionTitle: 'work',
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

export const testimonialData = {
    sectionTitle: 'kind words',
    testimonials: [
        {
            text: "Erin helped me rebrand my online clothing boutique. She met with me and figured out what I was trying to achieve (even when I wasn't quite sure myself). She turned my vision into a reality, and I couldn't be more pleased with the outcome!",
            person: "Owner of Clover Hill Boutique",
            id: '0'
        },
        {
            text: " I appreciate you so much for so many reasons but particularly going the grind of what was the most stressful time ever. This all looks so good. My lord. I’m so grateful to have met you.",
            person: "President of Vehicle Media",
            id: '1'
        },
        {
            text: "You can't depend on hardly ANYbody these days to finish things. I love my logo so much. Thank you!",
            person: "Author of The 50th Dimension",
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
    sectionTitle: 'timeline',
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