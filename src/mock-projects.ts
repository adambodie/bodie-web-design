import {Project} from './properties/project';

export const howManyDaysAgo = (years, months, days, current) => {
  let update = new Date();
  update.setFullYear(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days));
  let daysAgo = (current.getTime() - update.getTime())/86400000;
  if (daysAgo >= -1) {
      if (daysAgo > 365) {
      let yearsAgo = daysAgo / 365;
      let ago = (daysAgo <= 729) ? " year ago." : " years ago.";
        return Math.floor(yearsAgo) + ago;
      }

      if (daysAgo > 31) {
      let monthsAgo = daysAgo / 31;
      let ago = (daysAgo <= 60) ? " month ago." : " months ago.";
        return Math.floor(monthsAgo) + ago;
      }

      if (daysAgo > 7) {
      let weeksAgo = daysAgo / 7;
      let ago = (daysAgo <= 13) ? " week ago." : " weeks ago.";
        return Math.round(weeksAgo) + ago;
      }
      if (daysAgo >= 2) {
        let ago = " days ago.";
        return Math.round(daysAgo) + ago;
      }
      if (daysAgo <=1 && daysAgo > 0) {
          let ago = " day ago.";
          return Math.round(daysAgo) + ago;
      }
      if (Math.floor(daysAgo) <= -1) {
        let ago = " days ago.";
        return "Today";
      }
  } else {
      return undefined;
  };
}
export const setDate = (years, months, days) => {
  let update = new Date();
  update.setFullYear(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days));
  return update.toDateString();
}

export const PROJECTS: Project[] = [
    {
        image: "grandcanyon",
        alt: "Grand Canyon",
        title: "Adam Hits the Big 3-0",
        created: "July 11, 2015",
        createdAt: howManyDaysAgo(2015, 6, 11, new Date()),
        updated: "May 14, 2017",
        updatedAt: howManyDaysAgo(2017, 4, 14, new Date()),
        description: "Check out Adam's 30th Birthday Celebration at the Grand Canyon! Enjoy all the pictures and videos Adam and the Bodie family took at the Grand Canyon and surrounding areas, and don't forget to read Adam's interesting facts about the Grand Canyon and surrounding area. A trip in itself, without actually going there (if you can't, of course, you should if you can)",
        link: "grand-canyon",
        languages: "Ember, Bootstrap, jQuery"
      },
      {
        image: "fortune",
        alt: "Read Your Fortune Cookie",
        title: "Read Your Fortune Cookie",
        created: "July 17, 2015",
        createdAt: howManyDaysAgo(2015, 6, 17, new Date()),
        
        updated: "January 28, 2018",
        updatedAt: howManyDaysAgo(2018, 0, 28, new Date()),
        
        description: "A simple yet mind boggling app that gives you a fortune cookie to read. All you got to do is fill in your name and age, and let the app do the rest. Don't you love 21st Century Single Page Application Technology. You never know what your fortune cookie will tell you! It's that simple! Trust me.",
        link: "fortune-cookie",
        languages: "Angular, TypeScript, Webpack"
      },
      {
        image: "artshowcase",
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
        image: "nama",
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
        image: "reno-rnc",
        alt: "Reno Nice 'n' Cool",
        title: "Reno Nice 'n' Cool: A Better RNC",
        created: "August 5, 2016",
        createdAt: howManyDaysAgo(2016, 7, 5, new Date()),
        
        updated: "December 11, 2017",
        updatedAt: howManyDaysAgo(2017, 11, 11, new Date()),
        
        description: "With a week vacation from work, I went on a road trip down to Reno, where I visited the city, Lake Tahoe and plenty of places along the way. To see my adventures and get a better RNC experience, click the link below. - Version 2.0 contains a slightly different layout and was built with Vue.js",
        link: "reno",
        languages: "Vue"
      },
      {
        image: "dreidel",
        alt: "Dreidel",
        title: "Dreidel Duel",
        created: "January 5, 2017",
        createdAt: howManyDaysAgo(2017, 0, 5, new Date()),
        
        updated: "January 1, 2018",
        updatedAt: howManyDaysAgo(2018, 0, 1, new Date()),
        
        description: "Built with React JS, this is a simple Dreidel game that can be played with two players.",
        link: "dreidel",
        languages: "React"
      },
      {
        image: "nfl",
        alt: "NFL Passer Rating",
        title: "NFL Passer Rating",
        created: "April 2, 2017",
        createdAt: howManyDaysAgo(2017, 3, 2, new Date()),
        
        updated: "January 7, 2018",
        updatedAt: howManyDaysAgo(2018, 0, 7, new Date()),
        
        description: "Built with React, compiled with Webpack, and tested with Mocha and Chai, my new version of the NFL Passer Rating web page is better designed, with more accessibility, a better UI and tested to be effective.  Source code available via GitHub.",
        link: "nfl-passer-rating",
        languages: "React, Webpack, Mocha/Chai, Foundation"
      },
      {
        image: "nadm2",
        alt: "NADM 2",
        title: "N.A.D.M. 2 - The Infamous",
        created: "September 4, 2017",
        createdAt: howManyDaysAgo(2017, 8, 4, new Date()),
        
        updated: "September 4, 2017",
        updatedAt: howManyDaysAgo(2017, 8, 4, new Date()),
        
        description: "Built with Angular 2 using TypeScript, this project is a blog-styled page showcasing pictures from my trip to the East Coast.  Source code available via GitHub.",
        link: "nadm2",
        languages: "Angular 2, TypeScript"
      },
      {
        image: "wildwildwest",
        alt: "Adam's Wild Wild West",
        title: "Adam's Wild Wild West",
        created: "October 1, 2017",
        createdAt: howManyDaysAgo(2017, 9, 1, new Date()),
        
        updated: "October 1, 2017",
        updatedAt: howManyDaysAgo(2017, 9, 1, new Date()),
        
        description: "Built with React, this picture carousel uses the Flickr API to get pictures from a album gallery.  Source code available via GitHub.",
        link: "wildwildwest",
        languages: "React"
      },
      {
        image: "adventures",
        alt: "Adam's Adventures",
        title: "Adam's Adventures",
        created: "November 23, 2017",
        createdAt: howManyDaysAgo(2017, 10, 23, new Date()),
        
        updated: "November 23, 2017",
        updatedAt: howManyDaysAgo(2017, 10, 23, new Date()),
        
        description: "Built with React, this project is based on my Wild Wild West project but contains multiple projects linked together via React Router.  Source code available via GitHub.",
        link: "adventures",
        languages: "React"
      }    
]