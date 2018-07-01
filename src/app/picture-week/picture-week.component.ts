import { Component, OnInit } from '@angular/core';
import {PicturesService} from '../pictures.service';
import {Picture} from '../../properties/picture';
import {Coordinate} from '../../properties/coordinate';

@Component({
  selector: 'app-picture-week',
  templateUrl: './picture-week.component.pug',
  styleUrls: ['./picture-week.component.scss']
})
export class PictureWeekComponent implements OnInit {

  constructor(private picturesService: PicturesService ) { }
  pictures: Picture[];
  coordinate: Coordinate[];
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
    this.image = this.pictures[this.pictures.length - 1].image;
    this.title = this.pictures[this.pictures.length - 1].title;
    this.description = this.pictures[this.pictures.length - 1].description;
    this.week = this.pictures[this.pictures.length - 1].week;
    this.location = this.pictures[this.pictures.length - 1].location;
    this.state = this.pictures[this.pictures.length - 1].state;
  }
}
