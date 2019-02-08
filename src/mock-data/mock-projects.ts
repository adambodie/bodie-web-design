import {Project} from '../properties/project';
import {howManyDaysAgo} from '../howManyDaysAgo';

export const PROJECTS: Project[] = [
    {
        image: "grandcanyon.jpg",
        alt: "Grand Canyon",
        title: "Adam Hits the Big 3-0",
        created: new Date('July 11, 2015'),
        createdAt: howManyDaysAgo(2015, 6, 11, new Date()),
        updated: new Date('May 14, 2017'),
        updatedAt: howManyDaysAgo(2017, 4, 14, new Date()),
        description: "This is one of my earliest major web projects I built.  I initially used jQuery to build this page in 2015, but as my developing skills got better and web technologies got more advanced, I rebuilt this in 2017 using Ember, helped cut down the repetitiveness of my code in my initial project. Source code available via GitHub.",
        link: "grand-canyon",
        languages: [{name:"Ember"}, {name: "Bootstrap"},{name: "jQuery"}],
        visible: true
      },
      {
        image: "fortune.jpg",
        alt: "Read Your Fortune Cookie",
        title: "Read Your Fortune Cookie",
        created: new Date('July 17, 2015'),
        createdAt: howManyDaysAgo(2015, 6, 17, new Date()),        
        updated: new Date('January 28, 2018'),
        updatedAt: howManyDaysAgo(2018, 0, 28, new Date()),        
        description: "I built this app first using AngularJS, to showcase my skills in AngularJS, as well as learning to build more projects other than the basic photo gallery.  I later added CSS animation to this project to give a more interactive user experience.  With AngularJS being updated to Angular, I opted to rebuild this project using Angular with Typescript, backed with Webpack. Source code available via GitHub.",
        link: "fortune-cookie",
        languages: [{name:"Angular"}, {name: "TypeScript"},{name: "Webpack"}],
        visible: true
      },
      {
        image: "artshowcase.jpg",
        alt: "Adam's Art Showcase",
        title: "Adam's Art Showcase",
        created: new Date('April 16, 2016'),
        createdAt: howManyDaysAgo(2016, 3, 16, new Date()),       
        updated: new Date('August 18, 2018'),
        updatedAt: howManyDaysAgo(2018, 7, 18, new Date()),        
        description: "Back in 2001-2002, I loved to draw and paint. It was a real passion. I must have spent hours drawing whatever interested me. I even made two projects of a select few with Microsoft PowerPoint. With my new web skills, I have turned my old projects into a web page full of my old drawings and paintings. Talk about a trip down memory lane.",
        link: "adamsartshowcase",
        languages: [{name:"React"}, {name: "Sass"}],
        visible: true
      },
      {
        image: "nama.jpg",
        alt: "Nama",
        title: "Overview of the Nama Language",
        created: new Date('July 17, 2016'),
        createdAt: howManyDaysAgo(2016, 6, 17, new Date()),        
        updated: new Date('July 17, 2016'),
        updatedAt: howManyDaysAgo(2016, 6, 17, new Date()),        
        description: "During my senior year of college at the University of Minnesota, I took a Linguistics class and had to write a final paper on a language of my choice. I chose Nama, a Khoisan langauge in Africa that's known for their click consonants. With that said, here is my 25 page paper turned into an Ember.js backed web project.",
        link: "nama",
        languages: [{name:"Ember"}],
        visible: true
      },
      {
        image: "reno-rnc.jpg",
        alt: "Reno Nice 'n' Cool",
        title: "Reno Nice 'n' Cool: A Better RNC",
        created: new Date('August 5, 2016'),
        createdAt: howManyDaysAgo(2016, 7, 5, new Date()),        
        updated: new Date('December 11, 2017'),
        updatedAt: howManyDaysAgo(2017, 11, 11, new Date()),        
        description: "I first built this project using jQuery, but used some different plugins for this project, most notably Owl Carousel.  I later rebuilt this project using Vue, my first project using this framework.  Source code available via GitHub.",
        link: "reno",
        languages: [{name:"Vue"}, {name: "jQuery"}],
        visible: true
      },
      {
        image: "dreidel.jpg",
        alt: "Dreidel",
        title: "Dreidel Duel",
        created: new Date('January 5, 2017'),
        createdAt: howManyDaysAgo(2017, 0, 5, new Date()),        
        updated: new Date('October 14, 2018'),
        updatedAt: howManyDaysAgo(2018, 9, 14, new Date()),        
        description: "This was my first project built in React, partly based off a Team Treehouse course: Introduction to React.  I first used the ES5 syntax for the project, but later updated it using ES6 syntax.  Version 3 further broke down components, added Sass, and built on GatsbyJS. Source code available via GitHub.",
        link: "dreidel",
        languages: [{name:"React"}, {name: "GatsbyJS"}, {name: "Sass"}, {name: "Jest"}, {name: "Enzyme"}],
        visible: true
      },
      {
        image: "nfl.jpg",
        alt: "NFL Passer Rating",
        title: "NFL Passer Rating",
        created: new Date('April 2, 2017'),
        createdAt: howManyDaysAgo(2017, 3, 2, new Date()),        
        updated: new Date('January 7, 2018'),
        updatedAt: howManyDaysAgo(2018, 0, 7, new Date()),        
        description: "My first iteration of this project was built when I was first learning Java back in 2014, using NetBeans to build a GUI program.  Expanding my knowledge in coding and focusing on Web Devleopment, I built a new version with React, compiled with Webpack, and tested with Mocha and Chai, which is better designed, has more accessibility, a better UI and tested to be effective.  Source code available via GitHub.",
        link: "nfl-passer-rating",
        languages: [{name:"React"}, {name: "Sass"},{name: "Webpack"},{name: "Mocha/Chai"},{name: "Foundation"}],
        visible: true
      },
      {
        image: "nadm2.jpg",
        alt: "NADM 2",
        title: "N.A.D.M. 2 - The Infamous",
        created: new Date('September 4, 2017'),
        createdAt: howManyDaysAgo(2017, 8, 4, new Date()),       
        updated: new Date('September 4, 2017'),
        updatedAt: howManyDaysAgo(2017, 8, 4, new Date()),        
        description: "This was my first project built with Angular and Typescript, this project is a blog-styled page showcasing pictures from my trip to the East Coast.  Source code available via GitHub.",
        link: "nadm2",
        languages: [{name:"Angular"}, {name: "TypeScript"},{name: "Webpack"}],
        visible: true
      },
      {
        image: "wildwildwest.jpg",
        alt: "Adam's Wild Wild West",
        title: "Adam's Wild Wild West",
        created: new Date('October 1, 2017'),
        createdAt: howManyDaysAgo(2017, 9, 1, new Date()),        
        updated: new Date('November 23, 2018'),
        updatedAt: howManyDaysAgo(2018, 10, 23, new Date()),        
        description: "This project of a photo carousel was built with React. For this project, I used Axios to retrieve photos from S3.  Source code available via GitHub.",
        link: "wildwildwest",
        languages: [{name:"React"}, {name:"Axios API"}],
        visible: true
      },
      {
        image: "adventures.jpg",
        alt: "Adam's Adventures",
        title: "Adam's Adventures",
        created: new Date('November 23, 2017'),
        createdAt: howManyDaysAgo(2017, 10, 23, new Date()),        
        updated: new Date('November 23, 2017'),
        updatedAt: howManyDaysAgo(2017, 10, 23, new Date()),        
        description: "Built with React, this project is based on my Wild Wild West project but contains multiple projects linked together via React Router.  Source code available via GitHub.",
        link: "adventures",
        languages: [{name:"React"}, {name: "Sass"},{name: "Webpack"}, {name:"Axios API"}],
        visible: true
      },
      {
        image: "victoria.jpg",
        alt: "Adam's Black Ball",
        title: "Adam's Black Ball",
        created: new Date('May 22, 2018'),
        createdAt: howManyDaysAgo(2018, 4, 22, new Date()),        
        updated: new Date('December 2, 2018'),
        updatedAt: howManyDaysAgo(2018, 11, 2, new Date()),        
        description: "Expanding on my previous photo based projects, I created a travel based website.  I focused on better organization of my components, splitting out the routes and containers.  Exploring more of the testing side, I added basic tests in Jest and Enzyme to show my evolving skills in unit testing.  Source code available via GitHub.",
        link: "victoria",
        languages: [{name:"React"}, {name: "Jest"},{name: "Enzyme"}, {name:"Axios API"}],
        visible: true
      },
      {
        image: "leavenworth.jpg",
        alt: "Leavenworth: The Bavarian Experience in Washington",
        title: "Leavenworth: The Bavarian Experience in Washington",
        created: new Date('July 7, 2018'),
        createdAt: howManyDaysAgo(2018, 6, 7, new Date()),        
        updated: new Date('July 7, 2018'),
        updatedAt: howManyDaysAgo(2018, 6, 7, new Date()),        
        description: "Previously learning Vue on the fly, I opted to learn more specifics of Vue with this project. The photo gallery I used the Owl-Carousel dependency to use a different carousel.  The flash cards is based off the Vue Basics course on Team Treehouse, expanding on the original content to add additional methods.  Finally, I focused on both basic vue syntax mixed with Single File Components to differentiate between the two.  Source code available via GitHub.",
        link: "leavenworth",
        languages: [{name:"Vue"}, {name:"Axios API"}, {name: "Browserify"},{name: "Express"},{name: "Pug"},{name: "Jest"},{name: "Less"},{name: "Gulp"}],
        visible: true
      },
      {
        image: "spokane.jpg",
        alt: "Pigging Out in Spokane",
        title: "Pigging Out in Spokane",
        created: new Date('September 29, 2018'),
        createdAt: howManyDaysAgo(2018, 8, 29, new Date()),        
        updated: new Date('September 29, 2018'),
        updatedAt: howManyDaysAgo(2018, 8, 29, new Date()),        
        description: "I partly based this off my more recent photo carousel projects, but used Typescript instead of Javascript.  Source code available via GitHub.",
        link: "spokane",
        languages: [{name:"React"}, {name: "TypeScript"}, {name:"Axios API"}, {name: "Enzyme"}],
        visible: true
      }
]


