//these constants are basically for the data that we are going to use in our website
//so that we can find all the data in one place and we can use it anywhere in our website
// import {
//     mobile,
//     backend,
//     creator,
//     web,
//     javascript,
//     typescript,
//     html,
//     css,
//     reactjs,
//     redux,
//     tailwind,
//     nodejs,
//     mongodb,
//     git,
//     figma,
//     docker,
//     meta,
//     starbucks,
//     tesla,
//     shopify,
//     carrent,
//     jobit,
//     tripguide,
//     threejs,
//   } from "../assets";
  
 const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: 'web.png',
    },
    {
      title: "Java Developer",
      icon: 'mobile.png',
    },
    {
      title: "Blockchain Developer",
      icon: 'blockchain.png',
    },
    {
      title: "AI-ML Developer",
      icon: 'aiml.png',
    }
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: "cpp.png",
    },
    {
      name: "Python",
      icon: "python.png",
    },
    {
      name: "Solidity",
      icon: "solidity.jpg",
    },
    {
      name: "Java",
      icon: "java.png",
    },
    {
      name: "Javascript",
      icon: "javascript.png",
    },
    
    {
      name: "React JS",
      icon: "reactjs.png",
    },
    {
      name: "Next JS",
      icon: "next.png",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwind.png",
    },
    {
      name: "BootStrap",
      icon: "bootstrap.png",
    },
    {
      name: "Material UI",
      icon: "mui.png",
    },
    {
      name: "Node JS",
      icon: "nodejs.png",
    },
    {
      name: "firebase",
      icon: "firebase.png",
    },
    {
      name: "SQL",
      icon: "sql.png",
    },
    {
      name: "MongoDB",
      icon: "mongodb.png",
    },
    {
      name: "TensorFlow",
      icon: "tensorflow.png",
    },
    
    {
      name: "Web3JS",
      icon: "web3.png",
    },
    {
      name: "EtherJS",
      icon: "etherjs.png",
    },
    {
      name: "hardhat",
      icon: "hardhat.png",
    },
    {
      name: "truffle",
      icon: "truffle.png",
    },
    {
      name: "LeafletJS",
      icon: "leaflet.png",
    },
    {
      name: "git",
      icon: "git.png",
    },
    {
      name: "figma",
      icon: "figma.png",
    },
    
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Academic Affairs Council, SVNIT",
      
      iconBg: "grey",
      date: "Oct 2021 - Dec 2021",
      points: [
        "Developed the first all in one website for SVNIT students from where they can find a lot of stuffs and details",
        "This had been the very first prototype website for the students where they can find career opportunites, competitive exams information as well as information about their own department like alumni and faculties.",
        "Tech Stacks : HTML, CSS, Javascript, Figma, Reactjs",
      ],
      icon: 'svnit.png'
    },
    {
      title: "Machine Learning Intern",
      company_name: "IIRS (Indian Institute of Remote Sensing), ISRO",
      
      iconBg: "#383E56",
      date: "Jan 2022 - March 2022",
      points: [
        "Worked on Mask R-CNN deep learning algorithm for detection and instance segmentation of the images of the objects of interest taken from the satellite.",
        "Worked on RFCN deep learning algorithm to detect and classify the images of objects of interest taken from the satellite.",
        "Tech stacks : Python, Google Colab, Scikit-learn, Tensorflow, Keras"
      ],
      icon: 'isro.png'
    },
    {
      title: "Web Development Intern",
      company_name: "SriHari Capital LLC",
      
      iconBg: "#E6DEDD",
      date: "Mar 2022 - May 2022",
      points: [
        "Designed the website from scratch on Figma.",
        "Developed the designed website from scratch.",
        "Used Solidity to write smart contracts on RemixIDE to mint NFT for the company.",
        "Minted NFT for the company on Polygon Mumbai Testnet",
        "Tech Stacks : Reactjs, MaterialUI, Solidity, Hardhat, Pinata",
      ],
      icon: 'srihari.png'
    },
    {
      title: "Summer Research Intern",
      company_name: "IIIT Hyderabad",
      
      iconBg: "white",
      date: "May 2022 - Jun 2022",
      points: [
        "Here I worked on creating an interactive data visualization on the website through the results obtained from the QGIS and Kepler.",
        "Dealt with the CSV data analytics and converting the same through nodejs middleware, to store converted Geojson data into session storage",
        "Visualized the data on the web using Leaflet.js",
        "Tech Stacks : HTML, CSS, Javascript, Leaflet.js",
      ],
      icon: 'iiith.png'
    },
    {
      title: "SDE Intern",
      company_name: "Wells Fargo",
      
      iconBg: "white",
      date: "May 2022 - Jul 2022",
      points: [
        "Here I was involved on solving the currently existing problem with the PnL system implementation",
        "Developed a basic prototype which makes the currently system being implemented more efficient in terms of development, resilency, scalability as well as reducing the latency for the system overhead and communication",
        "Tech Stacks : Java, Socket Programming, Shell Scripting, ANTLR, Memory Mapped File, Multithreading, Google Guice, Uber Jar",
      ],
      icon: 'wf.png'
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: 'carrent.png',
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: 'jobit.png',
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: 'tripguide.png',
      source_code_link: "https://github.com/",
    },
  ];
  
  export {services, experiences, testimonials, projects, navLinks, technologies };