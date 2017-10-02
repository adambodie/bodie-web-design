
app.controller('ProjectController', ['$scope', function($scope) {
    var current = new Date();
    var updated = new Date();

    function howManyDaysAgo (years, months, days, current) {
    	if (current === undefined) {
    		current = new Date();
    	}
        var update = new Date();
        update.setFullYear(Number.parseInt(years), Number.parseInt(months), Number.parseInt(days));
        var daysAgo = (current.getTime() - update.getTime())/86400000;
    		if (daysAgo >= -1) {
    		    if (daysAgo > 365) {
              var yearsAgo = daysAgo / 365;
              var ago = (daysAgo <= 729) ? ' year ago.' : " years ago";
    		    	return Math.floor(yearsAgo) + ago;
    		    }

    		    if (daysAgo > 31) {
    		    	var monthsAgo = daysAgo / 31;
              var ago = (daysAgo <= 60) ? ' month ago.' : " months ago";
    		    	return Math.floor(monthsAgo) + ago;
    		    }

    		    if (daysAgo > 7) {
    		    	var weeksAgo = daysAgo / 7;
              var ago = (daysAgo <= 13) ? ' week ago.' : " weeks ago";
    		    	return Math.round(weeksAgo) + ago;
    		    }
    		    if (daysAgo >= 2) {
    		      var ago = " days ago.";
    		      return Math.round(daysAgo) + ago;
    		    }
    		    if (daysAgo <=1 && daysAgo > 0) {
    		        var ago = " day ago.";
    		        return Math.round(daysAgo) + ago;
    		    }
    		    if (Math.floor(daysAgo) <= -1) {
    				  var ago = " days ago.";
    		      return "Today";
    		    }
    		} else {
            return undefined;
        };
    }
    $scope.projects = [
      {
        image: "grandcanyon",
        alt: "Grand Canyon",
        title: "Adam Hits the Big 3-0",
        created: "July 11, 2015",
        createdAt: howManyDaysAgo(2015, 6, 11, current),
        updated: "May 14, 2017",
        updatedAt: howManyDaysAgo(2017, 4, 14, current),
        description: "Check out Adam's 30th Birthday Celebration at the Grand Canyon! Enjoy all the pictures and videos Adam and the Bodie family took at the Grand Canyon and surrounding areas, and don't forget to read Adam's interesting facts about the Grand Canyon and surrounding area. A trip in itself, without actually going there (if you can't, of course, you should if you can)",
        link: "grand-canyon",
        languages: "Ember, Bootstrap, jQuery"
      },
      {
        image: "ashland",
        alt: "Ashland",
        title: "Visit Ashland, Oregon",
        created: "July 12, 2015",
        createdAt: howManyDaysAgo(2015, 6, 12, current),
        updated: "January 2, 2017",
        updatedAt: howManyDaysAgo(2017, 0, 2, current),
        description: "Once upon a time, I took a trip to Southern Oregon, where he visited the cities in the area, including Ashland. It was a nice trip, and although it was smoky and hazy by the time I got to Ashland, I managed to get a fascinating sun-smoked image of the Elizabethan Stage at the Oregon Shakespeare Festival. It inspired me to make a little web application about why you should visit Ashland",
        link: "ashland",
        languages: "jQuery"
      },
      {
        image: "fortune",
        alt: "Read Your Fortune Cookie",
        title: "Read Your Fortune Cookie",
        created: "July 17, 2015",
        createdAt: howManyDaysAgo(2015, 6, 17, current),
        updated: "May 11, 2017",
        updatedAt: howManyDaysAgo(2017, 4, 11, current),
        description: "A simple yet mind boggling app that gives you a fortune cookie to read. All you got to do is fill in your name and age, and let the app do the rest. Don't you love 21st Century Single Page Application Technology. You never know what your fortune cookie will tell you! It's that simple! Trust me.",
        link: "fortune-cookie",
        languages: "AngularJS, Bootstrap, Sass, Grunt"
      },
      {
        image: "delaware",
        alt: "Duck Vs. Blue Hen",
        title: "Duck vs. Blue Hen!",
        created: "July 25, 2015",
        createdAt: howManyDaysAgo(2015, 6, 25, current),
        updated: "January 8, 2017",
        updatedAt: howManyDaysAgo(2017, 0, 8, current),
        description: "In an epic battle of the ages, we compare the Duck and the Blue Hen by comparing their state of choice. One the one end, we have the Duck representing Oregon. The other, it's Blue Hen representing Delaware. We find out who's better by comparing the states down to the core. So whose side are you on?",
        link: "battle",
        languages: "jQuery"
      },
      {
        image: "small",
        alt: "Great Small Towns",
        title: "Great Small Towns",
        created: "September 7, 2015",
        createdAt: howManyDaysAgo(2015, 8, 7, current),
        updated: "August 28, 2016",
        updatedAt: howManyDaysAgo(2015, 7, 28, current),
        description: "Yes, it's always fun to visit the big city lights. But what would happen if the massive crowds and noise got too much for you? That's why you should appreciate the finest in small town tourism. You may be surprised by how much is out there.",
        link: "small-town",
        languages: "AngularJS"
      },
      {
        image: "walla-walla",
        alt: "Walla Walla",
        title: "Adam's Wonderful Wild Weekend in Walla Walla Washington",
        created: "March 24, 2016",
        createdAt: howManyDaysAgo(2016, 2, 24, current),
        updated: "March 24, 2016",
        updatedAt: howManyDaysAgo(2016, 2, 24, current),
        description: "With a full time job at Seterus and the ability to take PTO, I took my first day off on Friday March 18th. Looking for action, I headed east to Walla Walla, Washington. Here's my trip to Walla Walla...",
        link: "walla-walla",
        languages: "jQuery"
      },
      {
        image: "artshowcase",
        alt: "Adam's Art Showcase",
        title: "Adam's Art Showcase",
        created: "April 16, 2016",
        createdAt: howManyDaysAgo(2016, 3, 16, current),
        updated: "May 29, 2017",
        updatedAt: howManyDaysAgo(2017, 4, 29, current),
        description: "Back in 2001-2002, I loved to draw and paint. It was a real passion. I must have spent hours drawing whatever interested me. I even made two projects of a select few with Microsoft PowerPoint. With my new web skills, I have turned my old projects into a web page full of my old drawings and paintings. Talk about a trip down memory lane.",
        link: "adamsartshowcase",
        languages: "React, React Router, Sass, Bootstrap, Gulp"
      },
      {
        image: "nama",
        alt: "Nama",
        title: "Overview of the Nama Language",
        created: "July 17, 2016",
        createdAt: howManyDaysAgo(2016, 6, 17, current),
        updated: "July 17, 2016",
        updatedAt: howManyDaysAgo(2016, 6, 17, current),
        description: "During my senior year of college at the University of Minnesota, I took a Linguistics class and had to write a final paper on a language of my choice. I chose Nama, a Khoisan langauge in Africa that's known for their click consonants. With that said, here is my 25 page paper turned into an Ember.js backed web project.",
        link: "nama",
        languages: "Ember"
      },
      {
        image: "reno-rnc",
        alt: "Reno Nice 'n' Cool",
        title: "Reno Nice 'n' Cool: A Better RNC",
        created: "August 5, 2016",
        createdAt: howManyDaysAgo(2016, 7, 5, current),
        updated: "August 5, 2016",
        updatedAt: howManyDaysAgo(2016, 7, 5, current),
        description: "With a week vacation from work, I went on a road trip down to Reno, where I visited the city, Lake Tahoe and plenty of places along the way. To see my adventures and get a better RNC experience, click the link below.",
        link: "reno",
        languages: "jQuery"
      },
      {
        image: "dreidel",
        alt: "Dreidel",
        title: "Dreidel Duel",
        created: "January 5, 2017",
        createdAt: howManyDaysAgo(2017, 0, 5, current),
        updated: "September 22, 2017",
        updatedAt: howManyDaysAgo(2017, 8, 22, current),
        description: "Built with React JS, this is a simple Dreidel game that can be played with two players.",
        link: "dreidel",
        languages: "React"
      },
      {
        image: "coen",
        alt: "Coen Brothers",
        title: "Coen Brothers Film Review",
        created: "February 9, 2017",
        createdAt: howManyDaysAgo(2017, 1, 9, current),
        updated: "February 9, 2017",
        updatedAt: howManyDaysAgo(2017, 1, 9, current),
        description: "This little project was built with Webpack, compiling Babel-transpiled JavaScript, Sass-transpiled CSS and HTML.  A bare-bones version, source-code for this project is available via GitHub",
        link: "film",
        languages: "jQuery, Webpack, Mocha/Chai, Bootstrap"
      },
      {
        image: "nfl",
        alt: "NFL Passer Rating",
        title: "NFL Passer Rating",
        created: "April 2, 2017",
        createdAt: howManyDaysAgo(2017, 3, 2, current),
        updated: "April 2, 2017",
        updatedAt: howManyDaysAgo(2017, 3, 2, current),
        description: "Built with React, compiled with Webpack, and tested with Mocha and Chai, my new version of the NFL Passer Rating web page is better designed, with more accessibility, a better UI and tested to be effective.  Source code available via GitHub.",
        link: "nfl-passer-rating",
        languages: "React, Webpack, Mocha/Chai, Foundation"
      },
      {
        image: "nadm2",
        alt: "NADM 2",
        title: "N.A.D.M. 2 - The Infamous",
        created: "September 4, 2017",
        createdAt: howManyDaysAgo(2017, 8, 4, current),
        updated: "September 4, 2017",
        updatedAt: howManyDaysAgo(2017, 8, 4, current),
        description: "Built with Angular 2 using TypeScript, this project is a blog-styled page showcasing pictures from my trip to the East Coast.  Source code available via GitHub.",
        link: "nadm2",
        languages: "Angular 2, TypeScript"
      },
      {
        image: "wildwildwest",
        alt: "Adam's Wild Wild West",
        title: "Adam's Wild Wild West",
        created: "October 1, 2017",
        createdAt: howManyDaysAgo(2017, 9, 0, current),
        updated: "October 1, 2017",
        updatedAt: howManyDaysAgo(2017, 9, 0, current),
        description: "Built with React, this picture carousel uses the Flickr API to get pictures from a album gallery.  Source code available via GitHub.",
        link: "wildwildwest",
        languages: "React"
      }
    ]

  }]);
