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

export const sections = {
    homepage: [
        {
            num: 0,
            id: "hero",
            title: 'hero'
        },
        {
            num: 1,
            id: "services",
            title: 'services'
        },
        {
            num: 2,
            id: "featured",
            title: 'featured work'
        },
        {
            num: 3,
            id: "about",
            title: 'about'
        },
        {
            num: 4,
            id: "testimonials",
            title: 'testimonials'
        },
        {
            num: 5,
            id: "footer",
            title: 'footer'
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
            content: 'A newly designed Wordpress website built for The Scott Brothers, the famous HGTV fixer-upper brothers',
            role: 'Developer',
            devs: 'John Finch, Dave Carney',
            src: '/images/work/code/d&j/Drew-and-Jonathan-Scott.webp',
            fallback: '/images/work/code/d&j/Drew-and-Jonathan-Scott.jpg',
            lowRes: '/images/work/code/d&j/Drew-and-Jonathan-Scott-lr.jpg',
            alt: 'The Scott Brother Twins',
            url: 'https://thescottbrothers.com/'
        },
        {
            client: 'Waffle House',
            slideNum: '02',
            tech: 'HTML, PHP, WordPress, Git, Sass, JavaScript, Vue',
            content: `A newly redesigned website for Waffle House, America's favorite breakfast spot`,
            role: 'Developer',
            devs: 'John Finch, Dave Carney',
            src: '/images/work/code/waffle/The-Waffle-House.webp',
            fallback: '/images/work/code/waffle/The-Waffle-House.jpg',
            lowRes: '/images/work/code/waffle/The-Waffle-House-lr.jpg',
            alt: 'Waffle House building',
            url: 'https://www.wafflehouse.com/'
        },
        {
            client: 'The Conlan Company',
            slideNum: '03',
            tech: 'PHP, WordPress, Git, Sass, JavaScript, Waypoints, GSAP',
            content: 'A newly designed website for Conlan Company, a large contracting company located in Goergia, Florida and Texas',
            role: 'Lead Developer',
            devs: 'none',
            src: '/images/work/code/conlan/Conlan-Company.webp',
            fallback: '/images/work/code/conlan/Conlan-Company.jpg',
            lowRes: '/images/work/code/conlan/Conlan-Company-lr.jpg',
            alt: 'The Conlan Company',
            url: 'https://conlancompany.com/'
        },{
            client: 'Expo Home Improvement',
            slideNum: '04',
            tech: 'PHP, Git, Sass, JavaScript, Vue, Custom CMS',
            content: 'A custom built website for Expo Home Improvement, a home improvement company located in Texas',
            role: 'Lead Developer',
            devs: 'Eric King',
            src: '/images/work/code/expo/Expo-Home-Improvement.webp',
            fallback: '/images/work/code/expo/Expo-Home-Improvement.jpg',
            lowRes: '/images/work/code/expo/Expo-Home-Improvement-lr.jpg',
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
            img: '/images/work/design/kelly-kahn-art.svg',
            url: '',
            description: 'Logo design for fine artist, Kelly Kahn, who specializes in custom portrait and landscape paintings',
            id: 2,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "scott brothers",
            img: '/images/work/code/d&j/Drew-and-Jonathan-Scott.jpg',
            url: 'https://thescottbrothers.com/',
            description: 'A newly designed Wordpress website built for The Scott Brothers, the famous HGTV fixer-upper brothers',
            id: 0,
            showAll: true,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "pet portrait",
            img: '/images/work/art/dog.jpg',
            url: '',
            description: `Pet portrait of a dear friend's sister's dog`,
            id: 4,
            showAll: true,
            type: "art",
            show: 'show_art'
        },
        {
            title: "the barber bar",
            img: '/images/work/design/The-Barber-Bar-Birmingham.jpg',
            url: '',
            description: 'Logo design and brand identity suite for a locally owned barber salon in Birmingham, Alabama',
            id: 3,
            showAll: true,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "klimt",
            img: '/images/work/art/klimt.jpg',
            url: '',
            description: 'Artwork inspired by one of my favorite artist, Gustav Klimt',
            id: 4,
            showAll: true,
            type: "art",
            show: 'show_art'
        },
        {
            title: "powell law firm",
            img: '/images/work/code/Powell-Law-Firm.jpg',
            url: 'https://www.powell.law/',
            description: 'A custom built site for Powell Law Firm, an injury law firm located in Kentucky',
            id: 5,
            showAll: true,
            type: "website",
            show: 'show_websites' 
        },
        {
            title: "sheffield lentine",
            img: '/images/work/code/sheffield-lentine.jpg',
            url: 'https://www.sheffieldlentine.com/',
            description: 'A website built for Birmingham law firm, Sheffield & Lentine, which won 3rd place in the 2019 Webby Awards under the law category',
            id: 6,
            showAll: true,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "fireside natural gas",
            img: '/images/work/code/fireside-natural-gas.jpg',
            url: 'https://firesidenaturalgas.com/',
            description: `A custom built website for FireSide Natural Gas, one of Georgia's top providers of natural gas service for commercial and industrial users`,
            id: 7,
            showAll: true,
            type: "website",
            show: 'show_websites' 
        },
        {
            title: "vehicle media",
            img: '/images/work/code/vehicle-media.jpg',
            url: 'https://www.vehiclemedia.com/',
            description: 'Vehicle Media is a digital marketing agency in Atlanta, Georgia that focuses on graphic + web design, social media, web development, photography and communication strategies.',
            id: 8,
            showAll: true,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "winter capriola zenner",
            img: '/images/work/code/winter-capriola-zenner.jpg',
            url: 'https://wczlaw.com/',
            description: 'A newly designed website for WCZ, a legal firm that offers litigation, business transactions, real estate and disputes services',
            id: 9,
            showAll: true,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "robinson weeks partners",
            img: '/images/work/code/robinson-weeks-partners.jpg',
            url: 'https://robinsonweeks.com/',
            description: 'A website for Robinson Weeks Partners, an industrial real estate development and investment firm located in Atlanta, GA',
            id: 10,
            showAll: true,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "waffle house",
            img: '/images/work/code/waffle/The-Waffle-House.jpg',
            url: 'https://www.wafflehouse.com/',
            description: `A newly redesigned website for Waffle House, America's favorite breakfast spot`,
            id: 11,
            showAll: true,
            type: "website",
            show: 'show_websites'
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