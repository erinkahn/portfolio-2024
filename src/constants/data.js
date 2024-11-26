export const navData = {
    navigation: [
        {
            pageTitle: 'Home',
            linkTo: '/',
            id: 0
        },
        {
            pageTitle: 'Work',
            linkTo: '/work',
            id: 1
        },
        {
            pageTitle: 'Resume',
            linkTo: '/resume',
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
        scrollBtn: true
    },
    work: {
        title: 'work',
        subtitle: 'coding + design',
        scrollBtn: true
    },
    resume: {
        title: 'resume',
        subtitle: 'experience + skills',
        scrollBtn: true
    },
    missing: {
        title: '404',
        subtitle: 'Oops...try again',
        scrollBtn: false
    }
}

export const typewriterData = {
    typewriter: [
        'front-end developer.',
        'software engineer.',
        'creative technologist.'
    ]
}

export const servicesData = {
    sectionTitle: '',
    services: [
        {
            serviceTitle: 'Attention to detail',
            description: 'As a former designer, I can spot UI/UX issues early on before they become a problem.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87 87">
                    <g className="svg-stroke" fill="none" stroke="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" data-name="Group 8">
                    <g transform="translate(7 7)">
                        <rect className="path1" width="73" height="73" stroke="none" rx="3"/>
                        <rect className="path1" width="71" height="71" x="1" y="1" rx="2"/>
                    </g>
                        <path d="M80 5V1" data-name="Path 9"/>
                        <path d="M80 86v-4" data-name="Path 9 Copy 2"/>
                        <path d="M8 5V1" data-name="Path 9 Copy"/>
                        <path d="M8 86v-4" data-name="Path 9 Copy 3"/>
                        <path d="M82 80h4" data-name="Path 10"/>
                        <path d="M1 80h4" data-name="Path 10 Copy 2"/>
                        <path d="M82 8h4" data-name="Path 10 Copy"/>
                        <path d="M1 8h4" data-name="Path 10 Copy 3"/>
                    </g>
                </svg>,
            alt: 'fingerprint'
        },
        {
            serviceTitle: 'Future Thinking',
            description: 'I build things with the future in mind. Clean, modular code creates happy teams.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g className="svg-stroke" fill="none">
                <path className="path2" strokeWidth="0.5" stroke-linecap="round" d="M3.3 17.6a3.3 3.3 0 0 0 3.1 2.2h.1A2.8 2.8 0 0 0 9.2 22c.5 0 1-.1 1.3-.3a1 1 0 0 0 .5-.9V3a1 1 0 0 0-.8-1 2.3 2.3 0 0 0-1.5.2c-.7.4-1.1 1.2-1.1 2a2.8 2.8 0 0 0-2.8 4.5A3.3 3.3 0 0 0 2 12c0 1.2.6 2.2 1.5 2.8-.4.8-.5 1.8-.2 2.8zm15.9-8.9a2.8 2.8 0 0 0-2.8-4.4c0-.9-.4-1.7-1.1-2a2.3 2.3 0 0 0-1.5-.3 1 1 0 0 0-.8 1v17.8c0 .4.2.7.5.9.4.2.8.3 1.3.3a2.8 2.8 0 0 0 2.7-2.2c1.5 0 2.8-.9 3.2-2.2.3-1 .2-2-.2-2.8A3.4 3.4 0 0 0 22 12a3.3 3.3 0 0 0-2.8-3.3z"/>
                </g>
            </svg>,
            alt: 'artboard'
        },
        {
            serviceTitle: 'Consistent Communication',
            description: 'I communicate and ask questions consistently to reduce confusion & save time.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <g className="svg-stroke">
                    <path className="path2" fill="none" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M6.6 16.6 2.8 19l.7-4.2A7.7 7.7 0 0 1 1 9C1 4.6 4.5 1 10 1s9 3.6 9 8c0 4.5-3.5 8.1-9 8.1a11 11 0 0 1-3.4-.5h0Z"/>
                    <path className="path2" fill="none" stroke-width="0.5" d="M6 8a1 1 0 0 1 .1 2H6a1 1 0 0 1-.1-2H6ZM10 8a1 1 0 0 1 .1 2H10a1 1 0 0 1-.1-2h.1ZM14 8a1 1 0 0 1 .1 2H14a1 1 0 0 1-.1-2h.1Z"/>
                </g>
            </svg>,
            alt: 'webpage'
        }
    ]
}

export const featuredData = {
    sectionTitle: 'work',
    featured: [
        {
            client: 'Waffle House',
            slideNum: '01',
            tech: 'HTML, PHP, WordPress, Git, Sass, JavaScript, Vue',
            content: `A newly redesigned website for Waffle House, America's favorite breakfast spot`,
            role: 'Developer',
            devs: 'John Finch, Dave Carney',
            desktop: '/images/work/code/waffle/WH-desktop.webp',
            tablet: '/images/work/code/waffle/WH-tablet.webp',
            mobile: '/images/work/code/waffle/WH-mobile.webp',
            alt: 'Waffle House building',
            url: 'https://www.wafflehouse.com/'
        },
        {
            client: 'Cahaba Brewing Co.',
            slideNum: '02',
            tech: 'PHP, WordPress, Git, Sass, JavaScript, Illustrator, ACF',
            content: 'As a freelance designer/developer, I offered creative designs and technical solutions that improved the overall code quality, page responsiveness, SEO, and design consistency across the site.',
            role: 'Freelance Developer/Designer',
            devs: 'Devote Studio',
            desktop: '/images/work/code/cahaba/Cahaba-Brewing-Co.webp',
            tablet: '/images/work/code/cahaba/Cahaba-Brewing-Co.webp',
            mobile: '/images/work/code/cahaba/Cahaba-Brewing-Co.webp',
            alt: 'Cahaba Brewing blonde beer webpage',
            url: 'https://cahababrewing.com/'
        },
        {
            client: 'Expo Home Improvement',
            slideNum: '03',
            tech: 'PHP, Git, Sass, JavaScript, Vue, Custom CMS',
            content: 'A custom built website for Expo Home Improvement, a home improvement company located in Texas',
            role: 'Lead Developer',
            devs: 'Eric King',
            desktop: '/images/work/code/expo/Expo-Desktop.webp',
            tablet: '/images/work/code/expo/Expo-tablet.webp',
            mobile: '/images/work/code/expo/Expo-mobile.webp',
            alt: 'Expo Home Improvement',
            url: 'https://expohomeimprovement.com/'
        }
    ]
}

export const workData = {
    sectionTitle: 'work',
    tabs: [
        // {
        //     tabTitle: 'All',
        //     id: 0,
        //     showTab: 'show_all'
        // },
        {
            tabTitle: 'Code',
            id: 0,
            showTab: 'show_websites'
        },
        {
            tabTitle: 'Design',
            id: 1,
            showTab: 'show_designs'
        },
        {
            tabTitle: 'Art',
            id: 2,
            showTab: 'show_art'
        },
        {
            tabTitle: 'Student',
            id:3,
            showTab: 'show_student'
        }
    ],
    projects: [
        {
            title: "Aerangis",
            img: '/images/work/code/aerangis/Aerangis.webp',
            url: 'https://aerangis.com/',
            role: 'Developer',
            designers: 'Jade Nipper',
            icons: [
                {
                    img: '/images/work/icons/shopify.svg',
                    alt: 'shopify icon'
                },
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/sketch.svg',
                    alt: 'sketch icon'
                }, 
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: `Aerangis is a handmade fragrance line based out of New York City. Filled in beautiful clay pots, Aerangis’ candles come in an array of signature + custom scents based on clients’ favorite herbs and flowers. While working at Vehicle Media, I took a customized design based on the client's Shopify theme and adjusted the styles and markup to match the revised design.`,
            id: 0,
            showAll: false,
            type: "website",
            show: 'show_websites' 
        },
        {
            title: "Pet Portrait",
            img: '/images/work/art/dog.jpg',
            role: 'Artist',
            thumbnails: [
                {
                    img: '/images/work/art/dog.jpg',
                    alt: 'painting of a dog holding a tennis ball'
                }
            ],      
            description: `acrylic on canvas`,
            id: 1,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "The Barber Bar",
            img: '/images/work/design/barberBar/logo.png',
            role: 'Designer',
            thumbnails: [
                {
                    img: '/images/work/design/barberBar/logo.png',
                    alt: 'barber bar logo'
                },
                {
                    img: '/images/work/design/barberBar/store-exterior.jpg',
                    alt: 'storefront exterior'
                },
                {
                    img: '/images/work/design/barberBar/logo-concepts.jpg',
                    alt: 'storefront exterior'
                },
                {
                    img: '/images/work/design/barberBar/team-ts.jpg',
                    alt: 'barber team wearing matching black tshirts'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/indesign.svg',
                    alt: 'indesign icon'
                },
            ],
            description: 'As a freelance designer, I created a brand identity suite and new logo for a locally owned barber salon in Birmingham, Alabama called The Barber Bar.',
            id: 2,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Klimt",
            img: '/images/work/art/klimt.jpg',
            role: 'Artist',
            thumbnails: [
                {
                    img: '/images/work/art/klimt.jpg',
                    alt: 'artwork'
                },
                
            ],
            description: 'Colored Pencil, inspired by one of my favorite artists, Gustav Klimt',
            id: 3,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "Vehicle Media",
            img: '/images/work/code/vm/Vehicle-Media.webp',
            url: 'https://www.vehiclemedia.com/',
            role: 'Developer',
            designers: 'Yinan Xu, Jade Nipper',
            devs: 'Dave Carney, John Finch',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                {
                    img: '/images/work/icons/acf.svg',
                    alt: 'advanced custom fields icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/gsap.svg',
                    alt: 'gsap icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                }
            ],
            description: 'Vehicle Media is a digital marketing agency in Atlanta, Georgia that focuses on graphic + web design, social media, web development, photography and communication strategies. While working at Vehicle Media, I built a new site for the company that showcased new designs, updated projects, blogposts, and more.',
            id: 4,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Sheffield Lentine",
            img: '/images/work/code/sheffieldL/Sheffield-Lentine.webp',
            url: 'https://www.sheffieldlentine.com/',
            role: 'Developer',
            designers: 'Jade Nipper',
            devs: 'John Finch',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/jquery.svg',
                    alt: 'jquery icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                {
                    img: '/images/work/icons/acf.svg',
                    alt: 'advanced custom fields icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/gsap.svg',
                    alt: 'gsap icon'
                },
                {
                    img: '/images/work/icons/xd.svg',
                    alt: 'xd icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: 'Based out of Birmingham, Alabama, Sheffield and Lentine is a law firm that specializes in all areas of criminal defense, including personal injuries, domestic relations and family law. S&L was in need of a full rebrand. I built a custom WordPress theme from scratch while working at Vehicle Media. The website was nominated and finished in the top 5 for the Webby Awards as “one of the best of web” in the “law” category.',
            id: 5,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Powell Law Firm",
            img: '/images/work/code/powell/Powell-Law.webp',
            url: 'https://www.powell.law/',
            role: 'Developer',
            designers: 'David Bilbo',
            devs: 'Andrew Borem',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: 'Powell Law Firm is an injury law firm located in Kentucky. While working at DynamiX Web Design, I transformed a PhotoShop design file into a fully custom and dynamic CMS website with PHP.',
            id: 6,
            showAll: false,
            type: "website",
            show: 'show_websites' 
        },
        {
            title: "VSB",
            img: '/images/work/design/vsb/vsb-bus-card.jpg',
            role: 'Designer',
            thumbnails: [
                {
                    img: '/images/work/design/vsb/vsb-bus-card.jpg',
                    alt: 'business cards'
                },
                {
                    img: '/images/work/design/vsb/logo-concepts.jpg',
                    alt: 'desk with two papers of logos'
                },
                {
                    img: '/images/work/design/vsb/brand-identity.jpg',
                    alt: 'holding an ipad at a desk'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/indesign.svg',
                    alt: 'indesign icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
            ],
            description: 'As a freelance designer, I designed the logo and brand identity suite for Volunteer State Builders, a General Contractor/Home Builder located in Middle Tennessee.',
            id: 7,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Waffle House",
            img: '/images/work/code/waffle/WH-desktop.webp',
            url: 'https://www.wafflehouse.com/',
            role: 'Developer',
            designers: 'Leah Watson',
            devs: 'John Finch, Dave Carney',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                {
                    img: '/images/work/icons/acf.svg',
                    alt: 'advanced custom fields icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/gsap.svg',
                    alt: 'gsap icon'
                },
                {
                    img: '/images/work/icons/vue.svg',
                    alt: 'vue icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                }
            ],
            description: `You either know what Waffle House is or you don't. America's favorite breakfast spot was in need of a major site rehaul. While working with two other develoepers at Vehicle Media on this project, I built and styled several components, pages, and sections of the website. Specific examples being the blogposts, homepage components and sliders, animations, parts of the nav menu, etc.`,
            id: 8,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Handlettering",
            img: '/images/work/art/calligraphy.jpg',
            role: 'Calligrapher',
            thumbnails: [
                {
                    img: '/images/work/art/calligraphy.jpg',
                    alt: 'frame of a quote sitting on a desk'
                },
                {
                    img: '/images/work/art/quote.jpg',
                    alt: 'quote'
                }
            ],
            description: 'digital ipad',
            id: 9,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "Novo",
            img: '/images/work/design/novo/ipad-colors.jpg',
            role: 'Freelance Designer',
            thumbnails: [
                {
                    img: '/images/work/design/novo/ipad-colors.jpg',
                    alt: 'ipad screen on desk'
                },
                {
                    img: '/images/work/design/novo/desktop.jpg',
                    alt: 'mac desktop computer on a desk'
                },
                {
                    img: '/images/work/design/novo/xd.jpg',
                    alt: 'xd program'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/xd.svg',
                    alt: 'xd icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
            ],
            description: 'As a freelance designer, I redesigned the user interface and provided logo/branding adjustments for a legal software application built by Vehicle Media.',
            id: 10,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Robinson Weeks Partners",
            img: '/images/work/code/rw/Robinson-Weeks.webp',
            url: 'https://robinsonweeks.com/',
            role: 'Developer',
            designers: 'VM Designer',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/jquery.svg',
                    alt: 'jquery icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/xd.svg',
                    alt: 'xd icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: 'Based out of Atlanta, Robinson Weeks is an industrial real estate development and investment firm. Being a niche market, their overall goal was to take their outdated site and make it modern while still keeping a high-end specialty aesthetic. I built a custom WordPress theme from scratch with ACF and ACP for customization and dynamic content.',
            id: 11,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Clover Hill",
            img: '/images/work/design/ch/earrings.jpg',
            role: 'Designer + Developer',
            thumbnails: [
                {
                    img: '/images/work/design/ch/earrings.jpg',
                    alt: 'earrings'
                },
                {
                    img: '/images/work/design/ch/clothing-tags.jpg',
                    alt: 'clothing tags'
                },
                {
                    img: '/images/work/design/ch/storefront.jpg',
                    alt: 'store opening'
                },
                {
                    img: '/images/work/design/ch/bus-cards.jpg',
                    alt: 'business cards'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
                {
                    img: '/images/work/icons/indesign.svg',
                    alt: 'indesign icon'
                },
                {
                    img: '/images/work/icons/shopify.svg',
                    alt: 'shopify icon'
                }
            ],
            description: 'As a freelance designer/developer, I created the logo and worked on the shopify site for a clothing boutique in Pell City, Alabama called Clover Hill. I also designed business cards, clothing tags, and stickers.',
            id: 12,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Nude Portrait",
            img: '/images/work/art/back-portrait2.jpg',
            role: 'Artist',
            thumbnails: [
                {
                    img: '/images/work/art/back-portrait2.jpg',
                    alt: 'living room painting'
                },
                {
                    img: '/images/work/art/back-portrait.jpg',
                    alt: 'painting on an easel'
                }
            ],
            description: 'acrylic on canvas',
            id: 13,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "GKC",
            img: '/images/work/design/gk/grace-klein-community.jpg',
            role: 'Graphic Designer',
            thumbnails: [
                {
                    img: '/images/work/design/gk/grace-klein-community.jpg',
                    alt: 'non-profit truck'
                },
                {
                    img: '/images/work/design/gk/ipad.jpg',
                    alt: 'holding an ipad'
                },
                {
                    img: '/images/work/design/gk/logo-concepts.jpg',
                    alt: 'logo concepts on a desk'
                },
                {
                    img: '/images/work/design/gk/ipad2.jpg',
                    alt: 'ipad on a desk'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/indesign.svg',
                    alt: 'indesign icon'
                },
            ],
            description: 'As an intern, I created the new logo for GKC, a non-profit organization in Alabama',
            id: 14,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Expo Home Improvements",
            img: '/images/work/code/expo/Expo-mobile.webp',
            url: 'https://expohomeimprovement.com/',
            role: 'Developer',
            designers: 'David Bilbo',
            devs: 'Eric King',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/git.svg',
                    alt: 'git icon'
                },
                {
                    img: '/images/work/icons/vue.svg',
                    alt: 'vue icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: `Expo Home Improvement is a home improvement company located in Texas. Their purpose is providing homeowners throughout the Dallas-Fort Worth area with high-quality, efficient, and affordable home remodeling. While working at DynamiX Web Design, I turned a PhotoShop web design into a fully responsive, dynamic, and customizable CMS website.`,
            id: 15,
            showAll: false,
            type: "website",
            show: 'show_websites' 
        },
        {
            title: "Floral Diptych",
            img: '/images/work/art/floral-diptych.jpg',
            role: 'Artist',
            thumbnails: [
                {
                    img: '/images/work/art/floral-diptych.jpg',
                    alt: 'colorful flowers painted on two boards'
                }
            ],
            description: "acrylic on wood",
            id: 16,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "Kelly Kahn Art",
            img: '/images/work/design/kkart/logo-light.jpg',
            role: 'Graphic Designer',
            thumbnails: [
                {
                    img: '/images/work/design/kkart/bus-cards.jpg',
                    alt: 'business card design'
                },
                {
                    img: '/images/work/design/kkart/kkart-logo.jpg',
                    alt: 'logo design'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/indesign.svg',
                    alt: 'indesign icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: 'As a freelance designer, I created a logo for fine artist, Kelly Kahn, who specializes in custom portrait and landscape paintings.',
            id: 17,
            showAll: false,
            type: "design",
            show: 'show_designs'
        },
        {
            title: "Cahaba Brewing Company",
            img: '/images/work/code/cahaba/Cahaba-Brewing-Co.webp',
            url: 'https://cahababrewing.com/',
            role: 'Freelance Dev / Designer',
            designers: 'Devote Studio',
            devs: 'Devote Studio',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/php.svg',
                    alt: 'php icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/wordpress.svg',
                    alt: 'wordpress icon'
                },
                {
                    img: '/images/work/icons/acf.svg',
                    alt: 'advanced custom fields icon'
                },
                {
                    img: '/images/work/icons/gravityforms.svg',
                    alt: 'gravity forms icon'
                },
                {
                    img: '/images/work/icons/yoast.svg',
                    alt: 'yoast seo icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                }
            ],
            description: 'Cahaba Brewing Company is microbrewery and distillery located in Birmingham, Alabama and distributing quality craft beer throughout Alabama. Hired as a freelance designer/developer, my goal was to offer creative design and technical solutions to improve the overall code quality, page responsiveness, SEO, and design consistency across the site. I added custom fields to allow the client to update the site on their own, removed repetitive code, designed and created new pages such as 404, added conditionals for the backend, and cleaned up their existing stylesheet significantly.',
            id: 18,
            showAll: false,
            type: "website",
            show: 'show_websites'
        },
        {
            title: "Split",
            img: '/images/work/school/Split.webp',
            url: 'https://erin-kahn.com/sites/split/',
            role: 'Developer',
            designers: 'Carol Ehreth',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/gsap.svg',
                    alt: 'gsap icon'
                },
                {
                    img: '/images/work/icons/sketch.svg',
                    alt: 'sketch icon'
                }
            ],
            description: 'While studying interactive development at The Creative Circus, a designer and I were given an assignment to come up with a design and landing page that was within the category of media. The site we came up with showcases the 2016 thriller film, Split. We decided to play off of the multiple personalities of the protagonist while showcasing parallax animations and both a dark (Beast) and light (Kevin) theme.',
            id:19,
            showAll: false,
            type: "website",
            show: 'show_student'
        },
        {
            title: "Aretha Franklin",
            img: '/images/work/school/Aretha.webp',
            url: 'https://erin-kahn.com/sites/aretha/',
            role: 'Developer + Designer',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/gsap.svg',
                    alt: 'gsap icon'
                },
                {
                    img: '/images/work/icons/sketch.svg',
                    alt: 'sketch icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                }
            ],
            description: `As an interactive development student at The Creative Circus, I took an animations class. The assignment was to build a mini-website that showcased our favorite musical artist. Celebrating the life of the legendary 'Queen of Soul', I chose to build a site that takes the user through the journey of Aretha Franklin's life.`,
            id: 20,
            showAll: false,
            type: "website",
            show: 'show_student'
        },
        {
            title: "Moodie",
            img: '/images/work/school/Moodie.webp',
            role: 'Designer',
            thumbnails: [
                {
                    img: '/images/work/school/moodie-app.webp',
                    alt: 'iphone screen'
                },
                {
                    img: '/images/work/school/illustrations.webp',
                    alt: 'iphone app'
                }
            ],
            icons: [
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
                {
                    img: '/images/work/icons/sketch.svg',
                    alt: 'sketch icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                }
            ],
            description: `As a student at The Creative Circus, I designed an app for users with mental health obstacles. Its purpose is to track a user's mood over time, which transmits stored data to the user's psychiatrist to see progress and if a medication is helpful. Other features include a daily gratitude list, feelings journal, stress tools, and more.`,
            id: 21,
            showAll: false,
            type: "design",
            show: 'show_student'
        },
        {
            title: "Self Portrait",
            img: '/images/work/art/pencil-drawing.png',
            role: 'Artist',
            thumbnails: [
                {
                    img: '/images/work/art/pencil-drawing.png',
                    alt: 'black and white drawing of girl playing piano'
                }
            ],
            description: 'pencil',
            id: 22,
            showAll: false,
            type: "art",
            show: 'show_art'
        },
        {
            title: "Nerds Candy",
            img: '/images/work/school/Nerds.webp',
            url: 'https://erin-kahn.com/sites/nerds/',
            role: 'Developer + Co-Illustrator',
            designers: 'Kate Gallihugh, Leeah Emerson (AD), Will Aebi (Copy)',
            icons: [
                {
                    img: '/images/work/icons/html.svg',
                    alt: 'html icon'
                },
                {
                    img: '/images/work/icons/css.svg',
                    alt: 'css icon'
                },
                {
                    img: '/images/work/icons/sass.svg',
                    alt: 'sass icon'
                },
                {
                    img: '/images/work/icons/javascript.svg',
                    alt: 'javascript icon'
                },
                {
                    img: '/images/work/icons/illustrator.svg',
                    alt: 'illustrator icon'
                },
                {
                    img: '/images/work/icons/photoshop.svg',
                    alt: 'photoshop icon'
                },
            ],
            description: `While at The Creative Circus, an advertising portolio and web development school in Atlanta, I teamed up with a designer, art director, and copywriter. Our assignment was to create a landing page that showcased a brand for kids. We created a Nerds landing page that focuses on unique characters and self expressive games that allow children to embrace their weirdness and unique traits.`,
            id: 23,
            showAll: false,
            type: "website",
            show: 'show_student'
        }
    ]
}

export const testimonialData = {
    sectionTitle: 'kind words',
    testimonials: [
        {
            text: "Erin, your passion for doing the job correctly is possibly unmatched here. You consistently ask good questions, and are definitely commited to performing quality work.",
            person: "Principal Engineer at Alloy Digital",
            id: '0'
        },
        {
            text: "Erin is self-motivated, diligent, and earns praise from peers and leads alike. She shows consistent above-expectations performance as indicated by feedback across her projects. She puts the needs of the company before her own preference.",
            person: "Software Engineering Manager at Avanade",
            id: '1'
        },
        {
            text: "You consistently ask insightful questions that help avoid issues and create better solutions. Your positive attitude makes collaboration a joy, even during challenging phases.",
            person: "Lead Software QA Engineer at Alloy Digital",
            id: '2'
        },
        {
            text: "It's always a pleasure working with you. It's amazing to see your constant growth since our first project. I haven't seen too many developers come in and hit the ground running like you have. Your efficiency and communicaiton is going to take you a long way.",
            person: "Peer Developer at Avanade",
            id: '3'
        },
        {
            text: "I appreciate you so much for so many reasons but particularly going the grind of what was the most stressful time ever. This all looks so good. My lord. I’m so grateful to have met you.",
            person: "President of Vehicle Media",
            id: '4'
        },
        {
            text: "Erin helped me rebrand my online clothing boutique. She met with me and figured out what I was trying to achieve (even when I wasn't quite sure myself). She turned my vision into a reality, and I couldn't be more pleased with the outcome!",
            person: "Client, Owner of Clover Hill Boutique",
            id: '5'
        },
    ]
}

export const timelineData = {
    sectionTitle: 'timeline',
    years: [
        {
            year: '2016',
            company: 'Graduated from University of Alabama',
            position: 'Graphic Design + Advertising Degree',
            summary: `Studied advertising and graphic design, graduating with a 3.96 GPA and earning a spot on the President's List every year. Awarded first place in national advertising competition for designing the plansbook, which showcased our ad campaign, strategy, and creative direction. This accomplishment, achieved in my final year, demonstrated my ability to blend creativity with strategic insight in a highly competitive environment.`,
            url: 'https://www.ua.edu/',
            tools: 'Adobe Creative Suite (Illustrator, Photoshop, InDesign)',
        },
        {
            year: '2016-17',
            company: 'Walls Media, CCG Ideas, Flex Digital',
            position: 'Graphic Design Intern, Freelance Designer',
            summary: 'Created a diverse range of creative assets for CCG clients, including direct mail pieces, digital ads, billboards, infographics, brochures, digital icons, and other print materials. Managed website updates and developed client web pages using WordPress, Umbraco, and basic HTML. Organized and polished web page mockups and design elements, ensuring files and images were ready for smooth handoff to web developers. Designed corporate print materials—such as name tags, brochures, flyers, posters, logos, and business cards—for Walls Media clients, consistently delivering high-quality designs that aligned with client expectations and strengthened brand identity.',
            url: '',
            tools: 'Adobe Creative Suite (Illustrator, Photoshop, InDesign), Umbraco, WordPress, HTML, Microsoft PowerPoint',
        },
        {
            year: '2017-18',
            company: 'graduated from The Creative Circus Portfolio School',
            position: 'Interactive Web Development Certification',
            summary: 'Graduated from one of the top advertising portfolio schools in the country, where I gained 1.75 years of hands-on experience coding websites, web applications, and a mobile app. Strengthened my technical expertise through coursework in UX/UI design, with a focus on optimizing user experiences for mobile platforms. Developed proficiency in content management systems (CMS), including WordPress and BlueHost, to enhance website development and streamline content management. Collaborated closely with designers and developers to craft innovative solutions and create intuitive, user-centered interfaces that addressed real-world challenges.',
            url: 'http://creativecircus.edu/',
            tools: 'HTML5, CSS3, SCSS (SASS), JavaScript, AJAX, Vue, NodeJS, Flexbox, Bootstrap, Greensock (GSAP), WordPress, PHP, Git, GitHub, Bluehost, ACF (Advanced Custom Fields), Sketch, Adobe Creative Suite (XD, Photoshop, InDesign, Illustrator, After Effects)',
        },
        {
            year: '2018-20',
            company: 'Vehicle Media',
            position: 'WordPress + PHP Developer, Freelance Designer',
            summary: 'Began as a Frontend Developer and was quickly promoted to PHP Developer for successfully managing new website builds from start to finish. Took ownership of projects, collaborating independently with designers, project managers, and two remote developers to transform design concepts into fully functional websites. Managed asset export and optimization from Adobe XD, Photoshop, and InDesign to ensure seamless integration. Key projects included high-profile clients such as Waffle House and The Scott Brothers, where I delivered impactful, user-focused web experiences.',
            url: 'https://www.vehiclemedia.com/',
            tools: 'Custom WordPress Child Theme Development, ACF, PHP, Squarespace, Shopify, WOOCommerce, HTML5, CSS3, Sass, JavaScript, BootStrap, Git, jQuery, Adobe Creative Suite (XD, Photoshop, InDesign, Illustrator, After Effects), Lighthouse, Axe, WAVE, BrowserStack',
        },
        {
            year: '2020-21',
            company: 'DynamiX Web Design',
            position: 'Front-End Developer, Freelance Designer',
            summary: 'Developed custom web applications from concept to production, ensuring dynamic, clean, and well-structured code. Managed the creation and maintenance of layouts, categories, pages, and overall site architecture. Regularly debugged and enhanced existing projects by adding new features and optimizing performance. Collaborated with team members through pair programming and conducted code reviews to ensure code quality, consistency, and best practices. Performed comprehensive functionality, performance, and accessibility testing to guarantee optimal user experience. Delivered high-quality websites for clients such as Expo Home Improvements and Powell Law Firm, customizing each project to meet specific business objectives and user needs.',
            url: 'https://dynamix.site/',
            tools: 'PHP, Sass, ES6 JavaScript, NPM, Git, Content Management Systems, RESTFUL APIs, WAVE, Axe, WebAIM, W3C Validator, Lighthouse, PageSpeed Insights, VoiceOver, BrowserStack',
        },
        {
            year: '2021-24',
            company: 'Avanade',
            position: 'React Developer, Freelance Designer/Developer',
            summary: 'As a Sr. Analyst and Front-End Developer, I focused on delivering efficient, scalable software solutions for clients across multiple touchpoints. Collaborating with client, account, and UX leads, I assessed UI/UX needs, made technical recommendations to improve code quality, and implemented long-term maintenance strategies. In 2023, I received the Ambassador Award for proposing UX architecture changes and third-party libraries that enhanced client products. Recognized for my fast regression testing and proactive approach, I conducted code reviews, mentored new developers, and worked with Microsoft Teams to resolve bugs and ensure accurate translation of responsive designs from Figma to the web. I also performed QA testing across devices using BrowserStack, built new features, and wrote unit tests with technologies like React, JavaScript, and Webpack. Additionally, I resolved staffing gaps by quickly finding a replacement for a project role, saving company revenue and easing team workload. My contributions earned multiple awards, including Super Hero and Ambassador recognitions, for my leadership, technical expertise, and commitment to continuous improvement.',
            url: 'https://www.avanade.com/en',    
            tools: 'React, Webpack, JEST, JSON, RESTful APIs, React Testing Library, SQL Server Management Studio, Azure DevOps, TypeScript, JavaScript, Git, NPM, Yarn, Microsoft Visual Studio, Azure DevOps, Tailwind, Prism, WCAG, WAVE, Axe, Lighthouse, VoiceOver, Sketch, Adobe Creative Suite (XD, Illustrator, Photoshop), Figma, BrowserStack, Greensock GSAP',
        },
        {
            year: '2024-',
            company: 'Alloy Digital',
            position: 'Senior Software Engineer',
            summary: 'Independently rebuilt a headless WordPress website, resulting in a 28% performance boost and a 19% improvement in accessibility. With a strong ability to resolve live bugs and manage ongoing client projects, I navigate unfamiliar codebases with minimal direction, demonstrating independence and a commitment to delivering high-quality results. I proactively create QA items, support the QA team, and ensure swift resolution of bugs. Gained expertise in Sanity and GROQ, successfully implementing a robust front-end and back-end content management system in under three months. I take a proactive approach to user experience (UX) by initiating discussions during project phases to identify potential issues early, saving time and resources. Additionally, I optimize images and assets, improve load times, and ensure accessibility by adding alt tags, ARIA labels, and proper semantic HTML.',
            url: 'https://alloy.digital/',        
            tools: 'React, Next.js, TypeScript, GraphQL, APIs, Postman, BrowserStack, Lighthouse, Axe, WAVE, GROQ, Sanity, WordPress, Git, GitHub, Figma, Jira, Vercel',
        }
    ]
}

export const aboutData = {
    sectionTitle: "about",
    content: 'I am a creative front-end developer with a background in design. I switched over to coding full-time in 2017. Besides staring at screens for a living, I enjoy spending the other part of my life far away from technology.',
    content2: 'I live in Denver, CO with my dog, Athena. My favorite things to do are hiking, camping, backpacking, longboarding, and playing piano.',
    img: {
        src: './images/about/erin.webp',
        fallback: './images/about/erin.png',
        lowRes: './images/about/erin_low_res.png',
        alt: 'portrait shot of erin kahn'
    }
}