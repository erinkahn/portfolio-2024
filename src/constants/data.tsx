export interface SocialIcon {
  url: string;
  siteName: string;
  id: number;
}

export interface NavData {
  socialIcons: SocialIcon[];
}

export interface WorkIcon {
  img: string;
  alt: string;
}

export interface WorkThumbnail {
  img: string;
  alt: string;
}

interface WorkProjectCommon {
  title: string;
  img: string;
  role: string;
  description: string;
  id: number;
  showAll: boolean;
  show: string;
  tags: string[];
}

export interface WebsiteProject extends WorkProjectCommon {
  type: "website";
  url: string;
  designers: string;
  devs?: string;
  icons: WorkIcon[];
}

export interface DesignProject extends WorkProjectCommon {
  type: "design";
  thumbnails: WorkThumbnail[];
  icons: WorkIcon[];
}

export interface ArtProject extends WorkProjectCommon {
  type: "art";
  thumbnails: WorkThumbnail[];
}

export type WorkProject = WebsiteProject | DesignProject | ArtProject;

export interface WorkData {
  sectionTitle: string;
  projects: WorkProject[];
}

export interface AboutImageData {
  src: string;
  alt: string;
}

export interface AboutData {
  sectionTitle: string;
  content: string;
  content2: string;
  img: AboutImageData;
}

export const navData: NavData = {
  socialIcons: [
    {
      url: "https://www.instagram.com/erinkahn/",
      siteName: "instagram",
      id: 1,
    },
    {
      url: "https://github.com/erinkahn",
      siteName: "github",
      id: 2,
    },
    {
      url: "https://www.linkedin.com/in/erinnkahn/",
      siteName: "linkedin",
      id: 0,
    },
  ],
};

export const workData: WorkData = {
  sectionTitle: "work",
  projects: [
    {
      title: "Cook's Pest Control",
      img: "/images/work/code/cooks/cooks-pest.webp",
      url: "https://cookspest.com/",
      role: "Developer",
      designers: "Sean Walsh",
      icons: [
        {
          img: "/images/work/icons/react.svg",
          alt: "react",
        },
        {
          img: "/images/work/icons/next.svg",
          alt: "next",
        },
        {
          img: "/images/work/icons/tailwind.svg",
          alt: "tailwind",
        },
        {
          img: "/images/work/icons/ts.svg",
          alt: "TypeScript",
        },
        {
          img: "/images/work/icons/wordpress.svg",
          alt: "wordpress",
        },
        {
          img: "/images/work/icons/javascript.svg",
          alt: "JavaScript",
        },
        {
          img: "/images/work/icons/git.svg",
          alt: "git",
        },
        {
          img: "/images/work/icons/acf.svg",
          alt: "advanced custom fields",
        },
        {
          img: "/images/work/icons/figma.svg",
          alt: "figma",
        },
        {
          img: "/images/work/icons/aws.svg",
          alt: "amazon web services",
        },
      ],
      description: `Family-owned and operated since 1928, Cook's Pest Control has been a trusted provider of superior pest protection throughout the Southeast. During my time at Alloy Digital, I developed a modern headless WordPress website for Cook's using Next.js, resulting in a 28% boost in performance and a 19% improvement in accessibility over their previous site. Additionally, I implemented Advanced Custom Fields (ACF) to streamline content management, restructuring the backend for greater ease of use.`,
      id: 0,
      showAll: false,
      type: "website",
      show: "show_websites",
      tags: ["DEV"],
    },
    {
      title: "Southeast Toyota",
      img: "/images/work/code/set/toyota.webp",
      url: "https://exploresetoyota.com/",
      role: "Developer",
      designers: "Sarah Hopkins & Other",
      devs: "Stan Wakefield, Scott Daniels, Becca Allen",
      icons: [
        {
          img: "/images/work/icons/git.svg",
          alt: "git",
        },
        {
          img: "/images/work/icons/figma.svg",
          alt: "figma",
        },
        {
          img: "/images/work/icons/react.svg",
          alt: "react",
        },
        {
          img: "/images/work/icons/gatsby.svg",
          alt: "gatsby",
        },
        {
          img: "/images/work/icons/tailwind.svg",
          alt: "tailwind",
        },
        {
          img: "/images/work/icons/ts.svg",
          alt: "TypeScript",
        },
        {
          img: "/images/work/icons/aws.svg",
          alt: "aws",
        },
        {
          img: "/images/work/icons/sanity.svg",
          alt: "sanity",
        },
      ],
      description:
        "Southeast Toyota (SET) is the world's largest independent distributor of Toyota and Lexus vehicles, parts, and accessories, serving over 177 dealerships in Alabama, Florida, Georgia, North Carolina, and South Carolina. I resolved both functional and UI/UX bugs, built and rebuilt components, removed console errors and fixed TypeScript errors, and added custom queries for new fields in Sanity (CMS). I also handled QA by thoroughly testing pages across devices, ensuring accessibility compliance, and addressing performance issues such as CLS. Additionally, I improved the responsiveness of modules and refined layout details like padding and spacing to enhance the overall user experience.",
      id: 1,
      showAll: false,
      type: "website",
      show: "show_websites",
      tags: ["DEV"],
    },
    {
      title: "Vehicle Media",
      img: "/images/work/code/vm/Vehicle-Media.webp",
      url: "https://www.vehiclemedia.com/",
      role: "Developer",
      designers: "Yinan Xu, Jade Nipper",
      devs: "Dave Carney, John Finch",
      icons: [
        {
          img: "/images/work/icons/html.svg",
          alt: "HTML",
        },
        {
          img: "/images/work/icons/css.svg",
          alt: "CSS",
        },
        {
          img: "/images/work/icons/sass.svg",
          alt: "sass",
        },
        {
          img: "/images/work/icons/php.svg",
          alt: "PHP",
        },
        {
          img: "/images/work/icons/javascript.svg",
          alt: "JavaScript",
        },
        {
          img: "/images/work/icons/wordpress.svg",
          alt: "wordpress",
        },
        {
          img: "/images/work/icons/acf.svg",
          alt: "advanced custom fields",
        },
        {
          img: "/images/work/icons/git.svg",
          alt: "git",
        },
        {
          img: "/images/work/icons/gsap.svg",
          alt: "gsap",
        },
        {
          img: "/images/work/icons/photoshop.svg",
          alt: "photoshop",
        },
        {
          img: "/images/work/icons/illustrator.svg",
          alt: "illustrator",
        },
      ],
      description:
        "Vehicle Media is a digital marketing agency in Atlanta, Georgia that focuses on graphic + web design, social media, web development, photography and communication strategies. While working at Vehicle Media, I built a new site for the company that showcased new designs, updated projects, blogposts, and more.",
      id: 2,
      showAll: false,
      type: "website",
      show: "show_websites",
      tags: ["DEV", "DESIGN"],
    },
    {
      title: "Sheffield Lentine",
      img: "/images/work/code/sheffieldL/Sheffield-Lentine.webp",
      url: "https://www.sheffieldlentine.com/",
      role: "Developer",
      designers: "Jade Nipper",
      devs: "John Finch",
      icons: [
        {
          img: "/images/work/icons/html.svg",
          alt: "HTML",
        },
        {
          img: "/images/work/icons/css.svg",
          alt: "CSS",
        },
        {
          img: "/images/work/icons/sass.svg",
          alt: "sass",
        },
        {
          img: "/images/work/icons/php.svg",
          alt: "PHP",
        },
        {
          img: "/images/work/icons/javascript.svg",
          alt: "JavaScript",
        },
        {
          img: "/images/work/icons/jquery.svg",
          alt: "jquery",
        },
        {
          img: "/images/work/icons/wordpress.svg",
          alt: "wordpress",
        },
        {
          img: "/images/work/icons/acf.svg",
          alt: "advanced custom fields",
        },
        {
          img: "/images/work/icons/git.svg",
          alt: "git",
        },
        {
          img: "/images/work/icons/gsap.svg",
          alt: "gsap",
        },
        {
          img: "/images/work/icons/xd.svg",
          alt: "xd",
        },
        {
          img: "/images/work/icons/photoshop.svg",
          alt: "photoshop",
        },
      ],
      description:
        "Based out of Birmingham, Alabama, Sheffield and Lentine is a law firm that specializes in all areas of criminal defense, including personal injuries, domestic relations and family law. S&L was in need of a full rebrand. I built a custom WordPress theme from scratch while working at Vehicle Media. The website was nominated and finished in the top 5 for the Webby Awards as “one of the best of web” in the “law” category.",
      id: 3,
      showAll: false,
      type: "website",
      show: "show_websites",
      tags: ["DEV"],
    },
    {
      title: "Powell Law Firm",
      img: "/images/work/code/powell/Powell-Law.webp",
      url: "https://www.powell.law/",
      role: "Developer",
      designers: "David Bilbo",
      devs: "Andrew Borem",
      icons: [
        {
          img: "/images/work/icons/html.svg",
          alt: "HTML",
        },
        {
          img: "/images/work/icons/css.svg",
          alt: "CSS",
        },
        {
          img: "/images/work/icons/sass.svg",
          alt: "sass",
        },
        {
          img: "/images/work/icons/php.svg",
          alt: "PHP",
        },
        {
          img: "/images/work/icons/javascript.svg",
          alt: "JavaScript",
        },
        {
          img: "/images/work/icons/git.svg",
          alt: "git",
        },
        {
          img: "/images/work/icons/photoshop.svg",
          alt: "photoshop",
        },
      ],
      description:
        "Powell Law Firm is an injury law firm located in Kentucky. While working at DynamiX Web Design, I transformed a PhotoShop design file into a fully custom and dynamic CMS website with PHP.",
      id: 4,
      showAll: false,
      type: "website",
      show: "show_websites",
      tags: ["DEV"],
    },
    {
      title: "Waffle House",
      img: "/images/work/code/waffle/WH-desktop.webp",
      url: "https://www.wafflehouse.com/",
      role: "Developer",
      designers: "Leah Watson",
      devs: "John Finch, Dave Carney",
      icons: [
        {
          img: "/images/work/icons/html.svg",
          alt: "HTML",
        },
        {
          img: "/images/work/icons/css.svg",
          alt: "CSS",
        },
        {
          img: "/images/work/icons/sass.svg",
          alt: "sass",
        },
        {
          img: "/images/work/icons/php.svg",
          alt: "PHP",
        },
        {
          img: "/images/work/icons/javascript.svg",
          alt: "JavaScript",
        },
        {
          img: "/images/work/icons/wordpress.svg",
          alt: "wordpress",
        },
        {
          img: "/images/work/icons/acf.svg",
          alt: "advanced custom fields",
        },
        {
          img: "/images/work/icons/git.svg",
          alt: "git",
        },
        {
          img: "/images/work/icons/gsap.svg",
          alt: "gsap",
        },
        {
          img: "/images/work/icons/vue.svg",
          alt: "vue",
        },
        {
          img: "/images/work/icons/photoshop.svg",
          alt: "photoshop",
        },
        {
          img: "/images/work/icons/illustrator.svg",
          alt: "illustrator",
        },
      ],
      description: `America's favorite breakfast spot was in need of a major site rehaul. While working with two other developers at Vehicle Media on this project, I built and styled several components, pages, and sections of the website. Specific examples being the blogposts, homepage components and sliders, animations, parts of the nav menu, etc.`,
      id: 5,
      showAll: false,
      type: "website",
      show: "show_websites",
      tags: ["DEV"],
    },
    {
      title: "Expo Home Improvements",
      img: "/images/work/code/expo/Expo-mobile.webp",
      url: "https://expohomeimprovement.com/",
      role: "Developer",
      designers: "David Bilbo",
      devs: "Eric King",
      icons: [
        {
          img: "/images/work/icons/html.svg",
          alt: "HTML",
        },
        {
          img: "/images/work/icons/css.svg",
          alt: "CSS",
        },
        {
          img: "/images/work/icons/sass.svg",
          alt: "sass",
        },
        {
          img: "/images/work/icons/php.svg",
          alt: "PHP",
        },
        {
          img: "/images/work/icons/javascript.svg",
          alt: "JavaScript",
        },
        {
          img: "/images/work/icons/git.svg",
          alt: "git",
        },
        {
          img: "/images/work/icons/vue.svg",
          alt: "vue",
        },
        {
          img: "/images/work/icons/photoshop.svg",
          alt: "photoshop",
        },
      ],
      description: `Expo Home Improvement is a home improvement company located in Texas. Their purpose is providing homeowners throughout the Dallas-Fort Worth area with high-quality, efficient, and affordable home remodeling. While working at DynamiX Web Design, I turned a PhotoShop web design into a fully responsive, dynamic, and customizable CMS website.`,
      id: 6,
      showAll: false,
      type: "website",
      show: "show_websites",
      tags: ["DEV"],
    },
    {
      title: "Cahaba Brewing Company",
      img: "/images/work/code/cahaba/cahaba-square.webp",
      url: "https://cahababrewing.com/",
      role: "Freelance Dev / Designer",
      designers: "Devote Studio",
      devs: "Devote Studio",
      icons: [
        {
          img: "/images/work/icons/html.svg",
          alt: "HTML",
        },
        {
          img: "/images/work/icons/css.svg",
          alt: "CSS",
        },
        {
          img: "/images/work/icons/php.svg",
          alt: "PHP",
        },
        {
          img: "/images/work/icons/javascript.svg",
          alt: "JavaScript",
        },
        {
          img: "/images/work/icons/wordpress.svg",
          alt: "wordpress",
        },
        {
          img: "/images/work/icons/acf.svg",
          alt: "advanced custom fields",
        },
        {
          img: "/images/work/icons/gravityforms.svg",
          alt: "gravity forms",
        },
        {
          img: "/images/work/icons/yoast.svg",
          alt: "yoast seo",
        },
        {
          img: "/images/work/icons/illustrator.svg",
          alt: "illustrator",
        },
      ],
      description:
        "Cahaba Brewing Company is microbrewery and distillery located in Birmingham, Alabama and distributing quality craft beer throughout Alabama. Hired as a freelance designer/developer, my goal was to offer creative design and technical solutions to improve the overall code quality, page responsiveness, SEO, and design consistency across the site. I added custom fields to allow the client to update the site on their own, removed repetitive code, designed and created new pages such as 404, added conditionals for the backend, and cleaned up their existing stylesheet significantly.",
      id: 7,
      showAll: false,
      type: "website",
      show: "show_websites",
      tags: ["DEV", "DESIGN"],
    },
    {
      title: "Aerangis",
      img: "/images/work/code/aerangis/Aerangis.webp",
      url: "https://aerangis.com/",
      role: "Developer",
      designers: "Jade Nipper",
      icons: [
        {
          img: "/images/work/icons/shopify.svg",
          alt: "shopify",
        },
        {
          img: "/images/work/icons/html.svg",
          alt: "HTML",
        },
        {
          img: "/images/work/icons/css.svg",
          alt: "CSS",
        },
        {
          img: "/images/work/icons/sass.svg",
          alt: "sass",
        },
        {
          img: "/images/work/icons/javascript.svg",
          alt: "JavaScript",
        },
        {
          img: "/images/work/icons/sketch.svg",
          alt: "sketch",
        },
        {
          img: "/images/work/icons/photoshop.svg",
          alt: "photoshop",
        },
      ],
      description: `Aerangis is a handmade fragrance line based out of New York City. Filled in beautiful clay pots, Aerangis’ candles come in an array of signature + custom scents based on clients’ favorite herbs and flowers. While working at Vehicle Media, I took a customized design based on the client's Shopify theme and adjusted the styles and markup to match the revised design.`,
      id: 8,
      showAll: false,
      type: "website",
      show: "show_websites",
      tags: ["DEV"],
    },
    {
      title: "The Barber Bar",
      img: "/images/work/design/barberBar/logo.png",
      role: "Designer",
      thumbnails: [
        {
          img: "/images/work/design/barberBar/logo.png",
          alt: "barber bar logo",
        },
        {
          img: "/images/work/design/barberBar/store-exterior.jpg",
          alt: "storefront exterior",
        },
        {
          img: "/images/work/design/barberBar/logo-concepts.jpg",
          alt: "storefront exterior",
        },
        {
          img: "/images/work/design/barberBar/team-ts.jpg",
          alt: "barber team wearing matching black tshirts",
        },
      ],
      icons: [
        {
          img: "/images/work/icons/illustrator.svg",
          alt: "illustrator",
        },
        {
          img: "/images/work/icons/indesign.svg",
          alt: "indesign",
        },
      ],
      description:
        "As a freelance designer, I created a brand identity suite and new logo for a locally owned barber salon in Birmingham, Alabama called The Barber Bar.",
      id: 9,
      showAll: false,
      type: "design",
      show: "show_designs",
      tags: ["DESIGN"],
    },
    {
      title: "VSB",
      img: "/images/work/design/vsb/vsb-bus-card.jpg",
      role: "Designer",
      thumbnails: [
        {
          img: "/images/work/design/vsb/vsb-bus-card.jpg",
          alt: "business cards",
        },
        {
          img: "/images/work/design/vsb/logo-concepts.jpg",
          alt: "desk with two papers of logos",
        },
        {
          img: "/images/work/design/vsb/brand-identity.jpg",
          alt: "holding an ipad at a desk",
        },
      ],
      icons: [
        {
          img: "/images/work/icons/illustrator.svg",
          alt: "illustrator",
        },
        {
          img: "/images/work/icons/indesign.svg",
          alt: "indesign",
        },
        {
          img: "/images/work/icons/photoshop.svg",
          alt: "photoshop",
        },
      ],
      description:
        "As a freelance designer, I designed the logo and brand identity suite for Volunteer State Builders, a General Contractor/Home Builder located in Middle Tennessee.",
      id: 10,
      showAll: false,
      type: "design",
      show: "show_designs",
      tags: ["DESIGN"],
    },
    {
      title: "Novo",
      img: "/images/work/design/novo/ipad-colors.jpg",
      role: "Freelance Designer",
      thumbnails: [
        {
          img: "/images/work/design/novo/ipad-colors.jpg",
          alt: "ipad screen on desk",
        },
        {
          img: "/images/work/design/novo/desktop.jpg",
          alt: "mac desktop computer on a desk",
        },
        {
          img: "/images/work/design/novo/xd.jpg",
          alt: "xd program",
        },
      ],
      icons: [
        {
          img: "/images/work/icons/xd.svg",
          alt: "xd",
        },
        {
          img: "/images/work/icons/illustrator.svg",
          alt: "illustrator",
        },
      ],
      description:
        "As a freelance designer, I redesigned the user interface and provided logo/branding adjustments for a legal software application built by Vehicle Media.",
      id: 11,
      showAll: false,
      type: "design",
      show: "show_designs",
      tags: ["DESIGN"],
    },
    {
      title: "Clover Hill",
      img: "/images/work/design/ch/earrings.jpg",
      role: "Designer + Developer",
      thumbnails: [
        {
          img: "/images/work/design/ch/earrings.jpg",
          alt: "earrings",
        },
        {
          img: "/images/work/design/ch/clothing-tags.jpg",
          alt: "clothing tags",
        },
        {
          img: "/images/work/design/ch/storefront.jpg",
          alt: "store opening",
        },
        {
          img: "/images/work/design/ch/bus-cards.jpg",
          alt: "business cards",
        },
      ],
      icons: [
        {
          img: "/images/work/icons/illustrator.svg",
          alt: "illustrator",
        },
        {
          img: "/images/work/icons/photoshop.svg",
          alt: "photoshop",
        },
        {
          img: "/images/work/icons/indesign.svg",
          alt: "indesign",
        },
        {
          img: "/images/work/icons/shopify.svg",
          alt: "shopify",
        },
      ],
      description:
        "As a freelance designer/developer, I created the logo and worked on the shopify site for a clothing boutique in Pell City, Alabama called Clover Hill. I also designed business cards, clothing tags, and stickers.",
      id: 12,
      showAll: false,
      type: "design",
      show: "show_designs",
      tags: ["DEV", "DESIGN"],
    },
    {
      title: "GKC",
      img: "/images/work/design/gk/grace-klein-community.jpg",
      role: "Graphic Designer",
      thumbnails: [
        {
          img: "/images/work/design/gk/grace-klein-community.jpg",
          alt: "non-profit truck",
        },
        {
          img: "/images/work/design/gk/ipad.jpg",
          alt: "holding an ipad",
        },
        {
          img: "/images/work/design/gk/logo-concepts.jpg",
          alt: "logo concepts on a desk",
        },
        {
          img: "/images/work/design/gk/ipad2.jpg",
          alt: "ipad on a desk",
        },
      ],
      icons: [
        {
          img: "/images/work/icons/illustrator.svg",
          alt: "illustrator",
        },
        {
          img: "/images/work/icons/indesign.svg",
          alt: "indesign",
        },
      ],
      description:
        "As an intern, I created the new logo for GKC, a non-profit organization in Alabama",
      id: 13,
      showAll: false,
      type: "design",
      show: "show_designs",
      tags: ["DESIGN"],
    },
    {
      title: "Kelly Kahn Art",
      img: "/images/work/design/kkart/logo-light.jpg",
      role: "Graphic Designer",
      thumbnails: [
        {
          img: "/images/work/design/kkart/bus-cards.jpg",
          alt: "business card design",
        },
        {
          img: "/images/work/design/kkart/kkart-logo.jpg",
          alt: "logo design",
        },
      ],
      icons: [
        {
          img: "/images/work/icons/illustrator.svg",
          alt: "illustrator",
        },
        {
          img: "/images/work/icons/indesign.svg",
          alt: "indesign",
        },
        {
          img: "/images/work/icons/photoshop.svg",
          alt: "photoshop",
        },
      ],
      description:
        "As a freelance designer, I created a logo for fine artist, Kelly Kahn, who specializes in custom portrait and landscape paintings.",
      id: 14,
      showAll: false,
      type: "design",
      show: "show_designs",
      tags: ["DESIGN"],
    },
    {
      title: "Pet Portrait",
      img: "/images/work/art/dog.jpg",
      role: "Artist",
      thumbnails: [
        {
          img: "/images/work/art/dog.jpg",
          alt: "painting of a dog holding a tennis ball",
        },
      ],
      description: `acrylic on canvas`,
      id: 15,
      showAll: false,
      type: "art",
      show: "show_art",
      tags: ["ART"],
    },
    {
      title: "Klimt",
      img: "/images/work/art/klimt.jpg",
      role: "Artist",
      thumbnails: [
        {
          img: "/images/work/art/klimt.jpg",
          alt: "artwork",
        },
      ],
      description:
        "Colored Pencil, inspired by one of my favorite artists, Gustav Klimt",
      id: 16,
      showAll: false,
      type: "art",
      show: "show_art",
      tags: ["ART"],
    },
    {
      title: "Handlettering",
      img: "/images/work/art/calligraphy.jpg",
      role: "Calligrapher",
      thumbnails: [
        {
          img: "/images/work/art/calligraphy.jpg",
          alt: "frame of a quote sitting on a desk",
        },
        {
          img: "/images/work/art/quote.jpg",
          alt: "quote",
        },
      ],
      description: "digital ipad",
      id: 17,
      showAll: false,
      type: "art",
      show: "show_art",
      tags: ["ART"],
    },
    {
      title: "Nude Portrait",
      img: "/images/work/art/back-portrait2.jpg",
      role: "Artist",
      thumbnails: [
        {
          img: "/images/work/art/back-portrait2.jpg",
          alt: "living room painting",
        },
        {
          img: "/images/work/art/back-portrait.jpg",
          alt: "painting on an easel",
        },
      ],
      description: "acrylic on canvas",
      id: 18,
      showAll: false,
      type: "art",
      show: "show_art",
      tags: ["ART"],
    },
    {
      title: "Floral Diptych",
      img: "/images/work/art/floral-diptych.jpg",
      role: "Artist",
      thumbnails: [
        {
          img: "/images/work/art/floral-diptych.jpg",
          alt: "colorful flowers painted on two boards",
        },
      ],
      description: "acrylic on wood",
      id: 19,
      showAll: false,
      type: "art",
      show: "show_art",
      tags: ["ART"],
    },
    {
      title: "Self Portrait",
      img: "/images/work/art/pencil-drawing.png",
      role: "Artist",
      thumbnails: [
        {
          img: "/images/work/art/pencil-drawing.png",
          alt: "black and white drawing of girl playing piano",
        },
      ],
      description: "pencil",
      id: 20,
      showAll: false,
      type: "art",
      show: "show_art",
      tags: ["ART"],
    },
    // {
    //   title: "Split",
    //   img: "/images/work/school/Split.webp",
    //   url: "https://erin-kahn.com/sites/split/",
    //   role: "Developer",
    //   designers: "Carol Ehreth",
    //   icons: [
    //     {
    //       img: "/images/work/icons/html.svg",
    //       alt: "HTML",
    //     },
    //     {
    //       img: "/images/work/icons/css.svg",
    //       alt: "CSS",
    //     },
    //     {
    //       img: "/images/work/icons/javascript.svg",
    //       alt: "JavaScript",
    //     },
    //     {
    //       img: "/images/work/icons/gsap.svg",
    //       alt: "gsap",
    //     },
    //     {
    //       img: "/images/work/icons/sketch.svg",
    //       alt: "sketch",
    //     },
    //   ],
    //   description:
    //     "While studying interactive development at The Creative Circus, a designer and I were given an assignment to come up with a design and landing page that was within the category of media. The site we came up with showcases the 2016 thriller film, Split. We decided to play off of the multiple personalities of the protagonist while showcasing parallax animations and both a dark (Beast) and light (Kevin) theme.",
    //   id: 19,
    //   showAll: false,
    //   type: "website",
    //   show: "show_student",
    // },
    // {
    //   title: "Aretha Franklin",
    //   img: "/images/work/school/Aretha.webp",
    //   url: "https://erin-kahn.com/sites/aretha/",
    //   role: "Developer + Designer",
    //   icons: [
    //     {
    //       img: "/images/work/icons/html.svg",
    //       alt: "HTML",
    //     },
    //     {
    //       img: "/images/work/icons/css.svg",
    //       alt: "CSS",
    //     },
    //     {
    //       img: "/images/work/icons/javascript.svg",
    //       alt: "JavaScript",
    //     },
    //     {
    //       img: "/images/work/icons/gsap.svg",
    //       alt: "gsap",
    //     },
    //     {
    //       img: "/images/work/icons/sketch.svg",
    //       alt: "sketch",
    //     },
    //     {
    //       img: "/images/work/icons/photoshop.svg",
    //       alt: "photoshop",
    //     },
    //   ],
    //   description: `As an interactive development student at The Creative Circus, I took an animations class. The assignment was to build a mini-website that showcased our favorite musical artist. Celebrating the life of the legendary 'Queen of Soul', I chose to build a site that takes the user through the journey of Aretha Franklin's life.`,
    //   id: 20,
    //   showAll: false,
    //   type: "website",
    //   show: "show_student",
    // },
    // {
    //   title: "Moodie",
    //   img: "/images/work/school/Moodie.webp",
    //   role: "Designer",
    //   thumbnails: [
    //     {
    //       img: "/images/work/school/moodie-app.webp",
    //       alt: "iphone screen",
    //     },
    //     {
    //       img: "/images/work/school/illustrations.webp",
    //       alt: "iphone app",
    //     },
    //   ],
    //   icons: [
    //     {
    //       img: "/images/work/icons/photoshop.svg",
    //       alt: "photoshop",
    //     },
    //     {
    //       img: "/images/work/icons/sketch.svg",
    //       alt: "sketch",
    //     },
    //     {
    //       img: "/images/work/icons/illustrator.svg",
    //       alt: "illustrator",
    //     },
    //   ],
    //   description: `As a student at The Creative Circus, I designed an app for users with mental health obstacles. Its purpose is to track a user's mood over time, which transmits stored data to the user's psychiatrist to see progress and if a medication is helpful. Other features include a daily gratitude list, feelings journal, stress tools, and more.`,
    //   id: 21,
    //   showAll: false,
    //   type: "design",
    //   show: "show_student",
    // },
    // {
    //   title: "Nerds Candy",
    //   img: "/images/work/school/Nerds.webp",
    //   url: "https://erin-kahn.com/sites/nerds/",
    //   role: "Developer + Co-Illustrator",
    //   designers: "Kate Gallihugh, Leeah Emerson (AD), Will Aebi (Copy)",
    //   icons: [
    //     {
    //       img: "/images/work/icons/html.svg",
    //       alt: "HTML",
    //     },
    //     {
    //       img: "/images/work/icons/css.svg",
    //       alt: "CSS",
    //     },
    //     {
    //       img: "/images/work/icons/sass.svg",
    //       alt: "sass",
    //     },
    //     {
    //       img: "/images/work/icons/javascript.svg",
    //       alt: "JavaScript",
    //     },
    //     {
    //       img: "/images/work/icons/illustrator.svg",
    //       alt: "illustrator",
    //     },
    //     {
    //       img: "/images/work/icons/photoshop.svg",
    //       alt: "photoshop",
    //     },
    //   ],
    //   description: `While at The Creative Circus, an advertising portolio and web development school in Atlanta, I teamed up with a designer, art director, and copywriter. Our assignment was to create a landing page that showcased a brand for kids. We created a Nerds landing page that focuses on unique characters and self expressive games that allow children to embrace their weirdness and unique traits.`,
    //   id: 23,
    //   showAll: false,
    //   type: "website",
    //   show: "show_student",
    // },
  ],
};

export const aboutData: AboutData = {
  sectionTitle: "about",
  content: "I leave products better than how I found them.",
  content2:
    "I'm a designer and engineer who can take a product from idea to design to production, with a deep understanding of both UX and engineering. My skills span branding and web design, accessibility, custom CMS development, responsive design, and performance optimization.",
  img: {
    src: "/images/about/portrait-color.webp",
    alt: "portrait shot of erin kahn",
  },
};

export interface ContactData {
  headline: string;
  blurb: string;
  email: string;
}

export const contactData: ContactData = {
  headline: "Say Hello.",
  blurb:
    "Have a project in mind or just want to connect? Send a note and I'll get back to you soon.",
  email: "erinnicolekahn@gmail.com",
};
