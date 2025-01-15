import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Shivam Kumar Patel",
    stack: ["Software Engineer", "Java SpringBoot Developer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and Demonstrated expertise in crafting efficient, scalable solutions and a strong track record of problem-solving. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "DreamJob App",
        desc: "Created and launched DreamJob, an intuitive job-seeking and hiring platform designed to simplify the recruitment process for both employers and job applicants.For Employers: Enabled employers to easily create and manage job listings with detailed descriptions, qualifications, and requirements. Implemented features for reviewing and selecting applicants, streamlining the hiring process and improving talent acquisition efficiency.For Applicants: Developed a seamless job search experience allowing applicants to explore opportunities, apply directly, and save their favorite listings for future consideration.Focused on enhancing user experience, improving communication between employers and applicants, and ensuring easy access to job opportunities.Utilized modern technologies to build a scalable, user-friendly platform that supports real-time notifications and application tracking.",
        image: "DreamJob.png",
        live: true,
        technologies: ["React", "SpringBoot", "MongoDb",],
        link: "https://job-portal-app-two-eta.vercel.app/",
        github: "https://github.com/Magnetronn/Job-Portal-App"
    },
    {
        title: "Smart Contact Manager",
        desc: " Developed the Smart Contact Manager, a web application designed to efficiently manage and organize contact information. The application provides a user-friendly interface for adding, updating, deleting, and searching contacts, with a focus on seamless interaction and data management.",
        image: "SmartContact.png",
        live: false,
        technologies: ["Springboot", "SQL", "Thymleaf"],
        link: "https://github.com/Magnetronn/SmartContactManagerRelease",
        github: "https://github.com/Magnetronn/SmartContactManagerRelease"
    },
    {
        title: "Mom's Cake Studio",
        desc: "Mom's Cake Studio is a user-friendly mobile application designed to make cake shopping simple and enjoyable. This app allows users to browse and select their favorite cakes from a wide variety of options, customize them as per their preferences, and easily place orders. The app features an intuitive interface where users can explore different cake flavors, sizes, and designs, ensuring a personalized shopping experience.",
        image: "CakeShop.png",
        live: false,
        technologies: ["Springboot", "thymleaf", "java", "SQL"],
        link: "https://github.com/Magnetronn/E-Commerce",
        github: "https://github.com/Magnetronn/E-Commerce"
    },
    {
        title: "Employee Management App",
        desc: "Developed a Employee Management Application to manage employee records efficiently. This web-based application allows users to easily add, update, and remove employee details, providing an intuitive interface for HR departments or managers to maintain employee information.Add Employee: Users can input and save employee data such as name, position, salary, and contact details.Update Employee: Employees' information can be edited and updated to keep records current.Delete Employee: The system allows easy removal of employee records from the database.User-Friendly Interface: Designed with a responsive, clean interface that ensures seamless user experience on both desktop and mobile devices.",
        image: "Ema.png",
        live: false,
        technologies: ["React", "SpringBoot", "SQL","Bootstrap"],
        link: "https://github.com/Magnetronn/Ems-Project",
        github: "https://github.com/Magnetronn/Ems-Project"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS","JavaScript", "React JS","Tailwind CSS","Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot","MySQL", "MongoDB","java","PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++","Java","Python","JavaScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
    }
]
const socialLinks = [
    { link: "https://github.com/Magnetronn", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/shivam-patel-18b5ba1b9/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/shivampatel_05/", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/@Coding_Machines", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/Shivam-_-Patel/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "System Engineer",
        company: "Infosys",
        date: "Nov 2022 - Present",
        desc: " I led software development with java, Spring Boot, PostgresSQL and MySQL to design and implement dynamic web applications. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["Java", "MySQL", "Springboot", "ReactJs", "Git", "PostgresSQL","Docker","python"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };