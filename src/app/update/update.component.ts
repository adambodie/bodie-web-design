import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.pug',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  constructor( ) { }

  updates = [
    { title: "Adam's Adventures", description: "Upgraded UI, added Jest/Redux.  March 19, 2019" },
    { title: "NFL Passer Rating", description: "Upgraded React, Webpack, Babel, added Jest.  February 18, 2019" }, 
    { title: "Adam's Black Ball", description: "Moved photos from Flickr to S3.  December 2, 2018" }, 
    { title: "Dreidel Duel", description: "Broke React down to Components, added testing, built with GatsbyJS, October 14, 2018" },
    { title: "Pigging Out in Spokane", description: "Launched September 29, 2018"}, 
    { title: "Leavenworth: The Bavarian Experience in Washington", description: "Launched July 7, 2018, built with Vue"},
    { title: "Adam's Black Ball", description: "Launched May 22, 2018, built with React"},
    { title: "Read Your Fortune Cookie", description: "Upgraded to Angular & TypeScript, January 28, 2018"},
    { title: "NFL Passer Rating", description: "Reconfigured components to allow flexibility of button colors, January 7, 2018"},      
    { title: "Dreidel Duel", description: "Added new feature, converted syntax to ES6, January 1, 2018" },       
    { title: "Reno Nice 'n' Cool", description: "Launched version 2.0 December 11, 2017, built with Vue.js" },      
    { title: "Adam's Adventures", description: "Launched November 23, 2017, built with React" },
  ]  
}
