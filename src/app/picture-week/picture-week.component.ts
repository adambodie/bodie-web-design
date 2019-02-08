import { Component, OnInit } from '@angular/core';
import {PicturesService} from '../services/pictures.service';
import {Picture} from '../../properties/picture';

@Component({
  selector: 'app-picture-week',
  templateUrl: './picture-week.component.pug',
  styleUrls: ['./picture-week.component.scss']
})
export class PictureWeekComponent implements OnInit {

  constructor(private picturesService: PicturesService ) { }
  pictures: Picture[];
  image = '';
  title = '';
  week = '';
  description = '';
  location = '';
  state = '';
  ngOnInit() {
    this.getPictures();
  }
  getPictures(): void {
    this.pictures = this.picturesService.getPictures();
    const pictures = this.pictures;
    const length = pictures.length - 1;
    this.image = pictures[length].image;
    this.title = pictures[length].title;
    this.description = pictures[length].description;
    this.week = pictures[length].week;
    this.location = pictures[length].location;
    this.state = pictures[length].state;
  } 
}
