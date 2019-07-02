import { howManyDaysAgo } from './howManyDaysAgo';

export const LINKS = [{name: 'Home', link: '/'}, {name: 'About', link: '/about'}, {name: 'Pictures', link: '/pictures'}];
export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const COUNTER = 'COUNTER';
export const RESET = 'RESET';
export const SORT_BY_TITLE = 'SORT_BY_TITLE';
export const SORT_BY_CREATED = 'SORT_BY_CREATED';
export const SORT_BY_UPDATED = 'SORT_BY_UPDATED';

export const PROJECTS = [
	{
		image: "fortune.jpg",
		banner: "fortune-banner.jpg",
		alt: "Read Your Fortune Cookie",
		title: "Read Your Fortune Cookie",
		created: new Date("July 17, 2015"),
		createdAt: howManyDaysAgo(2015, 6, 17),
		updated: new Date("January 28, 2018"),
		updatedAt: howManyDaysAgo(2018, 0, 28),
		description: "I built this app first using AngularJS, to showcase my skills in AngularJS, as well as learning to build more projects other than the basic photo gallery.  I later added CSS animation to this project to give a more interactive user experience.  With AngularJS being updated to Angular, I opted to rebuild this project using Angular with Typescript, backed with Webpack. Source code available via GitHub.",
		link: "fortune-cookie",
		languages: [{name:"Angular"}, {name: "TypeScript"},{name: "Webpack"}],
		visible: true
      },
      {
        image: "reno-rnc.jpg",
        banner: "reno-banner.jpg",
        alt: "Reno Nice 'n' Cool",
        title: "Reno Nice 'n' Cool: A Better RNC",
        created: new Date("August 5, 2016"),
        createdAt: howManyDaysAgo(2016, 7, 5),
        updated: new Date("December 11, 2017"),
        updatedAt: howManyDaysAgo(2017, 11, 11),
        description: "I first built this project using jQuery, but used some different plugins for this project, most notably Owl Carousel.  I later rebuilt this project using Vue, my first project using this framework.  Source code available via GitHub.",
        link: "reno",
        languages: [{name:"Vue"}],
        visible: true
      },
      {
        image: "dreidel.jpg",
        banner: "dreidel-banner.jpg",
        alt: "Dreidel",
        title: "Dreidel Duel",
        created: new Date("January 5, 2017"),
        createdAt: howManyDaysAgo(2017, 0, 5),
        updated: new Date("April 29, 2019"),
        updatedAt: howManyDaysAgo(2019, 3, 29),
        description: "This was my first project built in React, partly based off a Team Treehouse course: Introduction to React.  I first used the ES5 syntax for the project, but later updated it using ES6 syntax.  Version 3 further broke down components, added Sass, and built on GatsbyJS. Source code available via GitHub.",
        link: "dreidel",
        languages: [{name:"React"}, {name: "GatsbyJS"}, {name: "Sass"}, {name: "Jest"}, {name: "Enzyme"}],
        visible: true
      },
      {
        image: "nfl.jpg",
        banner: "nfl-banner.jpg",        
        alt: "NFL Passer Rating",
        title: "NFL Passer Rating",
        created: new Date("April 2, 2017"),
        createdAt: howManyDaysAgo(2017, 3, 2),
        updated: new Date("February 18, 2019"),
        updatedAt: howManyDaysAgo(2019, 1, 18),
        description: "My first iteration of this project was built when I was first learning Java back in 2014, using NetBeans to build a GUI program.  Expanding my knowledge in coding and focusing on Web Devleopment, I built a new version with React, compiled with Webpack, and tested with Mocha and Chai, which is better designed, has more accessibility, a better UI and tested to be effective.  Newest update uses React version 16, Webpack 4, Babel 7, and replaces testing library with Jest. Source code available via GitHub.",
        link: "nfl-passer-rating",
        languages: [{name:"React"}, {name: "Sass"},{name: "Webpack"},{name: "Jest"},{name: "Foundation"}, {name: "Babel"}],
        visible: true
      },
      {
        image: "nadm2.jpg",        
        banner: "nadm-banner.jpg",
        alt: "NADM 2",
        title: "N.A.D.M. 2 - The Infamous",
        created: new Date("September 4, 2017"),
        createdAt: howManyDaysAgo(2017, 8, 4),
        updated: new Date("September 4, 2017"),
        updatedAt: howManyDaysAgo(2017, 8, 4),
        description: "This was my first project built with Angular and Typescript, this project is a blog-styled page showcasing pictures from my trip to the East Coast.  Source code available via GitHub.",
        link: "nadm2",
        languages: [{name:"Angular"}, {name: "TypeScript"},{name: "Webpack"}],
        visible: true
      },
      {
        image: "adventures.jpg",
        banner: "adventures-banner.jpg",        
        alt: "Adam's Adventures",
        title: "Adam's Adventures",
        created: new Date("November 23, 2017"),
        createdAt: howManyDaysAgo(2017, 10, 23),
        updated: new Date("March 19, 2019"),
        updatedAt: howManyDaysAgo(2019, 2, 19),
        description: "Built with React, this project is based on my Wild Wild West project but contains multiple projects linked together via React Router.  Source code available via GitHub.",
        link: "adventures",
        languages: [{name:"React"}, {name: "Redux"}, {name: "Jest"}, {name: "Sass"}],
        visible: true
      },
      {
        image: "victoria.jpg",
        banner: "victoria-banner.jpg",        
        alt: "Adam's Black Ball",
        title: "Adam's Black Ball",
        created: new Date("May 22, 2018"),
        createdAt: howManyDaysAgo(2018, 4, 22),
        updated: new Date("April 28, 2019"),
        updatedAt: howManyDaysAgo(2019, 3, 28),
        description: "Expanding on my previous photo based projects, I created a travel based website.  I focused on better organization of my components, splitting out the routes and containers.  Exploring more of the testing side, I added basic tests in Jest and Enzyme to show my evolving skills in unit testing.  Source code available via GitHub.",
        link: "victoria",
        languages: [{name:"React"}, {name: "Jest"},{name: "Enzyme"}],
        visible: true
      },
      {
        image: "leavenworth.jpg",
        banner: "leavenworth-banner.jpg",        
        alt: "Leavenworth: The Bavarian Experience in Washington",
        title: "Leavenworth: The Bavarian Experience in Washington",
        created: new Date("July 7, 2018"),
        createdAt: howManyDaysAgo(2018, 6, 7),
        updated: new Date("March 3, 2019"),
        updatedAt: howManyDaysAgo(2019, 2, 3),
        description: "This flash cards SPA is based off the Vue Basics course on Team Treehouse, expanding on the original content to add additional methods.  Source code available via GitHub.",
        link: "leavenworth-cards",
        languages: [{name:"Vue"}, {name: "Vuex"}, {name: "Jest"},{name: "Less"}],
        visible: true
      },
      {
        image: "spokane.jpg",        
        banner: "spokane-banner.jpg",
        alt: "Pigging Out in Spokane",
        title: "Pigging Out in Spokane",
        created: new Date("September 29, 2018"),
        createdAt: howManyDaysAgo(2018, 8, 29),
        updated: new Date("September 29, 2018"),
        updatedAt: howManyDaysAgo(2018, 8, 29),
        description: "I partly based this off my more recent photo carousel projects, but used Typescript instead of Javascript.  Source code available via GitHub.",
        link: "spokane",
        languages: [{name:"React"}, {name: "TypeScript"}, {name: "Enzyme"}],
        visible: true
      },
      {
        image: "birthright-israel.jpg",
        banner: "birthright-israel-banner.jpg",        
        alt: "Adam's Birthright Trip to the Land of Israel",
        title: "Adam's Birthright Trip to the Land of Israel",
        created: new Date("February 6, 2019"),
        createdAt: howManyDaysAgo(2019, 1, 6),
        updated: new Date("February 6, 2019"),
        updatedAt: howManyDaysAgo(2019, 1, 6),
        description: "A blog styled project capturing my 7-Day trip to Israel, this project expands on my development knowledge by including among other things, state management for components via Context.  Source code available via GitHub.",
        link: "birthright-israel",
        languages: [{name:"React"}, {name: "Sass"}, {name: "Jest"}, {name: "Context"}, {name: "Foundation"} ],
        visible: true
      }      
]

