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
      id: "tech",
      title: "TechStacks",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "awards",
      title: "Achievement",
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
      name: "JWT",
      icon: "jwt.png",
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
      name: "Socket.io",
      icon: "socket.png",
    },
    {
      name: "Three JS",
      icon: "threejs.png",
    },
    {
      name: "LeafletJS",
      icon: "leaflet.png",
    },
    {
      name: "firebase",
      icon: "firebase.png",
    },
    {
      name: "opencv",
      icon: "opencv.png",
    },
    {
      name: "TensorFlow",
      icon: "tensorflow.png",
    },
    {
      name: "Numpy",
      icon: "numpy.png",
    },
    {
      name: "Pandas",
      icon: "pandas.png",
    },
    {
      name: "Guice",
      icon: "guice.png",
    },
    {
      name: "antlr",
      icon: "antlr.png",
    },
    {
      name: "Remix",
      icon: "remix.png",
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
      name: "ipfs",
      icon: "ipfs.png",
    },
    {
      name: "Filecoin",
      icon: "filecoin.png",
    },
    {
      name: "Metamask",
      icon: "metamask.png",
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
      date: "May 2023 - Jul 2023",
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
        "Selected among the top 100 XROS fellow from the pool of 10k+ applications pan India. Working towards development of Metaverse as well as integration of other features of blockchain. Working on solving problems and developing solutions and skills related to Blockchain development, Augmented Reality, Virtual Reality, Extended Reality, Website Development",
      name: "Extended Reality Open Source Fellowship",
      designation: "XROS'23 Fellow",
      company: "Krifin",
      image: "fellow.png",
      link:'https://xrosfellowship.ficci.in/'
    },
    {
      testimonial:
        "Represented my college for the first time in the All India Inter NIT Lawn Tennis Tournament, where we were competed with several NIT's coming from across India and after a tough competition, we were able to bring back the trophy for the third position in the tournament.",
      name: "All India Inter NIT Lawn Tennis Tournament",
      designation: "Member",
      company: "SVNIT SURAT Lawn Tennis Team",
      image: "internit.png",
      link:'https://www.linkedin.com/posts/media-cell-svnit-79204524b_svnit-won-bronze-medal-at-all-india-inter-activity-6999775855975514112-4Ert?utm_source=share&utm_medium=member_desktop'
    },
    {
      testimonial:
        "I was elected as the President of the Prestigious Club of my college, which deals across various domains including Paramaarsh (Consulting Division), Yaantrika (Division for Coding), Finshaatra (Finance Division of the Club), Aantarak (Core science division dealing with electrical, mechanical, civil and other such domains). I was elected as the President of the club for the year 2022-23. During my tenure, i along with my teammates conducted several events and introduced even the newest and latest ones as well that included Blockchain development, AR/VR Development, Strategix 2.0 and 3.0 (Nationwide flagship event of the club), and other major events as well.",
      name: "Cutting Edge Visionaries (CEV)",
      designation: "President",
      company: "CEV",
      image: "cevpresident.png",
      link:'https://cevgroup.org/team/core-team-2022-23-2/'
    },
    {
      testimonial:
        "I was the official member of the SVNIT Sports Council, where I was actively involved in various events that it conducted on individual basis as well as on tie-up basis as well. I was also actively involved in conduting the All India Inter NIT sports tournament that included participation of 500+ students from several NIT's in the fields of Cricket and Power Lifting. I worked with a team of only 50 members, and organized this major event of the college.",
      name: "Sports Council",
      designation: "Member",
      company: "SVNIT SURAT Sports Council",
      image: "sports.png",
      link:'https://www.instagram.com/sports_svnit/'
    },
  ];
  
  const projects = [
    {
      name: "BlockBaazar",
      description:
        "Built the decentralized ecommerce market from where people can buy items, not just limited to physical objects but digital objects as well. •Only the owner will have the access to list the items on the website store for purchase." ,
      tags: [
        {
          name: "Hardhat",
          color: "blue-text-gradient",
        },
        {
          name: "Pinata",
          color: "green-text-gradient",
        },
        {
          name: "Solidity",
          color: "pink-text-gradient",
        },
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Etherjs",
          color: "green-text-gradient",
        },
        {
          name: "IPFS",
          color: "pink-text-gradient",
        },
      ],
      image: 'blockbaazar.png',
      source_code_link: "https://github.com/ayush572/Blockbaazar",
      where: 'personal'
    },
    {
      name: "Phantom Rooms",
      description:
        "We know that in today's time, all the services that the clients are getting are on the cost of their data leakage to the service provider. Even if we consider a simple Whatsapp application, you are able to use it's service at the cost of your data loss. We understand that the data is the key to everything in today's time, so we developed a chatting web application, where the users can find their rooms of interest and can chat with the people of their interest without any data leakage, by using sessionStorage for the same and it gets destroyed onve the user closes it's web browser.",
      tags: [
        {
          name: "EJS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "GIT",
          color: "pink-text-gradient",
        },
        {
          name: "Socket.io",
          color: "blue-text-gradient",
        },
        {
          name: "Expressjs",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: 'phantomrooms.png',
      source_code_link: "https://devfolio.co/projects/phantom-rooms-0a94",
      where: 'hackathon'
    },
    {
      name: "Metaverse Project",
      description:
        "We have seen blockchain connecting to NFT's and being used for the transaction purpose as well and it even forms a strong foundation in the development of Metaverse, but how to integrate the blockchain with the objects of Metaverse? How can we actually justify the ownership of assets in the metaverse without blockchain but for that, we need to connect blockchain with the assets of metaverse and that's what I have done here. I have connected the blockchain with the assets of metaverse being developed in real time. ``NOTE`` : Currently the project is private because this is one of my special works and the efforts that I have made to achieve the same... If you want to know more about it, feel free to contact me!!",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: 'metaverseproj.png',
      source_code_link: "https://github.com/ayush572/Metaverse_proj",
      where: 'personal'
    },
    
    {
      name: "Museum Artifact Marketplace",
      description:
        "This application aims to provide security and support to archaeologists by helping them protecting their discoveries using the power of blockchain technology as now they can register their asset under any one museum which they wish to, and once registered, their discovery will then remain intact and no one will be able to manipulate the data. It is also integrated with AR compatible 3D models, so that once registered, any people can view the same from any part of the world and can even donate for any of the artifact for keeping it safe, protected and taking good care of it.",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Reactjs",
          color: "green-text-gradient",
        },
        {
          name: "Metamask",
          color: "pink-text-gradient",
        },
        {
          name: "Hardhat",
          color: "blue-text-gradient",
        },
        {
          name: "Replit",
          color: "green-text-gradient",
        },
        {
          name: "FileCoin",
          color: "pink-text-gradient",
        },
        {
          name: "NFT.Storage",
          color: "blue-text-gradient",
        },
        {
          name: "Echo3D",
          color: "green-text-gradient",
        },
        {
          name: "Etherjs",
          color: "pink-text-gradient",
        },
      ],
      image: 'museumartifact.jpeg',
      source_code_link: "https://devfolio.co/projects/museum-artifact-marketplace-47d1",
      where: 'hackathon'
    },
    {
      name: "House Price Prediction",
      description:
        "This project predicts the price of the house in a particular area, by predicting the same using the Linear Regressino model. The model has been trained on various parameters and provides an accurate prediction with an R2 score of 0.9999999744784622",
      tags: [
        {
          name: "Google Colab",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Numpy",
          color: "pink-text-gradient",
        },
        {
          name: "Pandas",
          color: "blue-text-gradient",
        }
      ],
      image: 'houseprice.png',
      source_code_link: "https://github.com/ayush572/House_price_prediction_model",
      where: 'personal'
    },
    {
      name: "Food Calorie Prediction",
      description:
        "This project predicts the type of food item among various training models provided to it and produces the calorie outcome of a particular food item based on which type of food it is. It will help the user to keep track of the amount of calorie that he is consuming and will help to keep a control over it.",
      tags: [
        {
          name: "Google Colab",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "green-text-gradient",
        }
      ],
      image: 'foodcal.png',
      source_code_link: "https://colab.research.google.com/drive/1Ow1Emj27u23cNYCSo6afu9QgdERZQ1A0?usp=sharing",
      where: 'personal'
    },
  ];
  
  export {services, experiences, testimonials, projects, navLinks, technologies };