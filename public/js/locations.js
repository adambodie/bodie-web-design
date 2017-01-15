var mapProp;
var markers = [];

function initMap() {
    var styles = [
    { featureType: 'landscape', stylers: [{color: '#20D820'}]},
    { featureType: 'landscape.terrain', stylers: [{color: '#20D820'}]},
    { featureType: 'water', stylers: [{color: '#0090FF'}]},
    { featureType: 'road', stylers: [{visibility: 'off'}]},
    { featureType: 'road.highway', stylers: [{ visibility: 'on'}, {color: "#000888"}]},
    { featureType: 'road.highway', elementType: 'labels.icon', stylers: [{ visibility: 'off'}]},
    { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{color: '#4A4946'}, {weight: 1}]},
    { featureType: 'all', elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }]},
    { featureType: 'all', elementType: 'labels.text.fill', stylers: [{ visibility: 'off'}]},
    { featureType: 'administrative.province', elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, {color: "#4A4946"}]},
    { featureType: 'administrative.province', elementType: 'labels.text.fill', stylers: [{ visibility: 'on' }, { color: "#ffffff"}]},
    { featureType: 'administrative.country', elementType: 'labels.text.stroke', stylers: [{ visibility: 'on'}, { color: "#000000"}]},
    { featureType: 'administrative.country', elementType: 'labels.text.fill', stylers: [{ visibility: 'on'}, { color: "#ffffff"}]},
    { featureType: 'administrative.locality', elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, {color: "#4A4946"}]},
    { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ visibility: 'on' }, { color: "#ffffff"}]},
    { featureType: 'administrative.locality', elementType: 'labels.icon', stylers: [{ visibility: 'off' }]}
    ];
    mapProp = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 39.828175,
                lng: -98.5795
            },
            zoom: 3,
            styles: styles,
            mapTypeControl: false
        });
    var locations = [
{
        title: "Buxton",
        image: "img/buxton.jpg",
        description: "Walking along the bridge on the Buxton Trail",
        location: "Buxton",
        state: "Oregon",
        week: "July 26, 2015",
        coordinates: {
            lat: 45.6984894,
            lng: -123.1859546
        }
    }, {
        title: "Budd Inlet",
        image: "img/budd.jpg",
        description: "Taking a stroll along the Budd Inlet.  Don&apos;t worry, that X won&apos;t symbolize your death like in The Departed",
        location: "Olympia",
        state: "Washington",
        week: "August 2, 2015",
        coordinates: {
            lat: 47.047166,
            lng: -122.894179
        }
    }, {
        title: "Netarts",
        image: "img/netarts.jpg",
        description: "Enjoying a nice foggy view at the Oregon Coast.",
        location: "Netarts",
        state: "Oregon",
        week: "August 9, 2015",
        coordinates: {
            lat: 45.4391124,
            lng: -123.9659997
        }
    }, {
        title: "Rowena",
        image: "img/rowena.jpg",
        description: "A fantastic view of Mt. Adams and the Columbia River with winds so high it will blow your hat right off!",
        location: "Rowena",
        state: "Oregon",
        week: "August 16, 2015",
        coordinates: {
            lat: 45.683036,
            lng: -121.3019939
        }
    }, {
        title: "Overlook Park",
        image: "img/overlook.jpg",
        description: "Shabbat in the Park: We all Scream for Ice Cream!",
        location: "Portland",
        state: "Oregon",
        week: "August 23, 2015",
        coordinates: {
            lat: 45.548526,
            lng: -122.6847511
        }
    }, {
        title: "St. Johns Bridge",
        image: "img/stjohns.jpg",
        description: "Looking up at the large and in-charge St. John&apos;s Bridge",
        location: "Portland",
        state: "Oregon",
        week: "August 30, 2015",
        coordinates: {
            lat: 45.5876911,
            lng: -122.774349
        }
    }, {
        title: "Pipestone National Monument",
        image: "img/pipestone.jpg",
        description: "Throwback pic of Pipestone National Monument in Minnesota.  That was a nice trip.",
        location: "Pipestone National Monument",
        state: "Minnesota",
        week: "September 6, 2015",
        coordinates: {
            lat: 43.9992065,
            lng: -96.3378342
        }
    }, {
        title: "View of Eugene",
        image: "img/eugene.jpg",
        description: "Reminiscing of old times in Eugene while seeing new spots.",
        location: "Eugene",
        state: "Oregon",
        week: "September 13, 2015",
        coordinates: {
            lat: 44.0426295,
            lng: -123.0635559
        }
    }, {
        title: "Koosah Falls",
        image: "img/koosah.jpg",
        description: "I forgot how wonderful this picture of Koosah Falls was.  Amazing!",
        location: "McKenzie River",
        state: "Oregon",
        week: "September 20, 2015",
        coordinates: {
            lat: 44.344010,
            lng: -122.000571
        }
    }, {
        title: "Nashville",
        image: "img/nashville.jpg",
        description: "Artwork and skyscraper perfectly aligned in Nashville.  Perfect, like Marcus Mariota.",
        location: "Nashville",
        state: "Tennessee",
        week: "September 27, 2015",
        coordinates: {
            lat: 36.1622108,
            lng: -86.7777105
        }
    }, {
        title: "Medford",
        image: "img/medford.jpg",
        description: "A nice picture of Medford, dedicated to those affected by the tragedy at Umpqua CC.",
        location: "Medford",
        state: "Oregon",
        week: "October 4, 2015",
        coordinates: {
            lat: 42.3434055,
            lng: -122.7923176
        }
    }, {
        title: "Tilikum Crossing",
        image: "img/tilikum.jpg",
        description: "Tilikum Crossing: Bridge of the People.  Because the Native Chinook never drove cars.",
        location: "Portland",
        state: "Oregon",
        week: "October 11, 2015",
        coordinates: {
            lat: 45.5022692,
            lng: -122.6697535
        }
    }, {
        title: "Mt. Rushmore",
        image: "img/rushmore.JPG",
        description: "Mt. Rushmore, beautiful even in the the less celebrated views.",
        location: "Mt. Rushmore National Monument",
        state: "South Dakota",
        week: "October 18, 2015",
        coordinates: {
            lat: 43.8791985,
            lng: -103.4609176
        }
    }, {
        title: "Ashwaubenon",
        image: "img/ashwaubenon.jpg",
        description: "Ashwaubenon, WI: Where I once sneaked into someone&apos;s yard to take this picture of the Fox River sunrise.  Strange but true!",
        location: "Ashwaubenon",
        state: "Wisconsin",
        week: "October 25, 2015",
        coordinates: {
            lat: 44.4862063,
            lng: -88.0521054
        }
    }, {
        title: "Halloween 2015",
        image: "img/halloween.jpg",
        description: "Happy Halloween! My 2015 costume: A Rastafarian with a triple-chin.",
        location: "Beaverton",
        state: "Oregon",
        week: "November 1, 2015",
        coordinates: {
            lat: 45.4837285,
            lng: -122.8681158
        }
    }, {
        title: "Boston",
        image: "img/boston.JPG",
        description: "I wish I was in Boston.  Lucky for those who are there.",
        location: "Boston",
        state: "Massachusetts",
        week: "November 8, 2015",
        coordinates: {
            lat: 42.3544287,
            lng: -71.0961212
        }
    }, {
        title: "Portland Prays for Paris",
        image: "img/paris.jpg",
        description: "Pray for Paris, Sincerely: Portland.",
        location: "Portland",
        state: "Oregon",
        week: "November 15, 2015",
        coordinates: {
            lat: 45.5247225,
            lng: -122.6691346
        }
    }, {
        title: "Monterosso al Mare",
        image: "img/monterosso.JPG",
        description: "Monterosso al Mare, a beautiful spot along Italy&apos;s famed Cinque Terre.",
        location: "Monterosso al Mare",
        state: "Italy",
        week: "November 22, 2015",
        coordinates: {
            lat: 44.1447633,
            lng: 9.6529695
        }
    }, {
        title: "Duluth",
        image: "img/duluth.jpg",
        description: "Seeing commercials for Duluth Trading underwear made me think of my trip to Duluth, Minnesota.",
        location: "Duluth",
        state: "Minnesota",
        week: "November 29, 2015",
        coordinates: {
            lat: 46.7826483,
            lng: -92.1186899
        }
    }, {
        title: "John Day Fossil Beds",
        image: "img/hay.jpg",
        description: "Sometimes the simple things in life are fascinating.",
        location: "John Day Fossil Beds",
        state: "Oregon",
        week: "December 6, 2015",
        coordinates: {
            lat: 44.5100204,
            lng: -119.6472026
        }
    }, {
        title: "Happy Hanukkah",
        image: "img/hanukkah.jpg",
        description: "Best Hanukkah Picture Ever...Happy Hanukkah!!!",
        location: "Baltimore",
        state: "Maryland",
        week: "December 13, 2015",
        coordinates: {
            lat: 39.286438,
            lng: -76.611167
        }
    }, {
        title: "Merry Hodag Christmas",
        image: "img/hodag.jpg",
        description: "And my favorite Christmas Picture...courtesy of the Hodag of Rhinelander, Wisconsin.",
        location: "Rhinelander",
        state: "Wisconsin",
        week: "December 20, 2015",
        coordinates: {
            lat: 45.6318086,
            lng: -89.4246695
        }
    }, {
        title: "Grand Canyon Birthday",
        image: "img/sunset.jpg",
        description: "Ending 2015 with my highlight, my 30th Birthday at the Grand Canyon!!!",
        location: "Grand Canyon National Park",
        state: "Arizona",
        week: "December 27, 2015",
        coordinates: {
            lat: 36.0528421,
            lng: -112.1474886
        }
    }, {
        title: "Portland, Oregon",
        image: "img/portland.jpg",
        description: "Beginning the New Year in Portland, my hometown.",
        location: "Portland",
        state: "Oregon",
        week: "January 3, 2016",
        coordinates: {
            lat: 45.5230689,
            lng: -122.669786
        }
    }, {
        title: "My Selfie with Abraham Lincoln",
        image: "img/lincoln.jpg",
        description: "My selfie with Abraham Lincoln.  Sweet!",
        location: "Springfield",
        state: "Illinois",
        week: "January 10, 2016",
        coordinates: {
            lat: 39.8018856,
            lng: -89.6531002
        }
    }, {
        title: "The Winter Carnival",
        image: "img/winter.jpg",
        description: "Nothing says &apos;I love Winter&apos; more than a Winter Carnival",
        location: "St. Paul",
        state: "Minnesota",
        week: "January 17, 2016",
        coordinates: {
            lat: 44.9398395,
            lng: -93.0938131
        }
    }, {
        title: "Cholla Cacti at Joshua Tree",
        image: "img/joshua.jpg",
        description: "The opposite of a massive Winter Storm...a hot dry desert with little water.",
        location: "Joshua Tree National Park",
        state: "California",
        week: "January 24, 2016",
        coordinates: {
            lat: 33.9247686,
            lng: -115.9381658
        }
    }, {
        title: "Mt. Adams",
        image: "img/adams.jpg",
        description: "A beautiful shot of my mountain, Mt. Adams.",
        location: "Trout Lake",
        state: "Washington",
        week: "January 31, 2016",
        coordinates: {
            lat: 45.9984715,
            lng: -121.5328989
        }
    }, {
        title: "Bison crossing the road",
        image: "img/buffalo.JPG",
        description: "Hi, we&apos;re stuck in traffic, Bison are crossing the road.  Yep, it can happen.",
        location: "Yellowstone National Park",
        state: "Wyoming",
        week: "February 7, 2016",
        coordinates: {
            lat: 44.439763,
            lng: -110.669235
        }
    }, {
        title: "The magnificent Oneonta Gorge",
        image: "img/oneonta.jpg",
        description: "The Magnificent Oneonta Gorge, even in Black & White",
        location: "Oneonta Gorge",
        state: "Oregon",
        week: "February 14, 2016",
        coordinates: {
            lat: 45.5784358,
            lng: -122.0859242
        }
    }, {
        title: "Humuhumunukunukuapua'a Wai'anapanapa",
        image: "img/hawaii.jpg",
        description: "Looking outside my window makes me want to go to the beautiful tropical Hawaii",
        location: "Wai'anapanapa State Park",
        state: "Hawaii",
        week: "February 21, 2016",
        coordinates: {
            lat: 20.7931503,
            lng: -156.0962271
        }
    }, {
        title: "The Great UFO Mystery at St. Mark's Basilica",
        image: "img/venice.jpg",
        description: "The great unsolved mystery of the UFO I saw at St. Mark&apos;s Basilica.",
        location: "Venice",
        state: "Italy",
        week: "February 28, 2016",
        coordinates: {
            lat: 45.4331981,
            lng: 12.3370517
        }
    }, {
        title: "Rainbow at Work",
        image: "img/rainbow.jpg",
        description: "Sometimes it&apos;s good to be in the right place at the right time.",
        location: "Beaverton",
        state: "Oregon",
        week: "March 6, 2016",
        coordinates: {
            lat: 45.4826761,
            lng: -122.8383596
        }
    }, {
        title: "My Dad's Blue Picture of Dutch Harbor",
        image: "img/blue.jpg",
        description: "My Dad took this picture in Dutch Harbor: I&apos;d feel blue too being here.",
        location: "Dutch Harbor",
        state: "Alaska",
        week: "March 13, 2016",
        coordinates: {
            lat: 53.9059889,
            lng: -166.7152001
        }
    }, {
        title: "Amazing Palouse Falls, I apologize for nothing.",
        image: "img/palouse.jpg",
        description: "Amazing Palouse Falls, I apologize for nothing.",
        location: "Palouse Falls State Park",
        state: "Washington",
        week: "March 20, 2016",
        coordinates: {
            lat: 46.6674789,
            lng: -118.2520072
        }
    }, {
        title: "Our cherry blossoms are better than D.C.&apos;s.",
        image: "img/salem.jpg",
        description: "Our cherry blossoms are better than D.C.&apos;s.",
        location: "Salem",
        state: "Oregon",
        week: "March 27, 2016",
        coordinates: {
            lat: 44.940109,
            lng: -123.029565
        }
    }, {
        title: "Cloud Gate",
        image: "img/cloudgate.jpg",
        description: "Nothing says amazing more than Chicago&apos;s Cloud Gate.",
        location: "Chicago",
        state: "Illinois",
        week: "April 3, 2016",
        coordinates: {
            lat: 41.8825103,
            lng: -87.6231128
        }
    }, {
        title: "Kites at Seaside",
        image: "img/seaside.jpg",
        description: "Having an adventure when you least expect it makes it even better!",
        location: "Seaside",
        state: "Oregon",
        week: "April 10, 2016",
        coordinates: {
            lat: 45.993493,
            lng: -123.931113
        }
    }, {
        title: "Vítejte na krásné Praze, v České republice!",
        image: "img/prague.jpg",
        description: "Vítejte na krásné Praze, v České republice!",
        location: "Prague",
        state: "Czech Republic",
        week: "April 17, 2016",
        coordinates: {
            lat: 50.086313,
            lng: 14.414042
        }
    }, {
        title: "R.I.P. Prince",
        image: "img/first-avenue.jpg",
        description: "R.I.P. Prince",
        location: "Minneapolis",
        state: "Minnesota",
        week: "April 24, 2016",
        coordinates: {
            lat: 44.9784749,
            lng: -93.2736283
        }
    }, {
        title: "Two dogs out for a race enjoying life, the way it should be",
        image: "img/dogs.jpg",
        description: "Two dogs out for a race enjoying life, the way it should be",
        location: "Hood River",
        state: "Oregon",
        week: "May 1, 2016",
        coordinates: {
            lat: 45.7151495,
            lng: -121.5102629
        }
    }, {
        title: "My birthday present eight years ago: A trip to Denver, fun times!",
        image: "img/denver.jpg",
        description: "My birthday present eight years ago: A trip to Denver, fun times!",
        location: "Denver",
        state: "Colorado",
        week: "May 8, 2016",
        coordinates: {
            lat: 39.7391932,
            lng: -104.9892763
        }
    }, {
        title: "The Gateway Arch: How something so simple can be so Perfect.",
        image: "img/gateway.jpg",
        description: "The Gateway Arch: How something so simple can be so Perfect.",
        location: "St. Louis",
        state: "Missouri",
        week: "May 15, 2016",
        coordinates: {
            lat: 38.618968,
            lng: -90.184835
        }
    }, {
        title: "To help a friend who needs cheering up: A nice picture of a beach in the best place for beaches, Maui.",
        image: "img/lahaina.jpg",
        description: "To help a friend who needs cheering up: A nice picture of a beach in the best place for beaches, Maui.",
        location: "Lahaina",
        state: "Hawaii",
        week: "May 22, 2016",
        coordinates: {
            lat: 20.87284,
            lng: -156.6808077
        }
    }, {
        title: "Look Mom!  I made it to the top of the Monkey Face...I wish.",
        image: "img/monkey.jpg",
        description: "Look Mom!  I made it to the top of the Monkey Face...I wish.",
        location: "Smith Rock State Park",
        state: "Oregon",
        week: "May 29, 2016",
        coordinates: {
            lat: 44.370424,
            lng: -121.142440
        }
    }, {
        title: "To honor a friend who&apos;s living life happy and free as he should.  I&apos;m proud.",
        image: "img/moscone.jpg",
        description: "To honor a friend who&apos;s living life happy and free as he should.  I&apos;m proud.",
        location: "San Francisco",
        state: "California",
        week: "June 5, 2016",
        coordinates: {
            lat: 37.7838717,
            lng: -122.4034264
        }
    }, {
        title: "What happens in the middle of nowhere, stays in the middle of nowhere.",
        image: "img/nowhere.jpg",
        description: "What happens in the middle of nowhere, stays in the middle of nowhere.",
        location: "Wheeler County",
        state: "Oregon",
        week: "June 12, 2016",
        coordinates: {
            lat: 44.5643739,
            lng: -120.4316954
        }
    }, {
        title: "I couldn&apos;t choose one Picture of the Week from my day trip to Mt. Rainier, so I chose 16 instead.  Click on them to see them full size.",
        image: "img/rainier-collage.jpg",
        description: "I couldn&apos;t choose one Picture of the Week from my day trip to Mt. Rainier, so I chose 16 instead.  Click on them to see them full size.",
        location: "Mt. Rainier National Park",
        state: "Washington",
        week: "June 19, 2016",
        coordinates: {
            lat: 46.7853299,
            lng: -121.743728
        }
    }, {
        title: "Summer begins, here's hoping it's not as hot as Las Vegas in July.",
        image: "img/mirage.jpg",
        description: "Summer begins, here&apos;s hoping it&apos;s not as hot as Las Vegas in July.",
        location: "Las Vegas",
        state: "Nevada",
        week: "June 26, 2016",
        coordinates: {
            lat: 36.1246642,
            lng: -115.1870294
        }
    }, {
        title: "Happy 4th of July, from someone who loves America!",
        image: "img/white-house.jpg",
        description: "Happy 4th of July, from someone who loves America!",
        location: "Washington",
        state: "D.C.",
        week: "July 3, 2016",
        coordinates: {
            lat: 38.8890984,
            lng: -77.0393706
        }
    }, {
        title: "Rule Number 1 for a Successful Roadtrip, Make sure your car is in good shape.  Learned that in Alabama.",
        image: "img/cathedral-cavern.jpg",
        description: "Rule Number 1 for a Successful Roadtrip, Make sure your car is in good shape.  Learned that in Alabama.",
        location: "Cathedral Caverns State Park",
        state: "Alabama",
        week: "July 10, 2016",
        coordinates: {
            lat: 34.5696687,
            lng: -86.2422688
        }
    }, {
        title: "The Future for me started in 2005 at the Ars Electronica Center in Linz, Austria",
        image: "img/ars.jpg",
        description: "The Future for me started in 2005 at the Ars Electronica Center in Linz, Austria",
        location: "Linz",
        state: "Austria",
        week: "July 17, 2016",
        coordinates: {
            lat: 48.3059851,
            lng: 14.2746958
        }
    }, {
        title: "The Higher the Better: The Story of My Trip to Reno",
        image: "img/reno.jpg",
        description: "The Higher the Better: The Story of My Trip to Reno",
        location: "Reno",
        state: "Nevada",
        week: "July 24, 2016",
        coordinates: {
            lat: 39.5328259,
            lng: -119.8256894
        }
    }, {
        title: "Kinda looks like Lake Tahoe doesn&apos;t it?  But no, it&apos;s Crater Lake",
        image: "img/crater.jpg",
        description: "Kinda looks like Lake Tahoe doesn&apos;t it?  But no, it&apos;s Crater Lake",
        location: "Crater Lake National Park",
        state: "Oregon",
        week: "July 31, 2016",
        coordinates: {
            lat: 42.8653513,
            lng: -122.2113034
        }
    }, {
        title: "The Columbia River: A Great Place in Oregon to show to your Cousin",
        image: "img/columbia.jpg",
        description: "The Columbia River: A Great Place in Oregon to show to your Cousin",
        location: "Portland",
        state: "Oregon",
        week: "August 7, 2016",
        coordinates: {
            lat: 45.6007918,
            lng: -122.6455796
        }
    }, {
        title: "Everything&apos;s better when bigger, including Shuttlecocks",
        image: "img/shuttlecock.jpg",
        description: "Everything&apos;s better when bigger, including Shuttlecocks",
        location: "Kansas City",
        state: "Missouri",
        week: "August 14, 2016",
        coordinates: {
            lat: 39.046214,
            lng: -94.5925345
        }
    }, {
        title: "Remember when Detroit Lake was actually filled with water?  I do.",
        image: "img/detroit-lake.jpg",
        description: "Remember when Detroit Lake was actually filled with water?  I do.",
        location: "Detroit Lake",
        state: "Oregon",
        week: "August 21, 2016",
        coordinates: {
            lat: 44.697802,
            lng: -122.218496
        }
    }, {
           title : "Cahokia Mounds: Where Native American history meets big city views",
           image : "img/cahokia.jpg",
           description : "Cahokia Mounds: Where Native American history meets big city views",
           location : "Cahokia Mounds",
           state : "Illinois",
           week : "August 28, 2016",
           coordinates: {
                lat: 38.6550643,
                lng: -90.0640115
           }
       },{
           title : "Sometimes, the best joys in life are at home.",
           image : "img/home.jpg",
           description : "Sometimes, the best joys in life are at home.",
           location : "Beaverton",
           state : "Oregon",
           week : "September 4, 2016",
           coordinates: {
                lat: 45.500668,
                lng: -122.902098
           }
       },{
           title : "I love Mountains.  Central Oregon has plenty great Mountains.",
           image : "img/sister.jpg",
           description : "I love Mountains.  Central Oregon has plenty great Mountains.",
           location : "Cascade Lakes Scenic Byway",
           state : "Oregon",
           week : "September 11, 2016",
           coordinates: {
                lat: 43.9174603,
                lng: -121.8186165
           }
       },{
           title : "Respect your Opponent: Some things are bigger than a Game.",
           image : "img/omaha.jpg",
           description : "Respect your Opponent: Some things are bigger than a Game.",
           location : "Omaha",
           state : "Nebraska",
           week : "September 18, 2016",
           coordinates: {
               lat: 41.2555843,
               lng: -95.9374766
            }
       },{
           title : "Is this the turning point to the biggest mystery ever? Only time will tell...",
           image : "img/winona.jpg",
           description : "Is this the turning point to the biggest mystery ever? Only time will tell...",
           location : "Winona",
           state : "Minnesota",
           week : "September 25, 2016",
           coordinates: {
                lat: 44.0347799,
                lng: -91.654577
             }
       },{
           title : "Putting the Locks on Cascade Locks",
           image : "img/locks.jpg",
           description : "Putting the Locks on Cascade Locks",
           location : "Cascade Locks",
           state : "Oregon",
           week : "October 2, 2016",
           coordinates: {
                  lat: 45.6749851,
                  lng: -121.9051406
                 }
      },{
           title : "My thoughts to those affected by Hurricane Matthew.  Jacksonville much nicer when my Mom visited.",
           image : "img/jacksonville.jpg",
           description : "My thoughts to those affected by Hurricane Matthew.  Jacksonville much nicer when my Mom visited.",
           location : "Jacksonville",
           state : "Florida",
           week : "October 9, 2016",
           coordinates: {
                lat: 30.3216626,
                lng: -81.6720094
               }
       },{
           title : "In honor of my cousins from Tennessee visiting, a picture inside Ruby Falls Cave.",
           image : "img/ruby.jpg",
           description : "In honor of my cousins from Tennessee visiting, a picture inside Ruby Falls Cave.",
           location : "Ruby Falls",
           state : "Tennessee",
           week : "October 16, 2016",
           coordinates: {
                lat: 35.0101349,
                lng: -85.3386472
               }
       },{
           title : "Cat vs. Mole, the Epic Battle",
           image : "img/cat-vs-mole.jpg",
           description : "Cat vs. Mole, the Epic Battle",
           location : "Beaverton",
           state : "Oregon",
           week : "October 23, 2016",
           coordinates: {
                lat: 45.5055146,
                lng: -122.892767
            }
       },{
            title : "If this isn&apos;t what life&apos;s all about, I don&apos;t know what is",
            image : "img/double-rainbow.jpg",
            description : "If this isn&apos;t what life&apos;s all about, I don&apos;t know what is",
            location : "Beaverton",
            state : "Oregon",
            week : "October 30, 2016",
            coordinates: {
                 lat: 45.5071748,
                 lng: -122.9043866
              }
        },{
            title : "The future of our country could be made here: I held a bell for Red, White and Blue.  Not White, Blue and Red",
            image : "img/reno-bell.jpg",
            description : "The future of our country could be made here: I held a bell for Red, White and Blue.  Not White, Blue and Red",
            location : "Reno",
            state : "Nevada",
            week : "November 6, 2016",
            coordinates: {
                 lat: 39.5281353,
                 lng: -119.8158833
              }
        },{
            title : "Pompeii: A perfect analogy to describe what the United States moral values have become with Dictator Trump in charge",
            image : "img/pompeii.jpg",
            description : "Pompeii: A perfect analogy to describe what the United States moral values have become with Dictator Trump in charge",
            location : "Pompeii",
            state : "Italy",
            week : "November 13, 2016",
                coordinates: {
                    lat: 40.7501102,
                    lng: 14.3350664
                }
        },{
            title : "Welcome to Wisconsin: Home of the Cheese, Land of the Fat",
            image : "img/sheboygan.jpg",
            description : "Welcome to Wisconsin: Home of the Cheese, Land of the Fat",
            location : "Sheboygan",
            state : "Wisconsin",
            week : "November 20, 2016",
                coordinates: {
                    lat: 43.7509609,
                    lng: -87.7087782
                }
        },{
            title : "Native Americans deserve more respect than they get",
            image : "img/warm-springs.jpg",
            description : "Native Americans deserve more respect than they get",
            location : "Warm Springs",
            state : "Oregon",
            week : "November 27, 2016",
                coordinates: {
                    lat: 44.7634432,
                    lng: -121.271032
                }
        },{
            title : "Winter&apos;s almost here, time to bundle up!",
            image : "img/blizzard.jpg",
            description : "Winter&apos;s almost here, time to bundle up!",
            location : "Minneapolis",
            state : "Minnesota",
            week : "December 4, 2016",
                coordinates: {
                    lat: 44.970159,
                    lng: -93.220517
                }
        },{
            title : "A crazy week is all you need to wish you were in Hawaii",
            image : "img/beach.jpg",
            description : "A crazy week is all you need to wish you were in Hawaii",
            location : "Ka'anapali",
            state : "Hawaii",
            week : "December 11, 2016",
                coordinates: {
                    lat: 20.9331934,
                    lng: -156.6999958
                }
        },{
            title : "A Car Parts Winter Wonderland",
            image : "img/car-parts.jpg",
            description : "A Car Parts Winter Wonderland",
            location : "Sherwood",
            state : "Oregon",
            week : "December 18, 2016",
                coordinates: {
                    lat: 45.3736771,
                    lng: -122.8315957
                }
        },{
            title : "Happy Holidays!",
            image : "img/holiday.jpg",
            description : "Happy Holidays!",
            location : "Baltimore",
            state : "Maryland",
            week : "December 25, 2016",
                coordinates: {
                    lat: 39.3299884,
                    lng: -76.6351916
                }
        },{
                  title : "Happy New Years!",
                  image : "img/tahoe.jpg",
                  description : "Happy New Years!",
                  location : "Lake Tahoe",
                  state : "California",
                  week : "January 1, 2017",
                      coordinates: {
                          lat: 38.9543005,
                          lng: -120.1140641
                      }
        },{
                    title : "Start the New Year off right",
                    image : "img/sunrise.jpg",
                    description : "Start the New Year off right",
                    location : "Worth County",
                    state : "Iowa",
                    week : "January 8, 2017",
                        coordinates: {
                            lat: 43.3772931,
                            lng: -93.4009498
                        }
                  }
];
    var infoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].coordinates;
        var title = locations[i].location;
        var image = locations[i].image;
        var description = locations[i].description;
        var week = locations[i].week;

        var marker = new google.maps.Marker({
                map: mapProp,
                position: position,
                title: title,
                image: image,
                icon:'img/star.gif',
                description: description,
                week: week,
                id: i
            });
        markers.push(marker);

        marker.addListener('click', function() {
            populateInfoWindow(this, infoWindow);
            mapProp.setCenter(this.position);
            mapProp.setZoom(9);
        });
    }

    function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent("<a href='" + marker.image + "'data-imagelightbox='a' ><img src='" + marker.image + "' alt='" + marker.description + "' width='60px' height='45px' class='center-block'></a><p><strong>" + marker.title + "</strong></p><p>Week of: " + marker.week + "</p>");
            infowindow.open(mapProp, marker);
            infowindow.addListener('closeclick', function() {
                return null;
            });
        }
    }
}
