import {Project} from '../properties/project';
import {howManyDaysAgo} from '../howManyDaysAgo';

export const PROJECTS: Project[] = [
    {
        image: "grandcanyon.jpg",
        alt: "Grand Canyon",
        title: "Adam Hits the Big 3-0",
        created: "July 11, 2015",
        createdAt: howManyDaysAgo(2015, 6, 11, new Date()),
        updated: "May 14, 2017",
        updatedAt: howManyDaysAgo(2017, 4, 14, new Date()),
        description: "This is one of my earliest major web projects I built.  I initially used jQuery to build this page in 2015, but as my developing skills got better and web technologies got more advanced, I rebuilt this in 2017 using Ember, helped cut down the repetitiveness of my code in my initial project. Source code available via GitHub.",
        link: "grand-canyon",
        languages: "Ember, Bootstrap, jQuery"
      },
      {
        image: "fortune.jpg",
        alt: "Read Your Fortune Cookie",
        title: "Read Your Fortune Cookie",
        created: "July 17, 2015",
        createdAt: howManyDaysAgo(2015, 6, 17, new Date()),        
        updated: "January 28, 2018",
        updatedAt: howManyDaysAgo(2018, 0, 28, new Date()),        
        description: "I built this app first using AngularJS, to showcase my skills in AngularJS, as well as learning to build more projects other than the basic photo gallery.  I later added CSS animation to this project to give a more interactive user experience.  With AngularJS being updated to Angular, I opted to rebuild this project using Angular with Typescript, backed with Webpack. Source code available via GitHub.",
        link: "fortune-cookie",
        languages: "Angular, TypeScript, Webpack"
      },
      {
        image: "artshowcase.jpg",
        alt: "Adam's Art Showcase",
        title: "Adam's Art Showcase",
        created: "April 16, 2016",
        createdAt: howManyDaysAgo(2016, 3, 16, new Date()),       
        updated: "May 29, 2017",
        updatedAt: howManyDaysAgo(2017, 4, 29, new Date()),        
        description: "Back in 2001-2002, I loved to draw and paint. It was a real passion. I must have spent hours drawing whatever interested me. I even made two projects of a select few with Microsoft PowerPoint. With my new web skills, I have turned my old projects into a web page full of my old drawings and paintings. Talk about a trip down memory lane.",
        link: "adamsartshowcase",
        languages: "React, React Router, Sass, Bootstrap, Gulp"
      },
      {
        image: "nama.jpg",
        alt: "Nama",
        title: "Overview of the Nama Language",
        created: "July 17, 2016",
        createdAt: howManyDaysAgo(2016, 6, 17, new Date()),        
        updated: "July 17, 2016",
        updatedAt: howManyDaysAgo(2016, 6, 17, new Date()),        
        description: "During my senior year of college at the University of Minnesota, I took a Linguistics class and had to write a final paper on a language of my choice. I chose Nama, a Khoisan langauge in Africa that's known for their click consonants. With that said, here is my 25 page paper turned into an Ember.js backed web project.",
        link: "nama",
        languages: "Ember"
      },
      {
        image: "reno-rnc.jpg",
        alt: "Reno Nice 'n' Cool",
        title: "Reno Nice 'n' Cool: A Better RNC",
        created: "August 5, 2016",
        createdAt: howManyDaysAgo(2016, 7, 5, new Date()),        
        updated: "December 11, 2017",
        updatedAt: howManyDaysAgo(2017, 11, 11, new Date()),        
        description: "I first built this project using jQuery, but used some different plugins for this project, most notably Owl Carousel.  I later rebuilt this project using Vue, my first project using this framework.  Source code available via GitHub.",
        link: "reno",
        languages: "Vue"
      },
      {
        image: "dreidel.jpg",
        alt: "Dreidel",
        title: "Dreidel Duel",
        created: "January 5, 2017",
        createdAt: howManyDaysAgo(2017, 0, 5, new Date()),        
        updated: "January 1, 2018",
        updatedAt: howManyDaysAgo(2018, 0, 1, new Date()),        
        description: "This was my first project built in React, partly based off a Team Treehouse course: Introduction to React.  I first used the ES5 syntax for the project, but later updated it using ES6 syntax.  Source code available via GitHub.",
        link: "dreidel",
        languages: "React"
      },
      {
        image: "nfl.jpg",
        alt: "NFL Passer Rating",
        title: "NFL Passer Rating",
        created: "April 2, 2017",
        createdAt: howManyDaysAgo(2017, 3, 2, new Date()),        
        updated: "January 7, 2018",
        updatedAt: howManyDaysAgo(2018, 0, 7, new Date()),        
        description: "My first iteration of this project was built when I was first learning Java back in 2014, using NetBeans to build a GUI program.  Expanding my knowledge in coding and focusing on Web Devleopment, I built a new version with React, compiled with Webpack, and tested with Mocha and Chai, which is better designed, has more accessibility, a better UI and tested to be effective.  Source code available via GitHub.",
        link: "nfl-passer-rating",
        languages: "React, Webpack, Mocha/Chai, Foundation"
      },
      {
        image: "nadm2.jpg",
        alt: "NADM 2",
        title: "N.A.D.M. 2 - The Infamous",
        created: "September 4, 2017",
        createdAt: howManyDaysAgo(2017, 8, 4, new Date()),       
        updated: "September 4, 2017",
        updatedAt: howManyDaysAgo(2017, 8, 4, new Date()),        
        description: "This was my first project built with Angular and Typescript, this project is a blog-styled page showcasing pictures from my trip to the East Coast.  Source code available via GitHub.",
        link: "nadm2",
        languages: "Angular, TypeScript"
      },
      {
        image: "wildwildwest.jpg",
        alt: "Adam's Wild Wild West",
        title: "Adam's Wild Wild West",
        created: "October 1, 2017",
        createdAt: howManyDaysAgo(2017, 9, 1, new Date()),        
        updated: "October 1, 2017",
        updatedAt: howManyDaysAgo(2017, 9, 1, new Date()),        
        description: "This project of a photo carousel was built with React. For this project, I used Axios to retrieve photos from the Flickr API.  Source code available via GitHub.",
        link: "wildwildwest",
        languages: "React"
      },
      {
        image: "adventures.jpg",
        alt: "Adam's Adventures",
        title: "Adam's Adventures",
        created: "November 23, 2017",
        createdAt: howManyDaysAgo(2017, 10, 23, new Date()),        
        updated: "November 23, 2017",
        updatedAt: howManyDaysAgo(2017, 10, 23, new Date()),        
        description: "Built with React, this project is based on my Wild Wild West project but contains multiple projects linked together via React Router.  Source code available via GitHub.",
        link: "adventures",
        languages: "React"
      },
      {
        image: "victoria.jpg",
        alt: "Adam's Black Ball",
        title: "Adam's Black Ball",
        created: "May 22, 2018",
        createdAt: howManyDaysAgo(2018, 4, 22, new Date()),        
        updated: "May 22, 2018",
        updatedAt: howManyDaysAgo(2018, 4, 22, new Date()),        
        description: "Expanding on my previous photo based projects, I created a travel based website.  I focused on better organization of my components, splitting out the routes and containers.  Exploring more of the testing side, I added basic tests in Jest and Enzyme to show my evolving skills in unit testing.  Source code available via GitHub.",
        link: "victoria",
        languages: "React, Jest, Enzyme"
      },
      {
        image: "leavenworth.jpg",
        alt: "Leavenworth: The Bavarian Experience in Washington",
        title: "Leavenworth: The Bavarian Experience in Washington",
        created: "July 7, 2018",
        createdAt: howManyDaysAgo(2018, 6, 7, new Date()),        
        updated: "July 7, 2018",
        updatedAt: howManyDaysAgo(2018, 6, 7, new Date()),        
        description: "Previously learning Vue on the fly, I opted to learn more specifics of Vue with this project. The photo gallery I used the Owl-Carousel dependency to use a different carousel.  The flash cards is based off the Vue Basics course on Team Treehouse, expanding on the original content to add additional methods.  Finally, I focused on both basic vue syntax mixed with Single File Components to differentiate between the two.  Source code available via GitHub.",
        link: "leavenworth",
        languages: "Vue, Browserify, Express, Pug, Jest, Gulp"
      }
]


