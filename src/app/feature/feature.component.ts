import { Component, OnInit } from '@angular/core';
import { Feature } from '../../properties/feature';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.pug',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  feature: Feature[] = [{
    id: 1,
    image : "adventures",
    title : "Adam's Adventures",
    link : "adventures"
  },
  {
    id: 2,
    image : "wildwildwest",
    title : "Adam's Wild Wild West",
    link : "wildwildwest"
  }
];
  random = Math.floor(Math.random() * this.feature.length);
  randomImage = this.feature[this.random].image;
  randomLink = this.feature[this.random].link;
  randomTitle = this.feature[this.random].title;
  constructor() { }

  ngOnInit() {
  }

}