export const UPDATES = [
	{ "title": "Dreidel Duel", "description": "Upgraded UI.  April 29, 2019" },
	{ "title": "Adam's Black Ball", "description": "Upgraded UI, added Keyboard Component.  April 28, 2019" },
	{ "title": "Adam's Adventures", "description": "Upgraded UI, added Jest/Redux.  March 19, 2019" },
	{ "title": "Leavenworth: The Bavarian Experience in Washington", "description": "Revamped Vue build for Flash Cards component only, added Vuex state management.  March 3, 2019" },
	{ "title": "NFL Passer Rating", "description": "Upgraded React, Webpack, Babel, added Jest.  February 18, 2019" },
	{ "title": "Adam's Birthright Trip to the Land of Israel", "description": "Launched February 6, 2019, built with React" },
	{ "title": "Adam's Black Ball", "description": "Moved photos from Flickr to S3.  December 2, 2018" }, 
	{ "title": "Dreidel Duel", "description": "Broke React down to Components, added testing, built with GatsbyJS, October 14, 2018" },
	{ "title": "Pigging Out in Spokane", "description": "Launched September 29, 2018"},
	{ "title": "Leavenworth: The Bavarian Experience in Washington", "description": "Launched July 7, 2018, built with Vue"},
	{ "title": "Adam's Black Ball", "description": "Launched May 22, 2018, built with React"},
	{ "title": "Read Your Fortune Cookie", "description": "Upgraded to Angular & TypeScript, January 28, 2018"},
	{ "title": "NFL Passer Rating", "description": "Reconfigured components to allow flexibility of button colors, January 7, 2018"},
	{ "title": "Dreidel Duel", "description": "Added new feature, converted syntax to ES6, January 1, 2018" },
	{ "title": "Reno Nice 'n' Cool", "description": "Launched version 2.0 December 11, 2017, built with Vue.js" },
	{ "title": "Adam's Adventures", "description": "Launched November 23, 2017, built with React" }
]