export const MOBILEPROJECTS: Project[] = [
  {
      image: "walla-walla-native.jpg",
      alt: "Walla Walla Native",
      title: "Walla Walla Native",
      created: "September 20, 2017",
      createdAt: howManyDaysAgo(2017, 8, 20, new Date()),
      updated: "September 20, 2017",
      updatedAt: howManyDaysAgo(2017, 8, 20, new Date()),
      description: "My first mobile project, using React Native. Click the link below for the source code, or scroll the image to see the final version.",
      link: "walla-walla",
      languages: "React Native"
    },   {
      image: "smallTownNative.jpg",
      alt: "Small Town Native",
      title: "Small Towns Native",
      created: "September 20, 2017",
      createdAt: howManyDaysAgo(2017, 10, 12, new Date()),
      updated: "September 20, 2017",
      updatedAt: howManyDaysAgo(2017, 10, 12, new Date()),
      description: "Another React Native project based on a previous project, I used a native build, rather than Create React Native App, to provide more flexibility. Click the link below for the source code, or scroll the image to see the final version.",
      link: "small-towns",
      languages: "React Native"
    }, {
      image: "21zf8r.gif",
      alt: "Kevin's Fun Facts",
      title: "Kevin's Fun Facts",
      created: "January 1, 2018",
      createdAt: howManyDaysAgo(2018, 0, 1, new Date()),
      updated: "January 1, 2018",
      updatedAt: howManyDaysAgo(2018, 0, 1, new Date()),
      description: "My first Android project based off a Team Treehouse course: Build a Simple Android App with Kotlin, I incorporated new elements by using Firebase API's RealTime Database to retrieve data. Facts provided by a co-worker whom this project is named after. Click the link below for the source code, or view the image to see the final version.",
      link: "small-towns",
      languages: "Android, Kotlin, Firebase API"
    }, {
      image: "bellingham-native.jpg",
      alt: "Bellingham Native",
      title: "Bellingham Native",
      created: "April 23, 2018",
      createdAt: howManyDaysAgo(2018, 3, 23, new Date()),
      updated: "April 23, 2018",
      updatedAt: howManyDaysAgo(2018, 3, 23, new Date()),
      description: "Based off my design for the Wild Wild West React project but built with React Native as a mobile app, this project is a mobile approach to a Photo Gallery. A desktop version can also be viewed here",
      link: "bellingham",
      languages: "React Native"
    }
]