export const MOBILEPROJECTS: Project[] = [
  {
      image: "walla-walla-native.jpg",
      alt: "Walla Walla Native",
      title: "Walla Walla Native",
      created: new Date('September 20, 2017'),
      createdAt: howManyDaysAgo(2017, 8, 20, new Date()),
      updated: new Date('September 20, 2017'),
      updatedAt: howManyDaysAgo(2017, 8, 20, new Date()),
      description: "My first mobile project, using React Native. Click the link below for the source code, or scroll the image to see the final version.",
      link: "walla-walla-native",
      languages: [{name:"React Native"}],
      visible: true
    },   {
      image: "smallTownNative.jpg",
      alt: "Small Town Native",
      title: "Small Towns Native",
      created: new Date('November 12, 2017'),
      createdAt: howManyDaysAgo(2017, 10, 12, new Date()),
      updated: new Date('November 12, 2017'),
      updatedAt: howManyDaysAgo(2017, 10, 12, new Date()),
      description: "Another React Native project based on a previous project, I used a native build, rather than Create React Native App, to provide more flexibility. Click the link below for the source code, or scroll the image to see the final version.",
      link: "SmallTownNative",
      languages: [{name:"React Native"}],
      visible: true
    }, {
      image: "21zf8r.gif",
      alt: "Kevin's Fun Facts",
      title: "Kevin's Fun Facts",
      created: new Date('January 1, 2018'),
      createdAt: howManyDaysAgo(2018, 0, 1, new Date()),
      updated: new Date('January 1, 2018'),
      updatedAt: howManyDaysAgo(2018, 0, 1, new Date()),
      description: "My first Android project based off a Team Treehouse course: Build a Simple Android App with Kotlin, I incorporated new elements by using Firebase API's RealTime Database to retrieve data. Facts provided by a co-worker whom this project is named after. Click the link below for the source code, or view the image to see the final version.",
      link: "fun-facts",
      languages: [{name:"Android"}, {name: "Kotlin"},{name: "Firebase API"}],
      visible: true
    }, {
      image: "bellingham-native.jpg",
      alt: "Bellingham Native",
      title: "Bellingham Native",
      created: new Date('April 23, 2018'),
      createdAt: howManyDaysAgo(2018, 3, 23, new Date()),
      updated: new Date('April 23, 2018'),
      updatedAt: howManyDaysAgo(2018, 3, 23, new Date()),
      description: "Based off my design for the Wild Wild West React project but built with React Native as a mobile app, this project is a mobile approach to a Photo Gallery. A desktop version can also be viewed here",
      link: "bellingham-native",
      languages: [{name:"React Native"}],
      visible: true
    }
]

