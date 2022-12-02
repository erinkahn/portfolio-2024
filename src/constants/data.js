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
    },
    work: {
        title: 'work',
        subtitle: 'coding + design',
    },
    resume: {
        title: 'resume',
        subtitle: 'experience + skills',
    }
}

export const typewriterData = {
    typewriter: [
        'front-end developer.',
        'freelance designer.',
        'creative technologist.'
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

export const featuredData = {
    sectionTitle: 'work',
    featured: [
        {
            client: 'Scott Brothers',
            slideNum: '01',
            tech: 'PHP, WordPress, Git, Sass, JavaScript',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
            role: 'Developer',
            src: '/images/work/Drew-and-Jonathan-Scott.webp',
            fallback: '/images/work/Drew-and-Jonathan-Scott.png',
            lowRes: '/images/work/Drew-and-Jonathan-Scott-lr.png',
            alt: 'The Scott Brother Twins',
            url: 'https://thescottbrothers.com/'
        },
        {
            client: 'Waffle House',
            slideNum: '02',
            tech: 'PHP, WordPress, Git, Sass, JavaScript, Vue',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
            role: 'Developer',
            src: '/images/work/The-Waffle-House.webp',
            fallback: '/images/work/The-Waffle-House.png',
            lowRes: '/images/work/The-Waffle-House-lr.png',
            alt: 'Waffle House building',
            url: 'https://www.wafflehouse.com/'
        },
        {
            client: 'The Conlan Company',
            slideNum: '03',
            tech: 'PHP, WordPress, Git, Sass, JavaScript',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
            role: 'Developer',
            src: '/images/work/Conlan-Company.webp',
            fallback: '/images/work/Conlan-Company.png',
            lowRes: '/images/work/Conlan-Company-lr.png',
            alt: 'The Conlan Company',
            url: 'https://conlancompany.com/'
        },{
            client: 'Expo Home Improvement',
            slideNum: '04',
            tech: 'PHP, Git, Sass, JavaScript',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
            role: 'Developer',
            src: '/images/work/Expo-Home-Improvement.webp',
            fallback: '/images/work/Expo-Home-Improvement.png',
            lowRes: '/images/work/Expo-Home-Improvement-lr.png',
            alt: 'Expo Home Improvement',
            url: 'https://expohomeimprovement.com/'
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
            year: '2022',
            company: 'Avanade',
            jobTitle: 'Senior Analyst, Software Engineer',
        }
    ]
}

export const aboutData = {
    sectionTitle: "about",
    content: 'I am a creative front-end developer with a background in design. I switched over to coding full-time in 2017. I do freelance design on the side for fun. Besides staring at screens for a living, I enjoy spending the other part of my life far away from technology.',
    content2: 'Being out in nature, hiking, camping, and staying active are things that fill my cup. I enjoy living a minimalist life, listening to old music, reading about psychology, and writing.',
    img: {
        src: './images/about/erin.webp',
        fallback: './images/about/erin.png',
        lowRes: './images/about/erin_low_res.png',
        alt: 'portrait shot of erin kahn'
    }
}