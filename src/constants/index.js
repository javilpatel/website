import project1 from "../assets/projects/healthbandpic.png";
import project2 from "../assets/projects/rucafepic.png";
import project3 from "../assets/projects/physicalpic.png";
import project4 from "../assets/projects/besterbuypic.png";

export const HERO_CONTENT = `I am a dedicated full stack developer specializing in building robust and scalable web applications. Holding a degree in Computer Engineering, I have developed strong proficiency in front-end technologies such as React and JavaScript, alongside back-end technologies like Node.js, MySQL, and PostgreSQL. My objective is to utilize my skills to develop innovative solutions that drive business growth and provide outstanding user experiences.`;

export const ABOUT_TEXT = `Hello, I'm Javil Patel. In 2024, I graduated from Rutgers University with a Bachelor of Science in Computer Engineering and a minor in Computer Science. I am driven to make a significant impact in the tech industry while continually expanding my knowledge. Join me on this journey as I strive for growth and aim to leave a meaningful mark in the tech world.`;

export const EXPERIENCES = [
  {
    year: "May 2023 - August 2023",
    role: "Solutions Architect Intern",
    company: "Amazon Web Services",
    description: `Launched a full stack serverless architecture and application to implement running data analytics on a users' physical activity. Created a ETL pipeline to extract 100,000 data points and using PySpark to encrypt personally identifiable information. Collaborated with solutions architects to translate business needs into technical solutions to optimize outcomes. Shadowed 20+ calls with solutions architects, providing recommendations to startup companies' cloud infrastructure.`,
    technologies: ["Python", "AWS", "MySQL"],
  },
  {
    year: "June 2022 - August 2022",
    role: "Software Engineer Intern",
    company: "Verizon Wireless",
    description: `Performed with a team to create a website using React.js and JavaScript which saves time in accessing daily assignments. Produced a simpler way of accessing tickets in a SQL database of network cell sites and switches that are facing many issues. Engaged with engineers to monitor network alerts to identify any irregular activities which decreased outrages by 20. Created a python API using Flask to create user interaction to access the engineer's schedule and role for the day.`,
    technologies: ["HTML", "CSS", "React.js", "Javascript"],
  },
  {
    year: "September 2021 - May 2022",
    role: "Website Technican",
    company: "Rutgers University",
    description: `Designed with 8 technicians to update Rutgers websites with information involving the university. Planned excel sheets of student surveys regarding the information to change the website to the student's preference. Aided the team with completing tasks to maintain productivity and meet 70+ projects milestones throughout the year. Recommended co-technicians advanced methods to include current data that students need on a regular basis.`,
    technologies: ["HTML", "CSS", "Excel"],
  },
];

export const PROJECTS = [
  {
    title: "Health Sync Band",
    image: project1,
    description:
      "Developed an IoT-based health monitoring system using an ESP-32 microcontroller, integrating heart rate, body temperature, and accelerometer sensors. Programmed a real-time web dashboard with React.js, displaying live health metrics and historical trends using Chart.js and D3.js, capable of handling data for up to 1000 users simultaneously. Deployed a Node.js with Express framework and PostgreSQL, storing over 10,000 data points daily. Incorporated OpenAI API to generate personalized health recommendation and insights based on collected data.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "PostgreSQL", "Ardunio"],
    github: "https://github.com/javilpatel/HealthSync",
  },
  {
    title: "RU Cafe",
    image: project2,
    description:
      "Developed a comprehensive JavaFX application for RU Café to manage orders ensuring a user-friendly interface for staff to efficiently take and manage customer orders. Conducted thorough JUnit testing for price calculations across different menu items to ensure accuracy and reliability, resulting in robust and error-free price computations.",
    technologies: ["Java"],
    github: "https://github.com/javilpatel/RuCafe",
  },
  {
    title: "Physical Analytics",
    image: project3,
    description:
      "This application allows users to utilize their health metrics, which will then be transformed and prepared to create a dashboard. The data is from the ios health app. With the dashboard, users can see trends and insights into their physical activities. These insights can then be used to track progression in areas such as weight loss, exercise, sleep quality, or other health-related goals.",
    technologies: ["Python", "PySpark", "AWS CDK", "MySQL"],
    github: "https://github.com/javilpatel/Physical-Analytics",
  },
  {
    title: "Bester Buy",
    image: project4,
    description:
      "Implemented a multi-tiered electronics retail platform with 8 students using Javascript, HTML, and CSS offering an inventory of products with sorting and filtering capabilities for a streamlined product search. Engineered a comprehensive account management system using MySQL and Firebase; introduced a reward and discount mechanism to bolster customer loyalty, and a real-time sales/usage tracking system for administrator insights.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase", "mySQL", "Node.js"],
    github: "https://github.com/javilpatel/Bester-Buy",
  },
];

export const CONTACT = {
  address: "Carteret, NJ ",
  phoneNo: "+1 732 766 4671 ",
  email: "javilpatel@gmail.com",
};