export const DEVELOPMENTPROJECTS: Project[] = [
  {
      image: "speech-text.jpg",
      alt: "Adam's Speech to Text",
      title: "Adam's Speech to Text",
      created: new Date('December 28, 2017'),
      createdAt: howManyDaysAgo(2017, 11, 28, new Date()),
      updated: new Date('December 28, 2017'),
      updatedAt: howManyDaysAgo(2017, 11, 28, new Date()),
      description: "This project, based on IBM's Zero to Cognitive Tutorial series (Chapter 3 in particular), is my first foray using IBM Watson.  I further expanded on this project by converting spoken text into Pig Latin.",
      link: "adam-speech-to-text",
      languages: [{name:"jQuery"}, {name: "Watson API"},{name: "Jest"}],
      visible: true
    },
    {
      image: "israel.jpg",
      alt: "Israel Bucket List",
      title: "Israel Bucket List",
      created: new Date('September 6, 2018'),
      createdAt: howManyDaysAgo(2018, 8, 6, new Date()),        
      updated: new Date('September 6, 2018'),
      updatedAt: howManyDaysAgo(2018, 8, 6, new Date()),        
      description: "This project is based off a course I took on a Treehouse course User Authentication With Express and Mongo. I followed the course in setting up a basic user authentication system and tieing the application with the MongoDB database to store users, hash passwords and storing sessions. My intention for this project is to build off the basic design of the app from the course to add additional features.  Source code available via GitHub.",
      link: "javascript-express-auth",
      languages: [{name:"Express"}, {name: "MongoDB"},{name: "Pug"}, {name: "Bootstrap"}],
      visible: true
    }
]