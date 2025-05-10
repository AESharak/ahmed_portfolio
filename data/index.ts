export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 max-h-[25vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 max-h-[70vh]",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 max-h-[40vh]",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Book Oasis",
    des: "Explore the great books and authors from all over the world.",
    img: "/boasis1.webp",
    iconLists: ["/ang.svg", "/bost.svg", "/node.svg"],
    link: "https://github.com/AESharak/book-store-ecommerce-mean",
  },
  {
    id: 2,
    title: "The wild Oasis",
    des: "Explore the wonders of our fictional restaurant cabins in the heart of the earth's most beautiful landscapes.",
    img: "/p1.webp",
    iconLists: ["/next.svg", "/tail.svg"],
    link: "https://github.com/AESharak/next_the_wild_oasis",
  },
  {
    id: 3,
    title: "AhmedEstate",
    des: "A real estate website that allows users to search for properties, view property details, and contact real estate agents.",
    img: "/rs2.webp",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg"],
    link: "https://github.com/AESharak/mern_realstate",
  },
  {
    id: 4,
    title: "FullStack e-commerce app",
    des: "A full-stack e-commerce app that allows users to browse products, add them to the cart, and purchase them.",
    img: "/aec1.webp",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg"],
    link: "https://github.com/AESharak/MERN_e-commerce_frontend",
  },
  {
    id: 5,
    title: "Fast React Pizza co.",
    des: "A fictional website that serves pizza and allows users to order their favorite pizza.",
    img: "/frpc.webp",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com/AESharak/fast-react-pizza-co",
  },
  {
    id: 6,
    title: "Brick Breaker",
    des: "A brick breaker game built with HTML, CSS, and JavaScript.",
    img: "/brbreaker.webp",
    iconLists: ["/HTML5.svg", "/css.svg", "/js.svg"],
    link: "https://github.com/AESharak/brick-breaker-js",
  },
];

export const myLearningPaths = [
  {
    id: 1,
    title: "HTML, CSS, JavaScript",
    desc: "Learning the basics of web development and building simple projects to solidify my knowledge.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "React.js library",
    desc: "The most popular frontend library for building user interfaces. I've built several projects with it.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Next.js, Tailwind CSS",
    desc: "Using the combination of Next.js and Tailwind CSS to build modern and responsive web applications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    title: "Angular",
    desc: "Learning the Angular framework to build scalable and maintainable web applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "LeetCode",
    desc: "Solving problems on LeetCode to improve my coding skills and prepare for technical interviews.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 6,
    title: "Node.js",
    desc: "Learning the Node.js runtime to build scalable and maintainable web applications.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 7,
    title: "Laravel",
    desc: "Learning the Laravel framework to build scalable and maintainable web applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 8,
    title: "MongoDB",
    desc: "Learning the MongoDB database to build scalable and maintainable web applications.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    platform: "github",
    link: "https://github.com/AESharak",
  },

  {
    id: 2,
    img: "/link.svg",
    platform: "linkedin",
    link: "https://www.linkedin.com/in/ahmed-essam-sharak/",
  },
  {
    id: 3,
    img: "/leetcode.svg",
    platform: "leetcode",
    link: "https://leetcode.com/u/aesharak/",
  },
];
